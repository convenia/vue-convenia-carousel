<script>
export default {
  name: 'c-carousel-item',

  inject: ['data'],

  computed: {
    flex () {
      return { flex: '1 0 ' + (100 / this.data.internalPerPage) + '%' }
    },

    isDraggable () {
      return this.data.isDraggable && !this.data.isLoopable
    }
  },

  render (h) {
    return h('div', { style: this.flex, staticClass: 'c-carousel-item' }, this.$slots.default)
  }
}
</script>

<style lang="scss">
.c-carousel-item {
  display: flex;
  user-select: none;
  outline: none;
  overflow: hidden;
}
</style>
