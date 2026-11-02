// src/lib/strapi.ts
const STRAPI_URL = process.env.STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error('Defina a variável de ambiente STRAPI_URL');
}

export async function strapiFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api/${path}`, init);

  if (!res.ok) {
    throw new Error(`Strapi respondeu ${res.status} em /api/${path}`);
  }

  return res.json() as Promise<T>;
}
