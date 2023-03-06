<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Drawer</h1>

    <Box :template="exampleCode" title="Drawer">
      <template #description>
        <p class="mx-6">
          This component is intended to be used only with wide screens
        </p>
      </template>
      <it-button variant="primary" @click="drawerLeftVisible = true">
        Left drawer
      </it-button>
      <it-button variant="primary" @click="drawerVisible = true">
        Right drawer
      </it-button>

      <it-drawer v-model="drawerVisible"></it-drawer>
      <it-drawer v-model="drawerLeftVisible" placement="left">
        <div class="relative flex flex-row items-center p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="contacts h-7 w-7 rounded"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
          <h3>Contacts</h3>
        </div>
        <it-divider class="mb-2" />
        <template v-for="(user, i) in fakeUsers" :key="i">
          <div class="flex flex-row justify-between px-6">
            <it-avatar :src="user.avatar" />
            <div class="flex flex-1 flex-col justify-between pl-3">
              <p class="font-medium">{{ user.name }}</p>
              <p style="color: #787f8a" class="text-sm font-medium">
                @{{ user.username }}
              </p>
            </div>
            <it-button variant="primary">
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </template>
            </it-button>
          </div>
          <it-divider class="mt-2 mb-2" />
        </template>
      </it-drawer>
    </Box>

    <Box :template="nestedCode" title="Nested Drawers">
      <template #description>
        <p class="mx-6">
          Nested drawers isn't a good idea for your interface, but we
          implemented it anyway
        </p>
      </template>

      <it-button variant="primary" @click="nestedDrawer = true">
        Left Nested drawer
      </it-button>

      <it-button variant="primary" @click="nestedDrawerR = true">
        Right Nested drawers
      </it-button>

      <it-drawer v-model="nestedDrawer" placement="left">
        <div class="mt-12 flex justify-center">
          <it-button size="big" @click="nestedDrawer2 = true">
            Show nested
          </it-button>
        </div>
      </it-drawer>
      <it-drawer v-model="nestedDrawer2" placement="left">
        <div class="mt-12 flex justify-center">
          <it-button size="big" @click="nestedDrawer3 = true">
            Show nested
          </it-button>
        </div>
      </it-drawer>
      <it-drawer v-model="nestedDrawer3" placement="left">
        <div class="mt-12 flex justify-center">
          <it-button size="big" @click="nestedDrawer4 = true">
            Show nested
          </it-button>
        </div>
      </it-drawer>
      <it-drawer v-model="nestedDrawer4" placement="left">
        <img class="w-full" src="/finally.png" />
      </it-drawer>

      <it-drawer v-model="nestedDrawerR">
        <div class="mt-12 flex justify-center">
          <it-button size="big" @click="nestedDrawerR2 = true">
            Show nested
          </it-button>
        </div>
      </it-drawer>
      <it-drawer v-model="nestedDrawerR2">
        <div class="mt-12 flex justify-center">
          <it-button size="big" @click="nestedDrawerR3 = true">
            Show nested
          </it-button>
        </div>
      </it-drawer>
      <it-drawer v-model="nestedDrawerR3">
        <div class="mt-12 flex justify-center">
          <it-button size="big" @click="nestedDrawerR4 = true">
            Show nested
          </it-button>
        </div>
      </it-drawer>
      <it-drawer v-model="nestedDrawerR4">
        <img class="w-full" src="/finally.png" />
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
    nestedDrawer: false,
    nestedDrawer2: false,
    nestedDrawer3: false,
    nestedDrawer4: false,
    nestedDrawerR: false,
    nestedDrawerR2: false,
    nestedDrawerR3: false,
    nestedDrawerR4: false,
    fakeUsers: [],

    nestedCode: `
<it-button variant="primary" @click="nestedDrawer = true">Left Nested drawer</it-button>
<it-button variant="primary" @click="nestedDrawerR = true">Right Nested drawers</it-button>

<it-drawer v-model="nestedDrawer" placement="left">
  <it-button @click="nestedDrawer2 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawer2" placement="left">
  <it-button @click="nestedDrawer3 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawer3" placement="left">
  <it-button @click="nestedDrawer4 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawer4" placement="left">
  <img class="w-full" src="/finally.png" />
</it-drawer>
<it-drawer v-model="nestedDrawerR">
  <it-button @click="nestedDrawerR2 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawerR2">
  <it-button @click="nestedDrawerR3 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawerR3">
  <it-button @click="nestedDrawerR4 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawerR4">
  <img class="w-full" src="/finally.png" />
</it-drawer>`,

    exampleCode: `<it-button @click="drawerLeftVisible = true" variant="primary">
    Left drawer
    </it-button>

<it-button @click="drawerVisible = true" variant="primary">
  Right drawer
</it-button>

<it-drawer v-model="drawerVisible">
  <div class="p-6 flex flex-row items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 rounded contacts"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
    <h3>
      Contacts
    </h3>
  </div>
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
      <it-button icon="call" variant="primary"></it-button>
    </div>
    <it-divider />
  </template>
</it-drawer>

<it-drawer placement="left" v-model="drawerLeftVisible">
  <div class="p-6 flex flex-row items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 rounded contacts"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
    <h3>
      Contacts
    </h3>
  </div>
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
      <it-button variant="primary">
      </it-button>
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
