<script setup lang="ts">
const { code } = useRoute().query;

if (code) {
    const { data, error } = await useFetch("/api/auth", {
        method: "POST",
        query: {
            code
        },
    });

    console.log(data.value);
    console.log(error.value?.message);
}

</script>

<template>
    <main>
        <p>Será redirigido en unos momentos...</p>
    </main>
</template>