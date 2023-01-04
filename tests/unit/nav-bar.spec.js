import Navbar from '@/components/Navbar'
import {store} from '@/assets/store'
import { mount, flushPromises } from '@vue/test-utils'

import BikeCardList from '@/components/BikeCardList'
import HomeView from '@/views/HomeView'
import VerkaufView from '@/views/VerkaufView'

describe('Testing Navbar.vue', () => {


  it('should show page title depeding on login state: NOT logged in', () => {
    const wrapper = mount(VerkaufView,
      {
        data(){
          store.log=true
        }
      }
    )
    expect(wrapper.text()).toMatch('Melden Sie sich bitte an')  })

})


