<template>
  <div class="recommendation">
    <div class="recommendation-coverImg" :style="{backgroundImage: `url(${coverImgUrl})`}">
      <span>每周五更新</span>
    </div>
    <div class="titleList">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: "RecommendationListHorizonal",
    data() {
      return {}
    },
    props: ['coverImgUrl', 'name']
  }
</script>

<style scoped>
.recommendation{
  overflow: hidden;
  display: inline-block;
  margin-top: 18px;
}
.recommendation-coverImg{
  width: 390px;
  height: 390px;
  border-radius: 8px;
  margin-right: 9px;
  background-color: #ff9a7f;
  /*background-image: url('../../assets/logo.png');*/
  background-size: cover;
  position: relative;
}
span{
  position: absolute;
  bottom: 20px;
  left: 19px;
  font-size: 38px;
  color: white;
}
.titleList{
  width: 390px;
  height: 80px;
  line-height: 80px;
  color: #373739;
  font-size: 42px;
  padding-left: 8px;
  box-sizing: border-box;
  font-weight: 600;
}

</style>


