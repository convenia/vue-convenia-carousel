<h1 align="center">vue-convenia-carousel ✅</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/npm/l/vuelidation.svg" alt="License" target="_blank"></a>
</p>

<br>

<p align="center">
  ✨ <a href="#">Example</a>✨
</p>

<br>

**Install**

`yarn add vue-convenia-carousel`

<br>

**Use**
```vue
<template>
  <c-carousel :per-page="2" :breakpoints="breakpoints" :is-loopable="false">
    <c-carousel-item v-for="(option, index) in options" :key="index">
      <div class="ball" :style="{ backgroundColor: option.color }" />
    </c-carousel-item>
  </c-carousel>
</template>

<script>
import CCarousel from 'vue-convenia-carousel'

export default {
  components: { CCarousel },

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
</script>
```

<br>

## Props

Name           |   type               | required  | default  
-----          | -------------------- | --------- | --------
pagination     |  Boolean             | `false`   |  `true`  
perPage        |  `(String, Number)`  | `false`   |    `1`   
isDraggable    |  Boolean             | `false`   |  `true`  
isLoopable     |  Boolean             | `false`   |  `false`
perPage        |  `(String, Number)`  | `false`   |  `1000`  
breakpoints    |  `Object`            | `false`   |  `{}`    

## Contribution
@convenia team
