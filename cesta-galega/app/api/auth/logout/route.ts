import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Elimina las cookies de la sesión del usuario
export async function POST() {
  const cookieStore = await cookies();

  cookieStore.delete('auth_token');
  cookieStore.delete('auth_type');

  return NextResponse.json({ message: 'Sesión Cerrada' });
}
