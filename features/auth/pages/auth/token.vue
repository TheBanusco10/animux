<script setup lang="ts">
import CreateAuthorizationTokenUseCase from "~/features/auth/application/useCases/createAuthorizationToken.useCase";
import AuthRepository from "~/features/auth/infrastructure/repositories/authRepository";
import type { TokenStorage } from "~/features/auth/domain/types/accessToken";
import { AUTH_TOKEN_LOCAL_STORAGE } from "../../domain/tokens/authToken";

const { code } = useRoute().query;

if (!code) {
  navigateTo("/auth/login");
}

const createAuthorizationTokenUseCase = new CreateAuthorizationTokenUseCase(
  new AuthRepository()
);

const { data, error } = await useAsyncData("createToken", () =>
  createAuthorizationTokenUseCase.execute(code as string)
);

if (error.value || !data.value) {
  navigateTo("/auth/login");
}

const token = useCookie<TokenStorage>(AUTH_TOKEN_LOCAL_STORAGE);
token.value = data.value
  ? {
      access_token: data.value.data.access_token,
      refresh_token: data.value.data.refresh_token,
    }
  : null;

navigateTo("/animelist");
</script>

<template>
  <AnimuxContainer>
    <p>Será redirigido en unos momentos...</p>
  </AnimuxContainer>
</template>
