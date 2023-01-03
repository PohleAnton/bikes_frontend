import Navbar from '@/components/Navbar'
import {store} from '@/assets/store'
import { flushPromises, mount, shallowMount } from '@vue/test-utils'
import BikeCardList from '@/components/BikeCardList'
import HomeView from '@/views/HomeView'


describe('Testing Navbar.vue', () => {

  it('should show page title depeding on login state: logged in', () => {
    const wrapper = shallowMount(Navbar)


    expect(wrapper.find()).toMatch('Fahrrad-VerkaufDeine Fahrräder:GTXR09Ein Sportfahrrad mit perfektem Topspin.Angebot ansehen+')
  })
  it('should show page title depeding on login state: NOT logged in', () => {
    const wrapper = mount(VerkaufView,
      {
        data(){
          store.log=false
        }
      }
    )
    expect(wrapper.text()).toMatch('Melden Sie sich bitte an')  })

})


