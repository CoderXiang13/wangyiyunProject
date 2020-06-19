<template>
    <div class="recommendation-list">
      <RecommendationListHorizonal v-for="(item, index) in res"
                                     :key="index"
                                     :cover-img-url="item.data.playlist.coverImgUrl"
                                     :name="item.data.playlist.name">
      </RecommendationListHorizonal>
    </div>
</template>

<script>
  import axios from 'axios'
  import RecommendationListHorizonal from './RecommendationListHorizonal'
  export default {
    name: "RecommendationList",
    components: { RecommendationListHorizonal },
    data() {
      return {
        res: [],
        index: [23, 25, 32, 24, 26, 22]
      }
    },
    created() {
      let _this = this;
      this.index = this.index.map((value) => {
        return axios.get('http://localhost:3000/top/list?idx='+ value);
      });
      axios.all(this.index)
        .then((res) => {
          _this.res = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })

    }
  }
</script>

<style scoped>
.recommendation-list{
  width: 100vw;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>
