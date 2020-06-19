<template>
    <div class="header">
      <span class="header-item">
        <img src="../../assets/image/back.svg" alt="" @click="jumpDetails()">
      </span>
      <span class="header-item">排行榜</span>
      <span class="header-item">
        <img src="../../assets/image/music_play.svg" alt="">
      </span>
    </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      jumpDetails() {
        // this.$emit('aaa')
        // console.log(1);
        this.$router.push('/DetailsSongList')
      }
    }
  }
</script>

<style scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 1242px;
  height: 135px;
  background-color: #c5493d;
  color: white;
  display: flex;
}
.header-item{
  flex: 1;
  align-items: center;
  text-align: center;
  line-height: 135px;
  font-weight: 500;
}
.header-item:nth-child(1){
  text-align: left;
  padding-left: 66px;
}
.header-item:nth-child(2){
  font-size: 65px;
}
.header-item:nth-child(3){
  text-align: right;
  padding-right: 66px;
}
img{
  width: 65px;
  height: 65px;
  vertical-align: middle;
  margin-top: 2px;
}
</style>
