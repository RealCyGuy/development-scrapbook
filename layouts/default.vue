<template>
  <div
    class="bg-[#7c9c7d] text-[#121b10] min-h-screen flex flex-col overflow-x-hidden"
  >
    <div class="flex flex-col">
      <div
        class="pl-8 md:pl-16 py-4 md:py-10 flex flex-col justify-center text-4xl md:text-5xl font-heading gap-1"
      >
        <h1>
          <span class="font-bold">Cyrus Yip</span>'s Development Scrapbook
        </h1>
      </div>
      <div
        class="pl-8 md:pl-16 flex-1 py-2 md:py-5 border-y-2 border-black w-screen"
      >
        <ol
          class="text-xl md:text-3xl list-[lower-roman] list-inside flex flex-wrap marker:text-[#324b2c] max-w-screen-2xl"
        >
          <li>
            <NuxtLink to="/">Introduction</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/physical">Physical Development</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/language">Language Development</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/social-emotional"
              >Social-Emotional Development</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/cognitive">Cognitive Development</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/moral">Moral Development</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/psycho-social">Psycho-Social Development</NuxtLink>
          </li>
        </ol>
      </div>
    </div>
    <div class="bg-[#7c9c7d] flex-1 flex flex-col">
      <div class="flex-1 px-8 md:px-16 pt-12 pb-10">
        <slot />
      </div>
      <footer class="border-t-2 border-black py-2 text-center text-lg">
        Created by
        <NuxtLink to="https://cyrusyip.com" class="underline hover:opacity-60"
          >Cyrus Yip</NuxtLink
        >. Open source on
        <NuxtLink
          to="https://github.com/realcyguy/development-scrapbook"
          class="underline hover:opacity-60"
          >Github</NuxtLink
        >.
      </footer>
    </div>
  </div>
</template>

<style scoped>
ol li {
  @apply pr-3 md:pr-0;
}

ol li:not(:last-child)::after {
  @apply md:content-['/'] px-3;
}

ol a {
  @apply relative;
}

ol a::after {
  @apply absolute bottom-0 left-0 opacity-0 duration-200 bg-[#324b2c] bg-opacity-60 h-0.5 w-full translate-y-full;
  content: "";
}

ol a:hover::after,
ol a:focus::after,
ol a.router-link-active::after {
  @apply opacity-100 translate-y-0;
}
</style>

<style>
.page-enter-active,
.page-leave-active,
.page-enter-active h2,
.page-leave-active h2,
.page-enter-active img,
.page-leave-active img {
  @apply duration-500 ease-in-out;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}

.page-enter-from {
  @apply -translate-x-1/4;
}

.page-leave-to {
  @apply translate-x-1/4;
}

.page-enter-from h2 {
  @apply -translate-x-1/4;
}

.page-leave-to h2 {
  @apply translate-x-1/4;
}

.page-enter-from img,
.page-leave-to img {
  @apply blur-lg;
}
</style>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>",
    },
  ],
});
</script>
