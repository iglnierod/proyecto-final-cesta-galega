'use client';
import { useAlert } from '@/app/context/AlertContext';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import ProductForm from '@/app/components/ProductForm';
import { mutate } from 'swr';

export default function AddProductButton({ businessId }: { businessId: number | undefined }) {
  const { showAlert } = useAlert();
  const MySwal = withReactContent(Swal);

  async function handleClick() {
    if (!businessId) {
      showAlert('Ocorreu un erro coa identificación. Volva iniciar sesión.', 'error');
      return;
    }

    await MySwal.fire({
      title: 'Novo produto',
      html: (
        <ProductForm
          create={true}
          businessId={businessId}
          onSuccess={() => {
            showAlert('Produto creado con éxito', 'success');
            // 🔁 Revalidar la lista
            mutate(`/api/product?businessId=${businessId}`);
          }}
        />
      ),
      showConfirmButton: false,
      width: 800,
    });
  }

  return (
    <div className="">
      <button
        type="button"
        onClick={handleClick}
        title="Novo produto"
        className="btn btn-primary rounded btn-wide"
      >
        Novo produto
      </button>
    </div>
  );
}
