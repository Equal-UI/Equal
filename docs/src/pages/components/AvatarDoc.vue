<template>
  <div>
    <h1>Avatar</h1>

    <Demobox>
      <it-avatar
        :text="avatarText ? 'Yan Savinov' : null"
        :src="avatarImage ? husky : null"
        :square="avatarSquare"
      ></it-avatar>
      <template #props>
        <it-checkbox v-model="avatarSquare" label="Square" />
        <it-checkbox v-model="avatarImage" label="Image" />
        <it-checkbox v-model="avatarText" label="Text" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <it-avatar />
      <it-avatar square />
    </Box>

    <Box :code="colorCode" title="Color">
      <it-avatar color="#3051ff" />
      <it-avatar color="#f93155" />
      <it-avatar color="#131313" />
    </Box>

    <Box :code="imageCode" title="Image">
      <it-avatar :src="husky" />
      <it-avatar :src="husky" square />
    </Box>

    <Box :code="textCode" title="Initials">
      <it-avatar color="#3051ff" text="Yan" />
      <it-avatar color="#3051ff" text="Yan Savinov" />
    </Box>

    <Box :code="sizeCode" title="Size">
      <it-avatar />
      <it-avatar size="50px" />
      <it-avatar size="60px" />
      <it-avatar size="70px" />
    </Box>

    <Box :code="badgeCode" title="With badge">
      <it-badge value="1">
        <it-avatar :src="husky" square />
      </it-badge>
      <it-badge position="bottom-left" type="success" point>
        <it-avatar :src="husky" square />
      </it-badge>
    </Box>

    <Box :code="groupCode" title="Group">
      <it-avatar-group>
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
      </it-avatar-group>

      <it-avatar-group square>
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
      </it-avatar-group>

      <it-divider></it-divider>

      <it-avatar-group vertical>
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
      </it-avatar-group>

      <it-avatar-group vertical square>
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
      </it-avatar-group>
    </Box>

    <Box :code="groupMaxCode" title="Group with avatars limit">
      <it-avatar-group :max="3">
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
      </it-avatar-group>

      <it-divider></it-divider>

      <it-avatar-group :max="3" vertical>
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
        <it-avatar :src="husky" />
      </it-avatar-group>
    </Box>

    <props-table tag-name="it-avatar" :data-sheet="dataSheet" />
    <props-table tag-name="it-avatar-group" :data-sheet="dataSheetGroup" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import faker from 'faker'

  export default defineComponent({
    data: () => ({
      husky: faker.image.avatar(),

      avatarSquare: false,
      avatarImage: false,
      avatarText: false,

      alertType: 'primary',
      alertTypes: ['primary', 'success', 'danger', 'warning'],

      typesCode: `<it-avatar />
<it-avatar square />`,

      colorCode: `<it-avatar color="#3051ff" />
<it-avatar color="#f93155" />
<it-avatar color="#131313" />`,

      imageCode: `<it-avatar src="husky" />
<it-avatar src="husky" square />`,

      textCode: `<it-avatar color="#3051ff" text="Yan" />
<it-avatar color="#3051ff" text="Yan Savinov" />`,

      sizeCode: `<it-avatar />
<it-avatar size="50px" />
<it-avatar size="60px" />
<it-avatar size="70px" />`,

      badgeCode: `<it-badge value="1">
  <it-avatar square />
</it-badge>
<it-badge point>
  <it-avatar square />
</it-badge>`,

      groupCode: `<it-avatar-group>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-avatar-group square>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-divider></it-divider>

<it-avatar-group vertical>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-avatar-group vertical square>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>`,

      groupMaxCode: `<it-avatar-group :max="3">
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-divider></it-divider>

<it-avatar-group :max="3" vertical>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>`,

      dataSheet: [
        {
          property: 'src',
          type: ['String'],
          default: '-',
          values: [],
          description: 'Src of avatar image',
        },
        {
          property: 'text',
          type: ['String'],
          default: '-',
          values: [],
          description: 'Avatar text',
        },
        {
          property: 'color',
          type: ['String'],
          default: '-',
          values: ['hex', 'rgb', 'hsl'],
          description: 'Avatar color',
        },
        {
          property: 'size',
          type: ['String'],
          default: '40px',
          values: [],
          description: 'Avatar size',
        },
        {
          property: 'square',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Makes avatar square',
        },
      ],

      dataSheetGroup: [
        {
          property: 'size',
          type: ['String'],
          default: '40px',
          values: [],
          description: 'Avatar size for all avatars in group',
        },
        {
          property: 'square',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Makes avatars square in group',
        },
        {
          property: 'max',
          type: ['Number'],
          default: '-',
          values: [],
          description: 'Limit the maximum amount of visible avatars',
        },
      ],
    }),
  })
</script>
