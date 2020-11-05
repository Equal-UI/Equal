<template>
  <div>
    <h1>Icon</h1>
    <p style="margin-bottom: 10px">
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
        <it-input v-model="iconName" labelTop="Icon name" />
        <it-input type="color" v-model="iconColor" labelTop="Icon color" />
        <it-slider
          :min="10"
          :max="30"
          v-model="iconSize"
          labelTop="Icon size"
        />
        <it-checkbox
          style="margin: 0px !important"
          label="Outline"
          v-model="iconOutlined"
        />
        <it-divider style="margin: 20x 0 !important" />
        <it-checkbox label="Box" v-model="iconBox" />
        <it-input
          :disabled="!iconBox"
          type="color"
          v-model="iconBoxColor"
          labelTop="Icon box color"
        />
        <it-slider
          :disabled="!iconBox"
          :min="0"
          :max="30"
          v-model="iconBoxPadding"
          labelTop="Icon box padding"
        />
        <it-slider
          :disabled="!iconBox"
          :min="0"
          :max="50"
          v-model="iconBoxRadius"
          labelTop="Icon box border-radius"
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
import {defineComponent} from 'vue'

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
