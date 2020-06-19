<template>
  <div class="co-loading" v-if="visible">
    <span class="co-loading_icon"></span>
  </div>
</template>

<script>
  export default {
    name: "coLoading",
    data() {
      return {
        // loadingIsVisiblity: true
      }
    },
    // props: ['duration'],
    props: ['visible'],
    mounted() {
      // let _this = this;
      // setTimeout(function () {
      //   _this.loadingIsVisiblity = false;
      // },_this.duration || 2000)
    }
  }
</script>

<style scoped>
.co-loading{
  width: 246px;
  height: 246px;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #d0d0d0;
  z-index: 99;
}
.co-loading_icon{
  display: inline-block;
  width: 128px;
  height: 128px;
  border-width: 10px;
  border-color: #fff #fff #fff transparent;
  border-style: solid;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  animation: co-circular 1s linear infinite;
}
@keyframes co-circular {
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
