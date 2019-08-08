import { shallowMount, mount } from '@vue/test-utils'
import ItButton from '@/components/button/ItButton.vue'

describe('Button', () => {
  it('renders msg as slot text when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ItButton, {
      slots: {
        default: msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders primary button if no type prop passed', () => {
    const wrapper = shallowMount(ItButton)
    expect(wrapper.classes('it-btn--primary')).toBe(true)
  })

  it('renders round borders if round prop passed', () => {
    const wrapper = shallowMount(ItButton, {
      propsData: { round: true }
    })
    expect(wrapper.classes('round')).toBe(true)
  })

  it('renders outlined if outline prop passed', () => {
    const wrapper = shallowMount(ItButton, {
      propsData: { outlined: true }
    })
    expect(wrapper.classes('it-btn--primary--outlined')).toBe(true)
  })

  it('renders icon if icon prop passed', () => {
    const wrapper = mount(ItButton, {
      propsData: { icon: 'face' }
    })
    expect(wrapper.contains('.it-icon')).toBe(true)
  })
})
