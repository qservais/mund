export const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "";

export const apiUrl = (path: string) => `${API_BASE}${path}`;
