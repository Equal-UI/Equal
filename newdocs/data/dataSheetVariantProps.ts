export const variantProps = [
  {
    property: 'base',
    type: ['Object'],
    default: '{}',
    values: [],
    description: 'Base classes of the component, always active',
  },
  {
    property: 'classes',
    type: ['Object'],
    default: '{}',
    values: [],
    description: 'Classes added to the target when one of the variants active',
  },
  {
    property: 'variants',
    type: ['Object'],
    default: '{}',
    values: [],
    description: 'Object with variants of the component',
  },
  {
    property: 'variants',
    type: ['String', 'Array'],
    default: '-',
    values: [],
    description: 'Name of the variant, or array of multiple variants',
  },
]
