// app/components/ReviewForm.tsx
'use client';

import { FormEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {
  CreateOrderReviewInput,
  createOrderReviewSchema,
  type ProductReviewDTO,
  ProductReviewDTOSchema,
} from '@/app/lib/review/userProduct.schema';

type ReviewFormProps = {
  orderId: number;
  productId: number;
  productName: string;
  onSuccessAction?: () => void;
};

export default function ReviewForm({
  orderId,
  productId,
  productName,
  onSuccessAction,
}: ReviewFormProps) {
  const [rating, setRating] = useState<number>(3);
  const [title, setTitle] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  // Cargar review existente
  useEffect(() => {
    const loadExistingReview = async () => {
      try {
        setLoadingInitial(true);
        setFormError(null);

        const res = await fetch(`/api/order/${orderId}/review?productId=${productId}`);

        if (!res.ok) return;

        const json = (await res.json()) as { review?: unknown; error?: string };

        if (!json.review) return;

        const parsed = ProductReviewDTOSchema.safeParse(json.review);
        if (!parsed.success) {
          console.warn('Review mal formada no backend', parsed.error);
          return;
        }

        const existing: ProductReviewDTO = parsed.data;
        setRating(existing.rating);
        setTitle(existing.title);
        setReview(existing.review);
      } catch (err) {
        console.warn('Erro ao cargar a review existente', err);
      } finally {
        setLoadingInitial(false);
      }
    };

    void loadExistingReview();
  }, [orderId, productId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const formData: CreateOrderReviewInput = {
      rating,
      title,
      review,
    };

    const validation = createOrderReviewSchema.safeParse(formData);

    if (!validation.success) {
      const firstError =
        validation.error.issues[0]?.message ?? 'Hai erros no formulario. Revisa os campos.';
      setFormError(firstError);
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(`/api/order/${orderId}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          rating: validation.data.rating,
          title: validation.data.title,
          review: validation.data.review,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string; review?: unknown };

      if (!res.ok) {
        const errorMessage =
          (typeof data.error === 'string' && data.error) || 'Erro ao gardar a valoración';
        throw new Error(errorMessage);
      }

      if (onSuccessAction) {
        onSuccessAction();
      }

      Swal.close();
    } catch (err: unknown) {
      let message = 'Erro inesperado ao gardar a valoración';
      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === 'string') {
        message = err;
      }
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    Swal.close();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
      <p className="text-sm text-base-content/80">
        Estás a valorar: <span className="font-semibold">{productName}</span>
      </p>

      <div className="form-control">
        <label htmlFor="review-rating" className="label">
          <span className="label-text text-sm">Nota (0 - 5)</span>
        </label>
        <input
          id="review-rating"
          type="number"
          min={0}
          max={5}
          step={0.5}
          className="input input-bordered w-full"
          value={Number.isNaN(rating) ? '' : rating}
          onChange={(e) => {
            const value = e.target.value;
            const parsed = value === '' ? NaN : Number(value);
            setRating(parsed);
          }}
          disabled={loadingInitial || submitting}
        />
      </div>

      <div className="form-control">
        <label htmlFor="review-title" className="label">
          <span className="label-text text-sm">Título</span>
        </label>
        <input
          id="review-title"
          type="text"
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Produto excelente"
          disabled={loadingInitial || submitting}
        />
      </div>

      <div className="form-control">
        <label htmlFor="review-comment" className="label">
          <span className="label-text text-sm">Comentario</span>
        </label>
        <textarea
          id="review-comment"
          className="textarea textarea-bordered w-full"
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Escribe aquí a túa experiencia co produto..."
          disabled={loadingInitial || submitting}
        />
      </div>

      {formError && <p className="text-error text-sm mt-1">{formError}</p>}

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={handleCancel}
          disabled={submitting}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-sm"
          disabled={submitting || loadingInitial}
        >
          {submitting ? 'Gardando...' : 'Gardar valoración'}
        </button>
      </div>
    </form>
  );
}
