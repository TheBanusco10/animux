<script setup lang="ts">
import { AUTH_TOKEN_LOCAL_STORAGE } from "~/features/auth/domain/tokens/authToken";
import type { TokenStorage } from "~/features/auth/domain/types/accessToken";
import GetAnimelistUseCase from "../../application/useCases/getAnimelist.useCase";
import { AnimeListRepository } from "../../infrastructure/repositories/animelistRepository";

const token = useCookie<TokenStorage>(AUTH_TOKEN_LOCAL_STORAGE);

if (!token.value?.access_token) {
  navigateTo("/auth/login");
}

const getAnimelistUseCase = new GetAnimelistUseCase(new AnimeListRepository());
const { data: animelist } = await useAsyncData("userAnimelist", () =>
  getAnimelistUseCase.execute()
);
</script>

<template>
  <AnimuxContainer>
    <h1>Your anime list</h1>
    <NuxtLink to="/auth/login">Login</NuxtLink>
    <ClientOnly>
      <AnimuxPagination :total-items="4">
        <AnimeListComponent v-if="animelist" :animelist="animelist" />
      </AnimuxPagination>
    </ClientOnly>
  </AnimuxContainer>
</template>
