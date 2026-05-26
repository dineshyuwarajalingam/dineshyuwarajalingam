import 'dotenv/config';

export const NODE_ENV = process?.env?.NODE_ENV ?? 'development';
export const PORT = process?.env?.PORT ?? 5000;
export const DATABASE_URL = process?.env?.DATABASE_URL;
export const MARQETA = {
  API_TIMEOUT_SECONDS: process?.env?.MARQETA_TIMEOUT_SECONDS ?? 3000,
};
export const CLOWD9 = {
  API_TIMEOUT_SECONDS: process?.env?.CLOWD9_TIMEOUT_SECONDS ?? 5000,
};
