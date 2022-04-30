<template>
  <div>
    <h1>Breadcrumbs</h1>
    <Box title="Work in progress">
      <div class="wip">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Responsive Breadcrumbs UI coming in the next version of
            <a href="https://twitter.com/EqualVue?ref_src=twsrc%5Etfw"
              >@EqualVue</a
            >
            <a href="https://twitter.com/vuejs?ref_src=twsrc%5Etfw">@vuejs</a>
            <a href="https://t.co/Mj8HyYFqcL">pic.twitter.com/Mj8HyYFqcL</a>
          </p>
          &mdash; Yan Savinov (@k0mmsussertod)
          <a
            href="https://twitter.com/k0mmsussertod/status/1284168020634611712?ref_src=twsrc%5Etfw"
            >July 17, 2020</a
          >
        </blockquote>
      </div>
    </Box>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    twttr.widgets.load(document.getElementsByClassName('wip'))
  },
})
</script>
