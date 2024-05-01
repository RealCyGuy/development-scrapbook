<template>
  <div>
    <h2 class="text-4xl md:text-5xl font-heading mb-10">
      Section {{ number }} /
      <span class="font-bold">{{ title }}</span>
    </h2>
    <div class="text-xl md:text-2xl flex flex-col gap-3 max-w-prose">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ number: string; title: string }>();

useSeoMeta({
  title: `${props.title} · Cyrus's Development Scrapbook`,
});
</script>
