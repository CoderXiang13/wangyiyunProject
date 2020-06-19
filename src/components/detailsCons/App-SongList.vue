<template>
    <div class="songList" ref="wrapper">
      <ul class="list">
        <li class="list-item" v-for="(item, index) in playList" :key="index">
          <p>{{index+1}}</p>
          <span class="musicName">{{item.name}}</span>
          <span class="musicSinger">{{item.ar[0].name}}-{{item.al.name}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import eventBus from '../../bus/index'
  import axios from 'axios'
  export default {
    name: "App-SongList",
    components: { BScroll },
    data() {
      return {
        /*lists: [
          {songName: '好像爱这个世界啊', songSinger: '华晨宇。好像爱这个世界啊'},
          {songName: 'Light The Light', songSinger: 'RADWIMPS。Light The Light'},
          {songName: 'Fight as ONE', songSinger: '陈奕迅。Fight as ONE'},
          {songName: '你要相信这不是最后一天', songSinger: '华晨宇。你要相信这不是最后一天'},
          {songName: '平凡的天使', songSinger: 'G.E.M.邓紫棋。平凡的天使'},
          {songName: '麻雀', songSinger: '李荣浩。麻雀'},
          {songName: '山河无恙在我胸', songSinger: '蔡徐坤。山河无恙在我胸'},
          {songName: '会好的', songSinger: '张艺兴。会好的'},
          {songName: '好像爱这个世界啊', songSinger: '华晨宇。好像爱这个世界啊'},
          {songName: 'Light The Light', songSinger: 'RADWIMPS。Light The Light'},
          {songName: 'Fight as ONE', songSinger: '陈奕迅。Fight as ONE'},
          {songName: '你要相信这不是最后一天', songSinger: '华晨宇。你要相信这不是最后一天'},
          {songName: '平凡的天使', songSinger: 'G.E.M.邓紫棋。平凡的天使'},
          {songName: '麻雀', songSinger: '李荣浩。麻雀'},
          {songName: '山河无恙在我胸', songSinger: '蔡徐坤。山河无恙在我胸'},
        ]*/
        playList: [],
        navBarFixed: false
      }
    },
    created() {
      let self = this;
      axios.get('http://localhost:3000/playlist/detail?id=474564716')
        .then(res => { // 请求成功后得到数据
          eventBus.$emit('headerTitle',res.data.playlist.name);  // 标题
          eventBus.$emit('posterImg',res.data.playlist.coverImgUrl); // 图片
          self.playList = res.data.playlist.tracks; // 列表数据
        })
        .catch(err => {
          console.log(err);
        })
    },
    mounted() {
      let scroller = new BScroll(this.$refs.wrapper,{
        probeType: 3,   // 加载之后的惯性
      });
      scroller.on('scroll', (dis) => {
        ~~dis.y > 0 ? eventBus.$emit('pulldown',  ~~dis.y) : eventBus.$emit('pullup', ~~dis.y );
        // if (~~dis.y > 0 ) {
        //   eventBus.$emit('pulldown',  ~~dis.y);
        // } else {
        //   eventBus.$emit('pullup', ~~dis.y );
        // }
      });
    },


  }
</script>

<style>
.songList {
  position: absolute;
  top: 879px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f0404;
}
.list {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: auto;
  background-color: #1f0404;
  z-index: 5;
  position: sticky;
  top: 148px;
}
.list-item {
  width: 100%;
  height: 164px;
  padding: 60px 0 0;
  margin-left: 85px;
  list-style: none;
}
span{
  width: 80%;
  display: inline-block;
  font-weight: 600;
}
p{
  display: inline-block;
  width: 51px;
  height: 51px;
  text-align: center;
  line-height: 51px;
  color: #ffcd32;
  font-size: 31px;
}
.musicName{
  height: 60px;
  font-size: 51px;
  color: #ffffff;
}
.musicSinger{
  height: 43px;
  font-size: 36px;
  color: #644f4f;
  margin: 0 auto 0 68px;
}
</style>
