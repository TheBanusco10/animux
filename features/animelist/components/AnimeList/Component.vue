<script setup lang="ts">
const { data: animelist, error } = await useFetch("/api/animelist");
</script>


<template>
    <section v-if="animelist" class="flex flex-wrap gap-4">
      <!-- <AnimeListThumbnail v-for="anime in animelist.data" :key="anime.node.id" :anime-details="anime.node" :list-status="anime.list_status" /> -->
       <AnimeListThumbnail v-for="anime in animelist.data" :key="anime.node.id" :anime-details="anime.node" :list-status="anime.list_status" />
    </section>
</template>