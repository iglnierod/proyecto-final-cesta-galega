import { NextResponse } from 'next/server';
import { ProductUpdateSchema } from '@/app/lib/product/product.schema';
import {
  findProductByIdWithBusiness,
  softDeleteProduct,
  updateProduct,
} from '@/app/lib/product/product.repo';
import { toProductWithBusinessDTO } from '@/app/lib/product/product.mapper';

// Devolver datos de producto
export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    // Obtener id de producto enviada por parámetros
    const id = Number(productId);

    // Si el id no es válido
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'ID de produto non válido' }, { status: 400 });
    }

    // Obtener datos de producto con ese id desde el repo
    const product = await findProductByIdWithBusiness(id);

    // Si el producto no se encuentra o está borrado lógicamente
    if (!product || product.deleted) {
      return NextResponse.json({ error: 'Produto non atopado' }, { status: 404 });
    }

    // Mapear a DTO
    const dto = toProductWithBusinessDTO(product);

    // Devolver datos del producto
    return NextResponse.json({ product: dto });
  } catch (error) {
    // Si falla algo devolver error
    console.error(error);
    return NextResponse.json({ error: 'Erro ao obter o produto' }, { status: 500 });
  }
}

// Actualizar producto
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    // Obtener id de producto enviado por parámetros
    const id = Number(productId);

    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'ID de produto non válido' }, { status: 400 });
    }

    // Obtener datos de producto de la petición
    const body = await request.json();

    // Mezclar el id de la ruta con el body y validar con Zod
    const parsed = ProductUpdateSchema.safeParse({ ...body, id });

    // Si los datos no son válidos
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos non válidos', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    // Actualizar producto usando el repo
    const updated = await updateProduct(id, parsed.data);

    // Mapear a DTO
    const dto = toProductWithBusinessDTO(updated);

    // Devolver producto actualizado
    return NextResponse.json({ product: dto });
  } catch (error) {
    // Si falla algo enviar error
    console.error(error);
    return NextResponse.json({ error: 'Erro ao actualizar o produto' }, { status: 500 });
  }
}

// Borrado lóxico de produto
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    const id = Number(productId);

    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'ID de produto non válido' }, { status: 400 });
    }

    // Borrado lógico a través del repo
    const deletedProduct = await softDeleteProduct(id);

    // Mapear a DTO
    const dto = toProductWithBusinessDTO(deletedProduct);

    return NextResponse.json({ product: dto }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao eliminar o produto' }, { status: 500 });
  }
}
