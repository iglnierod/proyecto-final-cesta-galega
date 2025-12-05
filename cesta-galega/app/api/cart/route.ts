import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import {
  addItemToCart,
  getCartForUser,
  removeCartItem,
  updateCartItemQuantity,
} from '@/app/lib/order/order.repo';
import {
  CartRemoveItemSchema,
  CartUpdateItemSchema,
  OrderItemInputSchema,
} from '@/app/lib/order/order.schema';

export async function GET(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;

    if (!decoded.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const cart = await getCartForUser(decoded.userId);

    return NextResponse.json({ cart });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao obter o carro' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const input = OrderItemInputSchema.parse(body);

    const cart = await addItemToCart(decoded.userId, input.productId, input.quantity);

    return NextResponse.json({ cart }, { status: 201 });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao actualizar o carriño' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const input = CartUpdateItemSchema.parse(body);

    const cart = await updateCartItemQuantity(decoded.userId, input.orderProductId, input.quantity);

    return NextResponse.json({ cart }, { status: 200 });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao actualizar o carro' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const input = CartRemoveItemSchema.parse(body);

    const cart = await removeCartItem(decoded.userId, input.orderProductId);

    return NextResponse.json({ cart }, { status: 200 });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao actualizar o carro' }, { status: 500 });
  }
}
