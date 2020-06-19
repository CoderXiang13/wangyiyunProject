<template>
  <div id="app">
    <router-view/>
    <coLoading :visible="loadingIsShow"></coLoading>
    <Footer/>
  </div>
</template>

<script>
  import bus from './bus/index'
  import Footer from './components/footerCons/Footer'
export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      loadingIsShow: false,
    }
  },
  created() {
    let self = this;
    bus.$on('changeLoadingStatus', function (status) {
      self.loadingIsShow = status;
    })
  }
}
</script>

<style>
*{margin: 0; padding: 0;}
#app {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
