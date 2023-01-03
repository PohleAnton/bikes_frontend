import NeuesFahrradView from '@/views/NeuesFahrradView'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { store } from '@/assets/store'
import { mount, shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('Testing NeuesFahrradView.vue', () => {

  it('should show page title depeding on login state: logged in', () => {
    const wrapper = mount(NeuesFahrradView)


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

