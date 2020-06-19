<template>
    <div class="poster"
         :style="{height: `${265 + distance +'px'}`,filter : `blur(${blur/20}px)`, background: `url(${bgImg})`}"
         >
      <!--<img src="../assets/poster.png" alt="">-->
      <span :style="{top: 225 + distance + 'px'}">随机播放全部</span>
    </div>
</template>

<script>
  import eventBus from '../../bus/index'
export default {
  name: "App-Poster",
  data() {
    return {
      distance: 0,
      bgImg: '',
      blur: 0,
    }
  },
  mounted() { // window.onload
    // console.log(this.distance);
    var self = this;
    eventBus.$on('pulldown', (res) => {
      self.distance = res;
    }),
    eventBus.$on('pullup', (res) => {
      self.blur = -res;
    })
    eventBus.$on('posterImg', (data) => {
      self.bgImg = data;
    })
  },
}
</script>

<style scoped>
.poster {
  position: absolute;
  width: 1242px;
  height: 450px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  background-position: center!important;
  background-size: cover!important;
  background: url("../../assets/poster.png");
  /*filter:blur(1px);*/
}
span{
  position: absolute;
  left: 442px;
  right: 442px;
  top: 720px;
  z-index: 5;
  display: inline-block;
  width: 390px;
  height: 102px;
  text-align: center;
  line-height: 102px;
  color: #ffcd32;
  font-size: 41px;
  letter-spacing: 1px;
  border: 1px solid #ffcd32;
  border-radius: 43px;
}
</style>
