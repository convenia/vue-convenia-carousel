<template>
  <div id="app">
    <c-carousel :per-page="2" :is-loopable="false">
      <c-carousel-item v-for="(option, index) in options" :key="index">
        <div class="ball" :style="{ backgroundColor: option.color }" />
      </c-carousel-item>
    </c-carousel>
  </div>
</template>

<script>
import CCarousel from '../src/Carousel.vue'
import CCarouselItem from '../src/components/CarouselItem.vue'

export default {
  name: 'app',

  components: { CCarousel, CCarouselItem },

  data () {
    return {
      options: [
        { color: 'blue' },
        { color: 'yellow' },
        { color: 'red' },
        { color: 'black' },
        { color: 'pink' },
        { color: 'turquoise' },
        { color: 'magenta' },
        { color: 'white' },
        { color: 'orange' },
        { color: 'green' },
        { color: 'purple' },
        { color: 'cyan' },
        { color: 'lime' },
        { color: 'lightblue' }
      ],
      breakpoints: {
        1024: { perPage: 4 },
        768: { perPage: 3 },
        640: { perPage: 2 },
        320: { perPage: 1 }
      }
    }
  }
}
</script>

<style lang="scss">
.ball {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 50%;
}
</style>
