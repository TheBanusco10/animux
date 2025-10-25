<script setup lang="ts">
import GetAuthorizeUriUseCase from "~/features/auth/application/useCases/getAuthorizeUri.useCase";
import AuthRepository from "~/features/auth/infrastructure/repositories/authRepository";

const showButton = ref(false);
const buttonUrl = ref("");

onBeforeMount(async () => {
  const getAuthorizeUriUseCase = new GetAuthorizeUriUseCase(
    new AuthRepository()
  );

  await getAuthorizeUriUseCase.execute();

  // showButton.value = true;
  // buttonUrl.value = uri;
});
</script>

<template>
  <AnimuxContainer>
    <h1>Your anime list</h1>
    <ClientOnly>
      <button class="btn btn-primary">Get anime list</button>
    </ClientOnly>
    <!-- <AnimeListComponent /> -->
  </AnimuxContainer>
</template>
