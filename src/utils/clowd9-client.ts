import clowd9 from '@api/clowd9';
import { clowd9Config } from '~/clowd9Config';

let authenticated = false;

async function authenticate(): Promise<void> {
  const { data } = await clowd9.authenticateApi({
    key: clowd9Config.key,
    secret: clowd9Config.secret,
  });
  clowd9.auth((data as any).access_token);
  authenticated = true;
}

export async function withAuth(fn: () => Promise<any>): Promise<any> {
  if (!authenticated) {
    await authenticate();
  }
  try {
    return await fn();
  } catch (err: any) {
    if (err?.status === 401) {
      await authenticate();
      return await fn();
    }
    throw err;
  }
}

export { clowd9 };
