<script setup lang="ts">
import type { AnimeDetails } from "~/features/shared/domain/types/anime";
import type { ListStatus } from "~/features/animelist/types/animelist";

interface Props {
  animeDetails: AnimeDetails;
  listStatus: ListStatus;
}

defineProps<Props>();
</script>

<template>
  <article
    class="relative w-36 h-52 rounded overflow-hidden hover:shadow-md hover:shadow-primary/60 transition-all duration-150"
  >
    <section
      class="absolute w-full h-full top-0 left-0 flex flex-col justify-between"
    >
      <div class="text-center bg-base-200/70 p-2">
        <p class="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {{ animeDetails.title }}
        </p>
      </div>
      <div class="flex justify-between items-center p-2">
        <p
          class="w-10 h-10 flex items-center justify-center bg-accent p-2 rounded-full"
        >
          <span class="text-accent-content"> {{ listStatus.score }} </span>
        </p>
        <button class="btn btn-primary btn-circle btn-sm">
          <Icon name="mdi:pencil-outline" size="16" />
        </button>
      </div>
    </section>
    <img
      class="w-full h-full object-cover"
      :src="animeDetails.main_picture.medium"
      :alt="animeDetails.title"
    />
  </article>
</template>
