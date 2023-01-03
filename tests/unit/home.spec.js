import { mount } from '@vue/test-utils'
import { store } from '@/assets/store';
import BikeCardList from '@/components/BikeCardList';
import {ref, onMounted} from 'vue';


import Navbar from '@/components/Navbar';


describe('Testing HomeView.vue', () => {

  it('should show page title', () => {
    // when
    const wrapper = mount(HomeView)

    // then
    expect(wrapper.text()).toMatch('HomeView')
  })
  it('should have bike card list component', () => {
    // when
    const wrapper = mount(HomeView)

    // then
    const cardList = wrapper.findComponent(BikeCardList)
    expect(cardList.exists()).toBeTruthy()
  })
})
