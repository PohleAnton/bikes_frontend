import VerkaufView from '@/views/VerkaufView'
import {store} from '@/assets/store'
import { mount } from '@vue/test-utils'
import BikeCardList from '@/components/BikeCardList'


describe('Testing Verkauf.vue', () => {

  it('should show page title depeding on login state: logged in', () => {
    const wrapper = mount(VerkaufView,
      {
        data(){
          store.log=true
        }
      }
      )
    expect(wrapper.text()).toContain('Deine Fahrräder:')
  })
  it('should show page title depeding on login state: NOT logged in', () => {
    const wrapper = mount(VerkaufView,
      {
        data(){
          store.log=false
        }
      }
    )
    expect(wrapper.text()).toContain('Neugierig geworden?')
  })

})
