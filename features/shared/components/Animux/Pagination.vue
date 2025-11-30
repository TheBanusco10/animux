<script setup lang="ts">
const DEFAULT_ITEMS_PER_PAGE = 4;
interface Props {
  totalItems: number;
  itemsPerPage?: number;
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
});

const currentPage = ref(1);

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(
  () => currentPage.value >= Math.ceil(props.totalItems / props.itemsPerPage)
);

const handlePreviousPage = () => {
  currentPage.value -= 1;

  if (currentPage.value <= 1) currentPage.value = 1;
};

const handleNextPage = () => {
  currentPage.value += 1;
};
</script>
<template>
  <section class="flex flex-col gap-8">
    <div id="content">
      <slot />
    </div>
    <div id="pagination" class="flex justify-end gap-4">
      <AnimuxButton :disabled="isFirstPage" @click="handlePreviousPage"
        >Previous</AnimuxButton
      >
      <AnimuxButton :disabled="isLastPage" @click="handleNextPage"
        >Next</AnimuxButton
      >
    </div>
  </section>
</template>
