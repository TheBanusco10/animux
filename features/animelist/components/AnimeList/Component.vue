<script setup lang="ts">
import type { ModalRef } from "~/features/shared/domain/types/components/modal";
import GetAnimelistUseCase from "../../application/useCases/getAnimelist.useCase";
import { AnimeListRepository } from "../../infrastructure/repositories/animelistRepository";
import type { AnimelistData, ListStatus } from "../../domain/types/animelist";
import UpdateAnimelistUseCase from "../../application/useCases/updateAnimelist.useCase";

// const getAnimelistUseCase = new GetAnimelistUseCase(new AnimeListRepository());
// const { data: animelist } = await useAsyncData("userAnimelist", () =>
//   getAnimelistUseCase.execute()
// );

const animelist = {
  data: [
    {
      node: {
        id: 31580,
        title: "Ajin",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/13/77968.webp",
          large: "https://cdn.myanimelist.net/images/anime/13/77968l.webp",
        },
      },
      list_status: {
        status: "completed",
        score: 7,
        num_episodes_watched: 13,
        is_rewatching: false,
        updated_at: "2022-02-14T16:07:19+00:00",
        start_date: "2016-05-11",
        finish_date: "2016-05-15",
      },
    },
    {
      node: {
        id: 33253,
        title: "Ajin Part 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/12/81858.webp",
          large: "https://cdn.myanimelist.net/images/anime/12/81858l.webp",
        },
      },
      list_status: {
        status: "watching",
        score: 0,
        num_episodes_watched: 8,
        is_rewatching: false,
        updated_at: "2022-01-15T16:23:30+00:00",
        start_date: "2016-10-08",
      },
    },
    {
      node: {
        id: 22199,
        title: "Akame ga Kill!",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1429/95946.webp",
          large: "https://cdn.myanimelist.net/images/anime/1429/95946l.webp",
        },
      },
      list_status: {
        status: "watching",
        score: 0,
        num_episodes_watched: 9,
        is_rewatching: false,
        updated_at: "2017-06-28T20:28:04+00:00",
        start_date: "2017-06-28",
      },
    },
    {
      node: {
        id: 9919,
        title: "Ao no Exorcist",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/10/75195.jpg",
          large: "https://cdn.myanimelist.net/images/anime/10/75195l.jpg",
        },
      },
      list_status: {
        status: "completed",
        score: 9,
        num_episodes_watched: 25,
        is_rewatching: false,
        updated_at: "2017-08-04T11:15:31+00:00",
        start_date: "2017-05-01",
        finish_date: "2017-08-04",
      },
    },
  ],
  paging: {
    next: "https://api.myanimelist.net/v2/users/@me/animelist?offset=4&fields=list_status&limit=4",
  },
};

const editItemModal = ref<ModalRef>();
const selectedAnime = ref<AnimelistData | null>(null);

const animeDataToUpdate = ref<
  Pick<ListStatus, "score" | "num_episodes_watched">
>({
  score: 0,
  num_episodes_watched: 0,
});

const handleShowEditItemModal = (animeData: AnimelistData) => {
  selectedAnime.value = animeData;
  animeDataToUpdate.value = {
    score: animeData.list_status.score,
    num_episodes_watched: animeData.list_status.num_episodes_watched ?? 0,
  };
  editItemModal.value?.dialogElement.showModal();
};

const handleUpdateAnime = async () => {
  if (!animeDataToUpdate.value || !selectedAnime.value) return;

  const updateAnimelistUseCase = new UpdateAnimelistUseCase(
    new AnimeListRepository()
  );

  const updatedAnimelist = await updateAnimelistUseCase.execute(
    selectedAnime.value.node.id,
    animeDataToUpdate.value
  );

  console.log(updatedAnimelist);
};
</script>

<template>
  <section
    class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4"
  >
    <AnimeListThumbnail
      v-for="animeData in animelist.data"
      :key="animeData.node.id"
      :animeData="animeData"
      @on-edit-item="handleShowEditItemModal(animeData)"
    />
  </section>
  <AnimuxModal id="editItemModal" ref="editItemModal">
    <template #title>Edit anime</template>
    <template #content>
      <p class="mb-4">{{ selectedAnime?.node.title }}</p>
      <section class="grid grid-cols-2 gap-2">
        <label class="input">
          <span class="label">Score</span>
          <input type="number" v-model="animeDataToUpdate.score" />
        </label>
        <label class="input">
          <span class="label">Episodes watched</span>
          <input
            type="number"
            v-model="animeDataToUpdate.num_episodes_watched"
          />
        </label>
      </section>
    </template>
    <template #action>
      <button type="button" class="btn btn-primary" @click="handleUpdateAnime">
        Update
      </button>
    </template>
  </AnimuxModal>
</template>
