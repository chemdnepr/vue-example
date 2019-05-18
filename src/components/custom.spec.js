import { shallowMount } from '@vue/test-utils'
import Custom from '@/components/Custom.vue'

describe('Custom.vue', () => {
  it('renders props.msg when passed', () => {
    const customMassageOuter = 'new message'
    const wrapper = shallowMount(Custom, {
      propsData: { customMassageOuter }
    })
    expect(wrapper.text()).toMatch(customMassageOuter)
  })
})
