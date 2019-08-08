<template>
  <div>
    <h1>Alert</h1>

    <Demobox>
      <it-alert :visible="alertVisible" @on-close="alertVisible=false" :type="alertType" :showIcon="alertShowIcon" :closable="alertClosable" :title="alertTitle" :body="alertBody" />
      <template slot="props">
        <it-select placeholder="Select type" labelTop="Alert type" v-model="alertType">
          <it-select-option :key="type" v-for="type in alertTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-input v-model="alertTitle" labelTop="Alert title" />
        <it-input v-model="alertBody" labelTop="Alert Body" />
        <it-checkbox label="Icon" v-model="alertShowIcon" />
        <it-checkbox label="Closable" v-model="alertClosable" />
        <it-checkbox label="Visible" v-model="alertVisible" />
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
export default class AlertPage extends Vue {
  alertVisible = true
  alertTitle = 'Alert title'
  alertBody = 'We think we know you'
  alertShowIcon = true
  alertClosable = false
  alertType = 'primary'
  alertTypes = ['primary', 'success', 'danger', 'warning', 'black']
}
</script>
