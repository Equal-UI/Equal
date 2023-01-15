<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Introduction</h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <p>
        <b>Equal UI</b>
        is a design philosophy that focuses on creating user interfaces that are
        accessible, intuitive, and easy to use for all users, regardless of
        their physical abilities or technological expertise. It involves
        creating user interfaces that are visually and functionally consistent
        across different devices and platforms, and that are easy to navigate
        and use for people with disabilities or special needs. Equal UI aims to
        create a more inclusive and equitable user experience for all users, by
        designing interfaces that are easy to understand and use for everyone.
      </p>
      <div class="mt-8 flex flex-col justify-around gap-4 md:flex-row">
        <it-button size="big" nuxt to="/start" variant="primary" class="grow">
          Getting started
        </it-button>
        <it-button size="big" nuxt to="/contribute" class="grow">
          How to contribute?
        </it-button>
        <it-button size="big" nuxt to="/support" class="grow">
          Support the project
        </it-button>
      </div>
    </div>
  </div>
</template>
