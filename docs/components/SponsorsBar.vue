<template>
  <div class="flex w-full flex-col">
    <p class="text-sm font-bold">Sponsors</p>
    <NuxtLink to="/support" class="mt-2 w-full">
      <div
        class="flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-200 p-2 hover:border-zinc-300 dark:border-zinc-600 hover:dark:border-zinc-500"
      >
        <h5
          class="text-md bg-gradient-to-tr from-blue-500 to-violet-600 bg-clip-text font-bold text-transparent"
        >
          Be the first sponsor
        </h5>
        <p class="text-center text-xs">
          As a project maintained by a single person in their free time, your
          support is crucial in allowing us to continue improving and updating
          Equal UI. If you are interested in supporting our project and becoming
          a sponsor, please get in touch. We would be happy to recognize your
          support on our website and social media channels.
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
