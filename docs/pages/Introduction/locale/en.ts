export default {
  title: 'Introduction',
  description:
    '{0} is a design philosophy that focuses on creating user interfaces that are accessible, intuitive, and easy to use for all users, regardless of their physical abilities or technological expertise. It involves creating user interfaces that are visually and functionally consistent across different devices and platforms, and that are easy to navigate and use for people with disabilities or special needs. Equal UI aims to create a more inclusive and equitable user experience for all users, by designing interfaces that are easy to understand and use for everyone.',
  how_works: {
    label: 'How it works',
    content:
      "Every component's template contains tags with variant blocks. This example shows short version of {0} :",
  },
  types: {
    title:
      "There are a single source of styles in Equal UI. It's the file with object containing classes for every component. There are 3 different types:",
    type1: {
      name: 'Full:',
      description: '{0} contains classes for light and dark themes',
    },
    type2: {
      name: 'Light:',
      description: '{0} contains classes for light theme',
    },
    type3: {
      name: 'Dark:',
      description: '{0} contains classes for dark theme',
    },
  },
  blocks_title: 'This is how {0} block looks:',
  variants: {
    title:
      '{0} contains entries for every major part of the component and applies permanent classes to them {1} contains entries for every variant of the component. Default variant is applied by default. Classes in chosen variant applies classes on top of the {2}',
    result: 'Result:',
    usage1: {
      title:
        'To apply variant to the component you need to use {0} prop, it works with every Equal UI component',
    },
    usage2: {
      title:
        'Also you can make inline variants via {0} prop. You can use multiple variants at the same time!',
    },
  },
  note: 'Equal UI uses Tailwindcss as a classes provider. But you can use you your own classes or another utility classes provider if you want.',
  create_theme: {
    title: 'How to create my own theme?',
    theme: 'theming',
    step1: 'To create your theme please read the {0}',
    step2:
      "Also, do not hesitate to use Customization feature under every component on it's own page",
  },
  next: {
    title: "What's next?",
    start: 'Getting started',
    contribute: 'How to contribute?',
    support: 'Support the project',
  },
}
