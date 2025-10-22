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
export interface JwtPayloadUser {
  userId: number;
  email: string;
}

export interface JwtPayloadBusiness {
  businessId: number;
  email: string;
  exp?: number;
  iat?: number;
}

export function signUser(payload: JwtPayloadUser): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function signBusiness(payload: JwtPayloadBusiness): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

// Cookies
export async function saveSessionCookie(token: string, type: 'user' | 'business' = 'user') {
  const cookieStore = await cookies();

  cookieStore.set({
    name: 'auth_token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: JWT_EXPIRES_IN,
  });

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

export async function getAuthTokenDecoded() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (token) {
    return verifyToken(token);
  } else {
    throw new Error('Token inválido o expirado');
  }
}
