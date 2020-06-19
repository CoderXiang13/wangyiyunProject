<template>
  <div class="container">
    <Header/>
    <ScrollWrapper class="wrapper">
      <div class="title">官方榜</div>
      <RankingList></RankingList>
      <div class="title rec">推荐榜</div>
      <RecommendationList/>
    </ScrollWrapper>
    <!--<Footer/>-->
  </div>
</template>

<script>
  /*局部组件*/
  import Header from './headerCons/Header'
  import RankingList from './simpleComs/RankingList'
  import RecommendationList from './simpleComs/RecommendationList'
  // import Footer from './footerCons/Footer'
  import ScrollWrapper from './ScrollWrapper'
  export default {
    name: "RankingTop",
    components: {
      Header,
      RankingList,
      RecommendationList,
      // Footer,
      ScrollWrapper,
    }
  }
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  position: relative;
}
.title{
    width: 100vw;
    padding-top:55px;
    z-index: 1;
    font-size: 55px;
    font-weight: 700;
    font-family: 微软雅黑;
    color: black!important;
    padding-left: 66px;
    box-sizing: border-box;
  }
.rec{
  margin-top: 10px;
}
.wrapper{
  position: absolute;
  top: 135px;
  left: 0;
  right: 0;
  bottom: 150px;
  overflow: hidden;
}
</style>
