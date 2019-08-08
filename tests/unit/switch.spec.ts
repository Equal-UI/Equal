import { shallowMount, mount } from '@vue/test-utils'
import ItCheckbox from '@/components/switch/ItSwitch.vue'

describe('Switch', () => {
  it('renders label text when passed', () => {
    const label = 'check'
    const wrapper = shallowMount(ItCheckbox, {
      propsData: {
        label
      }
    })
    
    expect(wrapper.contains('.it-checkbox-label')).toBe(true)
  })

  it('renders label text when passed', () => {
    const label = 'check'
    const wrapper = shallowMount(ItCheckbox, {
      propsData: {
        label
      }
    })
    expect(wrapper.find('.it-checkbox-label').text()).toMatch(label)
  })

  it('renders primary button if no type prop passed', () => {
    const wrapper = mount(ItCheckbox)
    expect(wrapper.find('.it-checkbox').classes('it-checkbox--primary')).toBe(
      true
    )
  })

  it('renders icon if icon prop passed', () => {
    const wrapper = mount(ItCheckbox, {
      propsData: { icon: 'face' }
    })
    expect(wrapper.contains('.it-icon')).toBe(true)
  })
})
