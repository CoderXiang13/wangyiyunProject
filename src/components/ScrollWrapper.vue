<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 第三方
  import BScroll from 'better-scroll'
  export default {
    name: "ScrollWrapper",
    data() {
      return {
        scroller: null
      }
    },
    mounted() {
      this.scroller = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped>


</style>
