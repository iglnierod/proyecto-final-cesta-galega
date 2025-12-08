import { NextResponse } from 'next/server';
import { clearSessionCookies } from '@/app/lib/auth';

// Elimina las cookies de la sesión del usuario
export async function POST() {
  await clearSessionCookies();

  return NextResponse.json({ message: 'Sesión Cerrada' });
}
