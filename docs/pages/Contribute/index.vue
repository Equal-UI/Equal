<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">
      {{ $t('contribute.title') }}
    </h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 class="text-lg font-medium">
        {{ $t(`contribute.welcome.title`) }}
      </h2>

      <p class="my-4">
        {{ $t(`contribute.welcome.description`) }}
      </p>

      <h3 class="text-base font-medium">
        {{ $t(`contribute.contributeWays.title`) }}
      </h3>

      <p class="my-4">
        {{ $t(`contribute.contributeWays.description`) }}
      </p>

      <ul class="list-inside list-disc">
        <li class="my-2" v-for="index in [1, 2, 3, 4, 5]" :key="index">
          <strong>
            {{ $t(`contribute.contributeWays.way${index}.label`) }}
          </strong>
          {{ $t(`contribute.contributeWays.way${index}.content`) }}
        </li>
      </ul>

      <h3 class="mt-4 text-base font-semibold">
        {{ $t(`contribute.submissionSteps.title`) }}
      </h3>

      <p class="my-4">
        {{ $t(`contribute.submissionSteps.description`) }}
      </p>

      <ol class="list-inside list-decimal">
        <li class="my-2" v-for="index in [1, 2, 3, 4, 5]" :key="index">
          <strong>
            {{ $t(`contribute.submissionSteps.step${index}.label`) }}
          </strong>
          {{ $t(`contribute.submissionSteps.step${index}.content`) }}
        </li>
      </ol>

      <h3 class="mt-4 text-base font-semibold">
        {{ $t(`contribute.codeOfConduct.title`) }}
      </h3>

      <p class="my-4">
        {{ $t(`contribute.codeOfConduct.description`) }}
        <a
          href="https://github.com/Equal-UI/Equal/blob/master/CODE_OF_CONDUCT.md"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          {{ $t(`contribute.codeOfConduct.title`) }}
        </a>
      </p>

      <h3 class="text-base font-semibold">
        {{ $t(`contribute.contact.title`) }}
      </h3>

      <p class="my-4">
        {{ $t(`contribute.contact.description`) }}
      </p>

      <p class="mt-6">
        {{ $t(`contribute.thanks`) }}
      </p>
    </div>
  </div>
</template>
