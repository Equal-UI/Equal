<template>
  <div>
    <h1>Icon</h1>
    <p class="mb-3">
      Equal UI uses
      <a
        href="https://material.io/resources/icons/?style=baseline"
        target="_blank"
        rel="noopener noreferrer"
        >Material icons</a
      >
      as a default icons library
    </p>
    <Demobox>
      <it-icon
        :style="{
          padding: iconBoxPadding + 'px',
          fontSize: iconSize + 'px',
          borderRadius: iconBoxRadius + 'px',
        }"
        :box="iconBox"
        :box-color="iconBoxColor"
        :name="iconName"
        :outlined="iconOutlined"
        :color="iconColor"
      />

      <template #props>
        <it-input v-model="iconName" label-top="Icon name" />
        <it-input v-model="iconColor" type="color" label-top="Icon color" />
        <it-slider
          v-model="iconSize"
          :min="10"
          :max="30"
          label-top="Icon size"
        />
        <it-checkbox v-model="iconOutlined" class="mb-0" label="Outline" />
        <it-divider class="my-5" />
        <it-checkbox v-model="iconBox" label="Box" />
        <it-input
          v-model="iconBoxColor"
          :disabled="!iconBox"
          type="color"
          label-top="Icon box color"
        />
        <it-slider
          v-model="iconBoxPadding"
          :disabled="!iconBox"
          :min="0"
          :max="30"
          label-top="Icon box padding"
        />
        <it-slider
          v-model="iconBoxRadius"
          :disabled="!iconBox"
          :min="0"
          :max="50"
          label-top="Icon box border-radius"
        />
      </template>
    </Demobox>
    <Box :code="codeBox" title="Box">
      <it-icon box box-color="#3051ff" color="#fff" name="info" />
      <it-icon box box-color="#07d85b" color="#fff" name="room" />
      <it-icon box box-color="#ff45c0" color="#fff" name="favorite" />
    </Box>
    <Box :code="codeOutlined" title="Outlined">
      <it-icon name="face" outlined />
      <it-icon name="label" outlined />
      <it-icon name="feedback" outlined />
    </Box>
    <Box :code="codeColor" title="Color">
      <it-icon name="face" color="#3051FF" />
      <it-icon name="label" color="#000" />
      <it-icon name="feedback" color="#0ad85b" />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    iconColor: '#000000',
    iconName: 'face',
    iconOutlined: false,
    iconBox: false,
    iconBoxColor: '#ffed17',
    iconBoxPadding: 8,
    iconSize: 20,
    iconBoxRadius: 5,

    codeBox: `<it-icon box box-color="#3051ff" color="#fff" name="info" />
<it-icon box box-color="#07d85b" color="#fff" name="room" />
<it-icon box box-color="#ff45c0" color="#fff" name="favorite" />`,

    codeOutlined: `<it-icon name="face" outlined />
<it-icon name="label" outlined />
<it-icon name="feedback" outlined />`,

    codeColor: `<it-icon name="face" color="#3051FF" />
<it-icon name="label" color="#000" />
<it-icon name="feedback" color="#0ad85b" />`,

    dataSheet: [
      {
        property: 'name',
        type: ['String'],
        default: '',
        values: ['Material Icon'],
        description: 'Name of the Material Icon',
      },
      {
        property: 'outlined',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes icon outlined',
      },
      {
        property: 'color',
        type: ['String'],
        default: '#000000',
        values: ['color value'],
        description: 'Color of the icon',
      },
    ],
  }),
})
</script>
