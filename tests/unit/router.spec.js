import App from '../../src/App'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import VerkaufView from '@/views/VerkaufView'


describe('App', ()=>{
  it('renders a component via routing', async () => {
    // create a local router
    // with '/about' route
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/verkauf',
        name: 'verkauf',
        component: VerkaufView
      }]
    })

    // navigate to route


    // mount the App
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    await router.push('/verkauf')

    // if the About route exists
    // the routing was successful
    expect(wrapper.findComponent(VerkaufView).exists()).toBe(true)
  })
})

