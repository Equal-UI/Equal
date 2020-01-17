<template>
  <div>
    <h1>Modal</h1>

    <Box :code="typesCode" title="Modal types">
      <it-button @click="showModal" type="primary">Primary modal</it-button>
      <it-button @click="showModal('success')" type="success">Success modal</it-button>
      <it-button @click="showModal('danger')" type="danger">Danger modal</it-button>
      <it-button @click="showModal('warning')" type="warning">Warning modal</it-button>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Box, PropsTable }
})
export default class ModalPage extends Vue {

  public typesCode = `<template>
  <it-button @click="showModal">Primary modal</it-button>
  <it-button @click="showModal('success')" type="success">Success modal</it-button>
  <it-button @click="showModal('danger')" type="danger">Danger modal</it-button>
  <it-button @click="showModal('warning')" type="warning">Warning modal</it-button>
</template>


<script>
export default {
  methods: {
    showModal(type) {
      let modal
      switch (type) {
        case 'success':
          modal = this.$Modal.success({
            title: 'Success modal!',
            content: 'Success modal content',
            okClick: () => {
              modal.close()
            },
            cancelClick: () => {
              modal.close()
            }
          })
          break
        case 'danger':
          modal = this.$Modal.danger({
            title: 'Danger modal!',
            content: 'Danger modal content',
            okClick: () => {
              modal.close()
            },
            cancelClick: () => {
              modal.close()
            }
          })
          break
        case 'warning':
          modal = this.$Modal.warning({
            title: 'Warning modal!',
            content: 'Warning modal content',
            okClick: () => {
              modal.close()
            },
            cancelClick: () => {
              modal.close()
            }
          })
          break
        default:
          modal = this.$Modal({
            title: 'Primary modal!',
            content: 'Primary modal content',
            okClick: () => {
              modal.close()
            },
            cancelClick: () => {
              modal.close()
            }
          })
          break
      }
    }
  }
}
<\/script>
`

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'primary',
      values: ['primary', 'success', 'danger', 'warning'],
      description: 'Type of the modal'
    },
    {
      property: 'title',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Title of the modal'
    },
    {
      property: 'content',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Content of the modal'
    },
    {
      property: 'closable-mask',
      type: ['Boolean'],
      default: 'true',
      values: [],
      description: 'Close modal on the mask click'
    },
    {
      property: 'close-on-esc',
      type: ['Boolean'],
      default: 'true',
      values: [],
      description: 'Close modal on esc'
    },
    {
      property: 'hide-footer',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Hide modal footer with buttons'
    },
    {
      property: 'ok-click',
      type: ['Function'],
      default: '',
      values: [],
      description: 'Callback triggers on OK click'
    },
    {
      property: 'cancel-click',
      type: ['Function'],
      default: '',
      values: [],
      description: 'Callback triggers on Cancel click'
    }
  ]
  public showModal(type: string) {
    let modal
    switch (type) {
      case 'success':
        modal = this.$Modal.success({
          title: 'Success modal!',
          content: 'Success modal content',
          okClick: () => {
            modal.close()
          },
          cancelClick: () => {
            modal.close()
          }
        })
        break
      case 'danger':
        modal = this.$Modal.danger({
          title: 'Danger modal!',
          content: 'Danger modal content',
          okClick: () => {
            modal.close()
          },
          cancelClick: () => {
            modal.close()
          }
        })
        break
      case 'warning':
        modal = this.$Modal.warning({
          title: 'Warning modal!',
          content: 'Prepare for unforeseen consequences',
          okClick: () => {
            modal.close()
          },
          cancelClick: () => {
            modal.close()
          }
        })
        break
      default:
        modal = this.$Modal({
          title: 'Primary modal!',
          content: 'Primary modal content',
          okClick: () => {
            modal.close()
          },
          cancelClick: () => {
            modal.close()
          }
        })
        break
    }
  }
}
</script>
