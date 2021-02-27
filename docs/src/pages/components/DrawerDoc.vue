<template>
  <div>
    <h1>Drawer</h1>

    <Box :code="exampleCode" title="Drawer">
      <template #description>
        <p class="mx-6">
          This component is intended to be used only with wide screens
        </p>
      </template>
      <it-button type="primary" @click="drawerLeftVisible = true"
        >Left drawer</it-button
      >
      <it-button type="primary" @click="drawerVisible = true"
        >Right drawer</it-button
      >

      <it-drawer v-model="drawerVisible">
        <h3 class="m-6">
          <it-icon class="contacts" box name="account_circle" />
          Contacts
        </h3>
        <it-divider />
        <template v-for="(user, i) in fakeUsers" :key="i">
          <div class="flex flex-row px-6 justify-between">
            <it-avatar :src="user.avatar" />
            <div class="justify-between flex flex-1 flex-col pl-3">
              <p class="font-medium">{{ user.name }}</p>
              <p style="color: #787f8a" class="font-medium text-sm">
                @{{ user.username }}
              </p>
            </div>
            <it-button icon="call" type="primary"></it-button>
          </div>
          <it-divider />
        </template>
      </it-drawer>
      <it-drawer v-model="drawerLeftVisible" placement="left">
        <h3 class="m-6">
          <it-icon class="contacts" box name="account_circle" />
          Contacts
        </h3>
        <it-divider />
        <template v-for="(user, i) in fakeUsers" :key="i">
          <div class="flex flex-row px-6 justify-between">
            <it-avatar :src="user.avatar" />
            <div class="flex flex-1 flex-col pl-3 justify-between">
              <p class="font-medium">{{ user.name }}</p>
              <p style="color: #787f8a" class="text-sm font-medium">
                @{{ user.username }}
              </p>
            </div>
            <it-button icon="call" type="primary"></it-button>
          </div>
          <it-divider />
        </template>
      </it-drawer>
    </Box>
    <props-table :data-sheet="dataSheet" :slot-sheet="slotSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    drawerVisible: false,
    drawerLeftVisible: false,
    fakeUsers: [],
    exampleCode: `<it-button @click="drawerLeftVisible = true" type="primary">
    Left drawer
    </it-button>

<it-button @click="drawerVisible = true" type="primary">
  Right drawer
</it-button>

<it-drawer v-model="drawerVisible">
  <h3 style="margin: 24px">
    <it-icon
      box
      name="account_circle"
    />
    Contacts
  </h3>
  <it-divider />
  <template v-for="(user, i) in fakeUsers" :key="i">
    <div>
      <it-avatar :src="user.avatar" />
      <div>
        <p style="font-weight: 500">{{ user.name }}</p>
        <p style="font-size: 14px; font-weight: 500; color: #787f8a">
          @{{ user.username }}
        </p>
      </div>
      <it-button icon="call" type="primary"></it-button>
    </div>
    <it-divider />
  </template>
</it-drawer>

<it-drawer placement="left" v-model="drawerLeftVisible">
  <h3 style="margin: 24px">
    <it-icon
      box
      name="account_circle"
    />
    Contacts
  </h3>
  <it-divider />
  <template v-for="(user, i) in fakeUsers" :key="i">
    <div>
      <it-avatar :src="user.avatar" />
      <div>
        <p style="font-weight: 500">{{ user.name }}</p>
        <p style="font-size: 14px; font-weight: 500; color: #787f8a">
          @{{ user.username }}
        </p>
      </div>
      <it-button icon="call" type="primary"></it-button>
    </div>
    <it-divider />
  </template>
</it-drawer>`,

    dataSheet: [
      {
        property: 'width',
        type: ['String'],
        default: '500px',
        values: [],
        description: 'Drawer width',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'right',
        values: ['right', 'left'],
        description: 'Drawer position',
      },
      {
        property: 'closable-mask',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Close drawer on the mask click',
      },
      {
        property: 'hide-mask',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Hides drawer mask',
      },
      {
        property: 'v-model',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Drawer v-model value',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Drawer body',
      },
    ],
  }),
  async mounted() {
    const reqNames = await fetch(
      'https://randomuser.me/api/?inc=picture,name,login&results=12',
    )
    const data = await reqNames.json()

    this.fakeUsers = data.results.map((el: any) => {
      const { first, last } = el.name
      return {
        name: `${first} ${last}`,
        avatar: el.picture.medium,
        username: el.login.username,
      }
    })
  },
})
</script>

<style scoped>
.contacts {
  margin-right: 6px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 6px,
    rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(50, 50, 93, 0.05) 0px 0px 0px 1px;
}
</style>
