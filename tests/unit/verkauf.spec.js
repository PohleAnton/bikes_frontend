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
    expect(wrapper.text()).toMatch('Fahrrad-VerkaufDeine Fahrräder:GTXR09Ein Sportfahrrad mit perfektem Topspin.Angebot ansehen+')
  })
  it('should show page title depeding on login state: NOT logged in', () => {
    const wrapper = mount(VerkaufView,
      {
        data(){
          store.log=false
        }
      }
    )
    expect(wrapper.text()).toMatch('Melden Sie sich bitte an')
  })

})
