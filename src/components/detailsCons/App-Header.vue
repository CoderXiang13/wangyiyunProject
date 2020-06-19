<template>
    <div class="title">
      <div class="title-wrap">
        <img src="../../assets/back.png" alt @click="jumpRanking">
        <span>{{title}}</span>
      </div>
    </div>
</template>

<script>
  import eventBus from '../../bus/index'
  export default {
    name: "App-Header",
    data() {
      return {
        title: '',
        navBarFixed: false
      }
    },
    mounted() {
      var self = this;
      eventBus.$on('headerTitle', (data) => {
        self.title = data;
      });
    },
    methods: {
      jumpRanking() {
        this.$router.push('/RankingTop')
      }
    }
  }
</script>

<style scoped>
.title {
  width: 100vw;
  background: rgba(0, 0, 0, 1);
  /*opacity: .9;*/
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;
}
.title-wrap {
  width: 90%;
  height: 148px;
  margin: auto;
  line-height:  148px;
  font-size: 0;
}
img{
  width: 54px;
  height: 54px;
  margin-top: -27px;
  vertical-align: middle;
}
span{
  width: 90%;
  text-align: center;
  display: inline-block;
  color: #ffffff;
  font-size: 53px;
  font-weight: 600;
}
</style>
