<script setup lang="ts">
import GetAuthorizeUriUseCase from "../application/useCases/getAuthorizeUri.useCase";
import AuthRepository from "../infrastructure/repositories/authRepository";

const getAuthorizeUriUseCase = new GetAuthorizeUriUseCase(new AuthRepository());
const { data, status } = await useAsyncData("authorizeUri", () =>
  getAuthorizeUriUseCase.execute()
);

const isLoading = computed(() => status.value === "pending");
const authorizeUri = computed(() => data.value);

const handleLogin = () => {
  if (authorizeUri.value) {
    window.location.href = authorizeUri.value;
  }
};
</script>

<template>
  <button
    v-if="authorizeUri || isLoading"
    class="btn btn-primary"
    :disabled="isLoading"
    @click="handleLogin"
  >
    Login with MyAnimeList
    <span v-if="isLoading" class="loading loading-spinner"></span>
  </button>
</template>
