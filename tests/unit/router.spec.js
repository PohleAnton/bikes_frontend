import App from '../../src/App'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import VerkaufView from '@/views/VerkaufView'


describe('App', ()=>{
  it('renders a component via routing', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/verkauf',
        name: 'verkauf',
        component: VerkaufView
      }]
    })

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    await router.push('/verkauf')
    expect(wrapper.findComponent(VerkaufView).exists()).toBe(true)
  })
})

