<script setup lang="ts">
const { code } = useRoute().query;

if (code) {
  const { data, error } = await useFetch("/api/auth", {
    method: "POST",
    query: {
      code,
    },
  });

  if (!error.value && data.value) {
    const tokenCookie = useCookie("auth_token", {
      httpOnly: false,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    tokenCookie.value = encodeURIComponent(data.value.access_token);

    navigateTo("/");
  }
}
</script>

<template>
  <main>
    <p>Será redirigido en unos momentos...</p>
  </main>
</template>
