<template>
  <NuxtLayout>
    <div v-if="error?.statusCode == 404">
      <h2 class="text-4xl md:text-5xl mb-10 font-heading">Page not found</h2>
      <p class="text-xl md:text-2xl">
        Sorry, the page you are looking for does not exist.
        <NuxtLink class="underline hover:opacity-60" to="/"
          >Back to home.</NuxtLink
        >
      </p>
    </div>
    <div v-else><h1>error</h1></div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

useSeoMeta({
  title: `Error ${props.error?.statusCode}`,
});
</script>
