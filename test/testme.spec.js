import { shallow } from 'vue-test-utils'
import testme from '../src/components/testme.vue'

describe('testme.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallow(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).toMatch('1')
  })
})
