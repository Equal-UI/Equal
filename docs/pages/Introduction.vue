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

      <h2 class="my-4 text-lg font-semibold">How it works</h2>
      <p class="">
        Every component's template contains tags with variant blocks. This
        example shows short version of
        <it-button
          variant="primary-text"
          nuxt
          to="/components/alert"
          target="_blank"
          rel="noopener noreferrer"
          class="!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
        >
          it-alert
        </it-button>
        :
      </p>
      <prism
        language="html"
        class="my-4 rounded border dark:border-neutral-700"
        :code="alertCode"
      ></prism>
      <p>
        There are a single source of styles in Equal UI. It's the file with
        object containing classes for every component. There are 3 different
        types:
      </p>
      <ul class="mt-2">
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts"
            target="_blank"
            size="big"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Full:</strong>
            contains classes for light and dark themes
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts"
            target="_blank"
            rel="noopener noreferrer"
            size="big"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Light:</strong>
            contains classes for light theme
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts"
            target="_blank"
            size="big"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Dark:</strong>
            contains classes for dark theme
          </it-button>
        </li>
      </ul>

      <p class="mt-4">
        This is how
        <it-button
          variant="primary-text"
          nuxt
          to="/components/alert"
          target="_blank"
          rel="noopener noreferrer"
          class="!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
        >
          it-alert
        </it-button>
        block looks:
      </p>

      <prism
        language="js"
        class="my-4 rounded border dark:border-neutral-700"
        :code="alertBlockCode"
      ></prism>

      <p>
        <strong>Base</strong>
        contains entries for every major part of the component and applies
        permanent classes to them
      </p>
      <p>
        <strong>Variants</strong>
        contains entries for every variant of the component. Default variant is
        applied by default. Classes in chosen variant applies classes on top of
        the
        <it-tag variant="primary">base</it-tag>
      </p>

      <p class="mt-4">
        To apply variant to the component you need to use
        <it-tag variant="primary">variant</it-tag>
        prop, it works with every Equal UI component
      </p>

      <prism
        language="html"
        class="my-4 rounded border dark:border-neutral-700"
        :code="usePropCode"
      ></prism>
      <p>Result:</p>
      <it-alert variant="primary" title="Example alert">
        This is the result component with primary variant
      </it-alert>

      <p class="mt-4">
        Also you can make inline variants via
        <it-tag variant="primary">variants</it-tag>
        prop. You can use multiple variants at the same time!
      </p>

      <prism
        language="html"
        class="my-4 rounded border dark:border-neutral-700"
        :code="multiVarCode"
      ></prism>

      <p>Result:</p>
      <it-alert
        :variants="{
          'my-variant': {
            title:
              '!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text',
          },
        }"
        :variant="['primary', 'my-variant']"
        title="Example alert"
      >
        This is the result component with inline variant. Title has base classes
        and classes from two variants.
      </it-alert>

      <p class="mt-4">
        Equal UI uses Tailwindcss as a classes provider. But you can use you
        your own classes or another utility classes provider if you want.
      </p>

      <h2 class="my-4 text-lg font-semibold">How to create my own theme?</h2>
      <p>
        To create your theme please read the
        <it-button
          variant="primary-text"
          nuxt
          to="/theming"
          class="!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
        >
          theming
        </it-button>
      </p>

      <p>
        Also, do not hesitate to use Customization feature under every component
        on it's own page
      </p>

      <it-divider class="mt-8" />
      <div class="flex flex-col justify-center">
        <p class="my-4 text-center font-semibold">What's next?</p>
        <div class="flex flex-col justify-around gap-4 md:flex-row">
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
  </div>
</template>

<script setup lang="ts">
const multiVarCode = ref(`<it-alert
 ||| :variants="{
    'my-variant': {
      title:
        '!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text',
    },
  }" |||
 ||| :variant="['primary', 'my-variant']" |||
  title="Example alert"
>
  This is the result component with inline variant. Title has base classes and classes from two variants.
</it-alert>`)

const usePropCode = ref(
  `<it-alert variant="primary" title="Example alert">
  This is the result component with primary variant
</it-alert>`,
)

const alertCode = ref(`<div v-show="visible" ||| :class="variant.root" |||>
  <slot name="icon" />
  <div>
    <p ||| :class="variant.title" |||>{{ title }}</p>
    <p v-if="defaultSlot" ||| :class="variant.body" |||>
      <slot />
    </p>
  </div>
  <button v-if="closable" ||| :class="variant.closeIcon" ||| @click="clickCross">
    <svg></svg>
  </button>
</div>`)

const alertBlockCode = ref(`{
  'it-alert': {
    base: {
      root: 'rounded border flex px-4 py-4 bg-opacity-5',
      title: 'text-sm font-semibold leading-none dark:text-white',
      body: 'text-sm leading-none mt-2.5 dark:text-white',
      closeIcon: 'ml-4 select-none cursor-pointer',
    },
    variants: {
      default: {
        root: 'bg-white',
      },
      primary: {
        root: 'border-blue-600 bg-blue-600',
      },
      success: {
        root: 'border-green-500 bg-green-600',
      },
      warning: {
        root: 'border-yellow-500 bg-yellow-500',
      },
      danger: {
        root: 'border-red-500 bg-red-500',
      },
    },
  }
},`)
</script>
