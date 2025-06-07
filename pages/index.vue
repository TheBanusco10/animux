<script setup lang="ts">
import { Auth } from "~/services/auth";

const authUri = new Auth().getAuthorizeUri();

const tokenCookie = useCookie("auth_token");

console.log(tokenCookie.value);
</script>

<template>
    <main>
        <h1>Home page</h1>
        <a :href="authUri" class="btn btn-primary">Login</a>
    </main>
</template>