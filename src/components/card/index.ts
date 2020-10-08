import Card from './ItCard.vue'

// @ts-ignore
Card.install = (Vue) => {
  Vue.component(Card.name, Card)
}

export default Card