<template>
    <div @click="itemClick"  class="footer-bar_item" >
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon_active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: "footerItem",
    props: {
      path: String,
      activeColor: {
       type: String,
       default: '#c5493d',
     }
    },
    methods: {
      itemClick() {
        console.log(this.path);
        this.$router.push(this.path);
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) > -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    }
  }
</script>

<style scoped>
  .footer-bar_item{
    flex: 1;
    text-align: center;
    height: 150px;
    line-height: 70px;
  }
  img{
    width: 75px;
    height: 75px;
    vertical-align: middle;
    margin-top: 8px;
  }
</style>
