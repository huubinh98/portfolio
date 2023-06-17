<template>
  <div class="container">
    <h2 class="text-title">Projects</h2>
    <div
      v-for="item in dataProject"
      :key="item.id"
      class="project-item box-shadow-inset w-full h-full"
    >
      <img :src="item.url" :alt="item.altImage" />
      <h2 class="project-title fw-600">{{ item.title }}</h2>

      <p class="project-text" v-html="item.description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { projectObject } from "@/models";
defineProps({
  dataProject: {
    type: Array as () => projectObject[],
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
$color-text: #cbd5e1;
.project-item {
  max-width: 700px;
  padding: 32px;
  margin-bottom: 6rem;

  &:nth-child(even) {
    margin-left: auto;
  }
  &:nth-child(odd) {
    margin-right: auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-title {
    font-size: 2rem;
    color: $color-text;
    margin-top: 4rem;
  }
  .project-text {
    margin-top: 1rem;
    line-height: 1.5;
    color: $color-text;
  }
}
</style>
