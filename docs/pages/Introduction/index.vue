<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">
      {{ $t('introduction.title') }}
    </h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <i18n-t
        keypath="introduction.description"
        tag="p"
        class="dark:text-slate-300"
      >
        <b class="dark:text-white">Equal UI</b>
      </i18n-t>

      <h2 class="my-4 text-lg font-semibold">
        {{ $t('introduction.how_works.label') }}
      </h2>
      <i18n-t keypath="introduction.how_works.content" tag="p">
        <it-button
          variant="primary-text"
          nuxt
          to="/components/alert"
          target="_blank"
          rel="noopener noreferrer"
          class="!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
        >
          it-alert
        </it-button>
      </i18n-t>

      <prism
        language="html"
        class="my-4 rounded border dark:border-neutral-700"
        :code="alertCode"
      ></prism>
      <p>{{ $t('introduction.types.title') }}</p>
      <ul class="mt-2">
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts"
            target="_blank"
            size="big"
            rel="noopener noreferrer"
            class="!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
          >
            <i18n-t keypath="introduction.types.type1.description">
              <strong>{{ $t('introduction.types.type1.name') }}</strong>
            </i18n-t>
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts"
            target="_blank"
            rel="noopener noreferrer"
            size="big"
            class="!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
          >
            <i18n-t keypath="introduction.types.type2.description">
              <strong>{{ $t('introduction.types.type2.name') }}</strong>
            </i18n-t>
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts"
            target="_blank"
            size="big"
            rel="noopener noreferrer"
            class="!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
          >
            <i18n-t keypath="introduction.types.type3.description">
              <strong>{{ $t('introduction.types.type3.name') }}</strong>
            </i18n-t>
          </it-button>
        </li>
      </ul>

      <i18n-t keypath="introduction.blocks_title" tag="p" class="mt-4">
        <it-button
          variant="primary-text"
          nuxt
          to="/components/alert"
          target="_blank"
          rel="noopener noreferrer"
          class="!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
        >
          it-alert
        </it-button>
      </i18n-t>

      <prism
        language="js"
        class="my-4 rounded border dark:border-neutral-700"
        :code="alertBlockCode"
      ></prism>

      <i18n-t keypath="introduction.variants.title" tag="p" class="mt-4">
        <strong>Base</strong>
        <strong>Variants</strong>
        <it-tag variant="primary">base</it-tag>
      </i18n-t>

      <i18n-t keypath="introduction.variants.usage1.title" tag="p" class="mt-4">
        <it-tag variant="primary">variant</it-tag>
      </i18n-t>

      <prism
        language="html"
        class="my-4 rounded border dark:border-neutral-700"
        :code="usePropCode"
      ></prism>
      <p>{{ $t('introduction.variants.result') }}</p>
      <it-alert variant="primary" title="Example alert">
        This is the result component with primary variant
      </it-alert>

      <i18n-t keypath="introduction.variants.usage2.title" tag="p" class="mt-4">
        <it-tag variant="primary">variants</it-tag>
      </i18n-t>

      <prism
        language="html"
        class="my-4 rounded border dark:border-neutral-700"
        :code="multiVarCode"
      ></prism>

      <p>{{ $t('introduction.variants.result') }}</p>
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

      <p class="mt-4">{{ $t('introduction.note') }}</p>

      <h2 class="my-4 text-lg font-semibold">
        {{ $t('introduction.create_theme.title') }}
      </h2>
      <i18n-t keypath="introduction.create_theme.step1" tag="p">
        <it-button
          variant="primary-text"
          nuxt
          to="/theming"
          class="!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
        >
          {{ $t('introduction.create_theme.theme') }}
        </it-button>
      </i18n-t>

      <p>{{ $t('introduction.create_theme.step2') }}</p>

      <it-divider class="mt-8" />
      <div class="flex flex-col justify-center">
        <p class="my-4 text-center font-semibold">
          {{ $t('introduction.next.title') }}
        </p>
        <div class="flex flex-col justify-around gap-4 md:flex-row">
          <it-button size="big" nuxt to="/start" variant="primary" class="grow">
            {{ $t('introduction.next.start') }}
          </it-button>
          <it-button size="big" nuxt to="/contribute" class="grow">
            {{ $t('introduction.next.contribute') }}
          </it-button>
          <it-button size="big" nuxt to="/support" class="grow">
            {{ $t('introduction.next.support') }}
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
