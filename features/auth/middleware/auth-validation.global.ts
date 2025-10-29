import { AUTH_TOKEN_LOCAL_STORAGE } from "~/features/auth/domain/tokens/authToken";
import type { TokenStorage } from "~/features/auth/domain/types/accessToken";
import { ROUTES_WHITELIST } from "~/features/auth/configuration/routes";
import TokenValidationService from "~/features/auth/application/services/tokenValidationService";

export default defineNuxtRouteMiddleware((to, from) => {
  if (ROUTES_WHITELIST.includes(to.path)) {
    return;
  }

  const tokenCookie = useCookie<TokenStorage>(AUTH_TOKEN_LOCAL_STORAGE);

  if (!TokenValidationService.validate(tokenCookie.value)) {
    return navigateTo("/auth/login");
  }

  return;
});
