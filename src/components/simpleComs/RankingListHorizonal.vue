<template>
    <div class="rank-container">
      <div class="rank-coverImage" :style="{backgroundImage: `url(${coverImgUrl})`}">
        <span class="rank-tag">每周更新</span>
      </div>
      <div class="rank-playList">
        <div class="playList-item"
             v-for="(item, index) in tracks"
             :key="index">{{item.name}}-{{item.ar[0].name}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "RankingListHorizonal",
    data() {
      return {}
    },
    props: ['coverImgUrl', 'tracks'],
    methods: {},
    mounted() {}
  }
</script>

<style scoped>
.rank-container{
  display: flex;
  margin: 18px 0 0 18px;
  /*position: absolute;*/
  /*top: 155px;*/
}
.rank-coverImage{
  width: 408px;
  height: 408px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 27px;
  background-color: #ff9a7f;
  /*background-image: url('../../assets/logo.png');*/
  background-size: cover;
  position: relative;
}
.rank-tag{
  font-size: 34px;
  display: inline-block;
  color: white;
  position: absolute;
  left: 20px;
  bottom: 24px;
}
.rank-playList{
  width: 816px;
  height: 408px;
  /*background-color: dodgerblue;*/
  /*padding-left: 27px;*/
  box-sizing: border-box;
  padding: 60px 27px 0 0;
  border-bottom: 1px solid #e2e2e3;
}
.playList-item{
  font-size: 38px;
  line-height: 98px;
  color: #838485;
}
</style>
