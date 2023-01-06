import Navbar from '@/components/Navbar'
import {store} from '@/assets/store'
import { mount, flushPromises } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'

describe('Testing Navbar.vue', () => {
  const $route={
    fullpath: 'http://localhost:8081/'
  }
  const wrapper = shallowMount(Navbar,
    {
      data(){
        store.log=true
      },
      mocks:{
        $route
      }
    }
  )


  it('calls logout() on button click "Logout"', async () => {
    const logoutbutton = wrapper.find('#myud')
    const spy = jest.spyOn(wrapper.vm, 'logout')
    logoutbutton.trigger('click')
    await wrapper.vm.$nextTick()
    expect(spy).toHaveBeenCalled()



})


})


