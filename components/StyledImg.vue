<template>
  <div class="flex justify-center py-5">
    <img
      :src="src"
      alt=""
      class="max-h-72 rounded-lg shadow-lg pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string }>();
</script>
