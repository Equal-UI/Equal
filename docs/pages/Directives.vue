<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">
      Directives
      <it-tag variant="warning">This page is WIP</it-tag>
    </h1>
    <div
      class="flex w-full flex-col space-y-4 rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <p>
        Equal UI has v-tooltip directive to create tooltips with very specific
        content and behavior
      </p>

      <prism
        language="html"
        class="rounded border dark:border-neutral-700"
        template="<it-button v-tooltip=&quot;{ content: 'Top tooltip' }&quot;>Top</it-button>

// or render you own components with h() function
<it-button v-tooltip=&quot;{ content: 'Top tooltip', children: h('YourComponent') }&quot;>Top</it-button>"
      ></prism>
    </div>
  </div>
</template>
