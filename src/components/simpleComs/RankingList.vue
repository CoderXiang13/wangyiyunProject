<template>
    <div class="ranking-list">
      <RankingListHorizonal v-for="(item, index) in res"
                            :key="index"
                            :tracks="item.data.playlist.tracks.slice(0,3)"
                            :cover-img-url="item.data.playlist.coverImgUrl">
      </RankingListHorizonal>
    </div>
</template>

<script>
  // 第三方
  import http from '../../http/index'

  // 私有组件
  import RankingListHorizonal from './RankingListHorizonal'
  import coLoading from '../simpleComs/coLoading'

  export default {
    name: "RankingList",
    components: {
      RankingListHorizonal,
      coLoading
    },
    data() {
      return {
        res: [],
        index: [3,0,1,2,4],
      }
    },
    created() {
      let self = this;
      this.index = this.index.map((value) => {
        return http.get('http://localhost:3000/top/list?idx='+ value)
      });
      // console.log(this.index);  // 返回promise
      http.all(this.index)
        .then(function (res) {
          // console.log(res.data.playList.coverImgUrl);
          // console.log(res.data.playList.tracks.splice(0,3)); // 前三项
          // self.coverImgUrl = res.data.playList.coverImgUrl;
          // self.tracks = res.data.playList.tracks.splice(0,3)
          self.res = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    },
  }
</script>

<style scoped>
.ranking-list{
  width: 100vw;
  color: white;
  margin-top: 18px;
}
</style>
