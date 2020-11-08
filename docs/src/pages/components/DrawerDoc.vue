<template>
  <div>
    <h1>Drawer</h1>

    <Box :code="exampleCode" title="Drawer">
      <template #description>
        <p style="padding: 0px 24px">
          This component is intended to be used only with wide screens
        </p>
      </template>
      <it-button @click="drawerLeftVisible = true" type="primary"
        >Left drawer</it-button
      >
      <it-button @click="drawerVisible = true" type="primary"
        >Right drawer</it-button
      >

      <it-drawer v-model="drawerVisible">
        <h3 style="margin: 24px">
          <it-icon
            style="
              margin-right: 6px;
              padding: 5px;
              box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 6px,
                rgba(50, 50, 93, 0.1) 0px 7px 14px,
                rgba(50, 50, 93, 0.05) 0px 0px 0px 1px;
            "
            box
            name="account_circle"
          />
          Contacts
        </h3>
        <it-divider />
        <template v-for="(user, i) in fakeUsers" :key="i">
          <div
            style="
              display: flex;
              flex-direction: row;
              padding: 0 24px;
              justify-content: space-between;
            "
          >
            <it-avatar :src="user.avatar" />
            <div
              style="
                justify-content: space-between;
                display: flex;
                flex: 1;
                flex-direction: column;
                padding-left: 12px;
              "
            >
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
            style="
              margin-right: 6px;
              padding: 5px;
              box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 6px,
                rgba(50, 50, 93, 0.1) 0px 7px 14px,
                rgba(50, 50, 93, 0.05) 0px 0px 0px 1px;
            "
            box
            name="account_circle"
          />
          Contacts
        </h3>
        <it-divider />
        <template v-for="(user, i) in fakeUsers" :key="i">
          <div
            style="
              display: flex;
              flex-direction: row;
              padding: 0 24px;
              justify-content: space-between;
            "
          >
            <it-avatar :src="user.avatar" />
            <div
              style="
                justify-content: space-between;
                display: flex;
                flex: 1;
                flex-direction: column;
                padding-left: 12px;
              "
            >
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
    </Box>
    <props-table :data-sheet="dataSheet" :slot-sheet="slotSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import faker from 'faker'

export default defineComponent({
  mounted: function () {
    for (let i = 0; i < 12; i++) {
      this.fakeUsers.push({
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
      })
    }
  },
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
        default: '30vw',
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
})
</script>
