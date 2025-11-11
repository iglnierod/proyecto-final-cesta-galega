'use client';
import { useAlert } from '@/app/context/AlertContext';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import ProductForm from '@/app/components/ProductForm';
import { Product } from '@/app/generated/prisma';

export default function AddProductButton({
  businessId,
  onCreated,
}: {
  businessId: number | undefined;
  onCreated?: (p: Product) => void;
}) {
  const { showAlert } = useAlert();
  const MySwal = withReactContent(Swal);

  // Manejar click en botón
  async function handleClick() {
    if (!businessId) {
      showAlert('Ocorreu un erro coa identificación. Volva iniciar sesión.', 'error');
    }

    // Lanzar modal de creación de producto
    await MySwal.fire({
      title: 'Novo produto',
      html: (
        <ProductForm
          create={true}
          businessId={businessId}
          onSuccess={(p) => {
            showAlert('Produto creado con éxito', 'success');
            onCreated?.(p);
          }}
        />
      ),
      showConfirmButton: false,
      showCancelButton: false,
      width: 800,
    });
  }

  // Devolver botón de nuevo producto
  return (
    <div className="">
      <button
        type="button"
        onClick={() => handleClick()}
        title="Novo produto"
        className="btn btn-primary rounded btn-wide"
      >
        Novo produto
      </button>
    </div>
  );
}
