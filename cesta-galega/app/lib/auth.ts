import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET ?? '';
const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN) ?? 60 * 60;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET no está definido en .env');
}

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
export async function saveSessionCookie(token: string) {
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
}

export async function isCookieValid(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  return Boolean(token);
}
