<script setup lang="ts">
import { AUTH_TOKEN_LOCAL_STORAGE } from "~/features/auth/domain/tokens/authToken";
import type { TokenStorage } from "~/features/auth/domain/types/accessToken";

const token = useCookie<TokenStorage>(AUTH_TOKEN_LOCAL_STORAGE);

if (!token.value?.access_token) {
  navigateTo("/auth/login");
}
</script>

<template>
  <AnimuxContainer>
    <h1>Your anime list</h1>
    <NuxtLink to="/auth/login">Login</NuxtLink>
    <ClientOnly>
      <AnimeListComponent />
    </ClientOnly>
  </AnimuxContainer>
</template>
