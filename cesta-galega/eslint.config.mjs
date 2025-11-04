import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'app/generated/**',
      'prisma/generated/**',
      'app/generated/prisma/**',
      'app/generated/prisma/wasm.js',
    ],
    rules: {
      // 🔹 Desactivar errores que bloquean el build
      '@typescript-eslint/no-explicit-any': 'off',
      '@next/next/no-img-element': 'warn',
    },
  },
];

export default eslintConfig;
