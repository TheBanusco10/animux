import type { TokenStorage } from "~/features/auth/domain/types/accessToken";

export default <T>(path: string, options?: any) => {
  const config = useRuntimeConfig();
  const token = useCookie<TokenStorage | null>("token");

  return useFetch<T>(path, {
    baseURL: config.public.apiBaseUrl,
    key: path,
    headers: token.value
      ? {
          Authorization: `Bearer ${token.value.access_token}`,
          ...options.headers,
        }
      : options.headers,
    ...options,
  });
};
