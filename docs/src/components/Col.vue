<template>
  <div
    :class="[xs && 'it-xs-' + xs, sm && 'it-sm-' + sm, lg && 'it-lg-' + lg]"
    :style="{
      order: order,
      'justify-content': justify,
      'align-items': align,
      'margin-left': (offset * 100) / 12 + '%',
      width: (width * 100) / 12 + '%',
    }"
    class="it-col"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Col',
  props: {
    width: { default: 12 },
    xs: [Number, String],
    sm: [Number, String],
    lg: [Number, String],
    offset: { default: 0 },
    justify: String,
    align: String,
    order: String,
  },
})
</script>

<style lang="css">
.it-col {
  float: left;
}
.it-lg-12 {
  width: 100% !important;
}
.it-lg-11 {
  width: 91.66666666666667% !important;
}
.it-lg-10 {
  width: 83.33333333333333% !important;
}
.it-lg-9 {
  width: 75% !important;
}
.it-lg-8 {
  width: 66.66666666666667% !important;
}
.it-lg-7 {
  width: 58.33333333333333% !important;
}
.it-lg-6 {
  width: 50% !important;
}
.it-lg-5 {
  width: 41.66666666666667% !important;
}
.it-lg-4 {
  width: 33.33333333333333% !important;
}
.it-lg-3 {
  width: 25% !important;
}
.it-lg-2 {
  width: 16.66666666666667% !important;
}
.it-lg-1 {
  width: 8.333333333333333% !important;
}
.it-lg-0 {
  display: none !important;
}
@media only screen and (max-width: 900px) {
  .it-sm-12 {
    width: 100% !important;
  }
  .it-sm-11 {
    width: 91.66666666666667% !important;
  }
  .it-sm-10 {
    width: 83.33333333333333% !important;
  }
  .it-sm-9 {
    width: 75% !important;
  }
  .it-sm-8 {
    width: 66.66666666666667% !important;
  }
  .it-sm-7 {
    width: 58.33333333333333% !important;
  }
  .it-sm-6 {
    width: 50% !important;
  }
  .it-sm-5 {
    width: 41.66666666666667% !important;
  }
  .it-sm-4 {
    width: 33.33333333333333% !important;
  }
  .it-sm-3 {
    width: 25% !important;
  }
  .it-sm-2 {
    width: 16.66666666666667% !important;
  }
  .it-sm-1 {
    width: 8.333333333333333% !important;
  }
  .it-sm-0 {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .it-xs-12 {
    width: 100% !important;
  }
  .it-xs-11 {
    width: 91.66666666666667% !important;
  }
  .it-xs-10 {
    width: 83.33333333333333% !important;
  }
  .it-xs-9 {
    width: 75% !important;
  }
  .it-xs-8 {
    width: 66.66666666666667% !important;
  }
  .it-xs-7 {
    width: 58.33333333333333% !important;
  }
  .it-xs-6 {
    width: 50% !important;
  }
  .it-xs-5 {
    width: 41.66666666666667% !important;
  }
  .it-xs-4 {
    width: 33.33333333333333% !important;
  }
  .it-xs-3 {
    width: 25% !important;
  }
  .it-xs-2 {
    width: 16.66666666666667% !important;
  }
  .it-xs-1 {
    width: 8.333333333333333% !important;
  }
  .it-xs-0 {
    display: none !important;
  }
}
</style>
