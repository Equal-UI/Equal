import { ALLOWED_POSITION } from '../../../../../src/components/select/constants'

export const DATA_SHEET = [
  {
    property: 'label-top',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Top label',
  },
  {
    property: 'options',
    type: ['Array', 'Object[]'],
    default: '-',
    values: [],
    description:
      'Array of options, or array of option object used with index prop',
  },
  {
    property: 'track-by',
    type: ['String'],
    default: 'value',
    values: [],
    description: 'Field for track',
  },
  {
    property: 'index',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Index of the object key',
  },
  {
    property: 'placeholder',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Select area placeholder',
  },
  {
    property: 'placement',
    type: ['String'],
    default: 'bottom',
    values: ALLOWED_POSITION,
    description: 'Select list position',
  },
  {
    property: 'divided',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes select options divided by line',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes select disabled',
  },
]

export const SLOT_SHEET = [
  {
    property: 'label-top',
    description: 'Label top text',
  },
  {
    property: 'selected-option',
    description: 'Selected option',
  },
  {
    property: 'placeholder',
    description: 'Placeholder text',
  },
  {
    property: 'option',
    description: 'Option',
  },
  {
    property: 'icon',
    description: 'Icon',
  },
]
