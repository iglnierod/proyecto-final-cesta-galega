import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET ?? '';
const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN) ?? 60 * 60;

// Bcrypt
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

// Jason Web Token
// Crea payload de usuario que se almacena en las cookies
export interface JwtPayloadUser {
  userId: number;
  email: string;
}

// Crea payload de empresa que se almacena en las cookies
export interface JwtPayloadBusiness {
  businessId: number;
  email: string;
  exp?: number;
  iat?: number;
}

// Inicia sesión de un usuario
export function signUser(payload: JwtPayloadUser): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Incia sesión de una empresa
export function signBusiness(payload: JwtPayloadBusiness): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verificar token
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

// Cookies
export async function saveSessionCookie(token: string, type: 'user' | 'business' = 'user') {
  const cookieStore = await cookies();

  // Cookie con el token de JWT
  cookieStore.set({
    name: 'auth_token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: JWT_EXPIRES_IN,
  });

  // Cookie que diferencia usuario de empresa
  cookieStore.set({
    name: 'auth_type',
    value: type,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: JWT_EXPIRES_IN,
  });
}

// Verificar si un usuario está logeado correctamente
export async function isCookieValid(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (token) {
    try {
      verifyToken(token);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  return false;
}

// Obtener datos del payload guardado en el token
export async function getAuthTokenDecoded() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (token) {
    return verifyToken(token);
  } else {
    throw new Error('Token inválido o expirado');
  }
}
