<template>
  <div class="container">
    <DetailsHeader/>
    <DetailsPoster/>
    <DetailsSongLists/>
  </div>
</template>

<script>
  import DetailsHeader from './detailsCons/App-Header'
  import DetailsPoster from './detailsCons/App-Poster'
  import DetailsSongLists from './detailsCons/App-SongList'
  export default {
    name: "DetailsSongList",
    components: {
      DetailsHeader,
      DetailsPoster,
      DetailsSongLists
    }
  }
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #1f0404;
}
</style>
