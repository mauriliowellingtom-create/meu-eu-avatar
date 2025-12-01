const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

export const API_URL = apiUrl;

export async function apiFetch(path: string, options?: RequestInit) {
  return fetch(`${apiUrl}${path}`, options);
}

export async function checkBackendStatus(): Promise<{ online: boolean; message: string }> {
  try {
    const response = await apiFetch('/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return { online: true, message: 'Backend conectado com sucesso' };
    } else {
      return { online: false, message: 'Erro ao conectar com backend' };
    }
  } catch (error) {
    return { online: false, message: 'Erro ao conectar com backend' };
  }
}
