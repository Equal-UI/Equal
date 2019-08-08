<template>
  <div>
    <h1>Dropdown</h1>

    <Demobox>
      <it-icon :name="iconName" :outlined="iconOutlined" :color="iconColor" />

      <template slot="props">
        <it-input v-model="iconName" labelTop="Icon name" />
        <it-input v-model="iconColor" labelTop="Icon color" />
        <it-checkbox label="Outline" v-model="iconOutlined" />
      </template>
    </Demobox>
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox }
})
export default class IconPage extends Vue {
  iconColor: string = '#000000'
  iconName: string = 'face'
  iconOutlined: boolean = false
}
</script>
