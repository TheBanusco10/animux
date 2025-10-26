import { AUTH_TOKEN_LOCAL_STORAGE } from "~/features/auth/domain/tokens/authToken";
import type { TokenStorage } from "~/features/auth/domain/types/accessToken";

export default <T>(path: string, options?: any) => {
  const config = useRuntimeConfig();
  const token = useCookie<TokenStorage>(AUTH_TOKEN_LOCAL_STORAGE);

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
