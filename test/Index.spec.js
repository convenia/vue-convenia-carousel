
import { shallowMount } from '@vue/test-utils'
import CCarousel from '../src/Carousel.vue'

/* eslint-disable */
describe('CCarousel', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CCarousel)

    expect (wrapper.isVueInstance()).toBeTruthy()
  })
})
