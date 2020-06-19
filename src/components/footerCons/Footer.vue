<template>
  <div class="footer-bar">
    <!--<FooterItem class="footer-bar_item" v-for="(item,index) in lists"
                                  :key="index"
                                  @click="itemClick" :path="item.path">
      <img v-if="!isActive" :src="item.img" alt>
      <img v-else :src="item.srcActive" alt>
      <div class="footer-bar_item_text">{{item.text}}</div>
    </FooterItem>-->
    <FooterItem path="/RankingTop">
      <img slot="item-icon" src="../../assets/image/find.svg" alt>
      <img slot="item-icon_active" src="../../assets/image/find_active.svg" alt>
      <div slot="item-text" class="footer-bar_item_text">发现</div>
    </FooterItem>
    <FooterItem  path="/video">
      <img slot="item-icon" src="../../assets/image/video.svg" alt>
      <img slot="item-icon_active" src="../../assets/image/video_active.svg" alt>
      <div slot="item-text" class="footer-bar_item_text">视频</div>
    </FooterItem>
    <FooterItem path="/my_profile">
      <img slot="item-icon" src="../../assets/image/my_profile.svg" alt>
      <img slot="item-icon_active" src="../../assets/image/my_profile_active.svg" alt>
      <div slot="item-text" class="footer-bar_item_text">我的</div>
    </FooterItem>
    <FooterItem path="/friend">
      <img slot="item-icon" src="../../assets/image/friend.svg" alt>
      <img slot="item-icon_active" src="../../assets/image/friend_active.svg" alt>
      <div slot="item-text" class="footer-bar_item_text">朋友</div>
    </FooterItem>
    <FooterItem path="/account">
      <img slot="item-icon" src="../../assets/image/account.svg" alt>
      <img slot="item-icon_active" src="../../assets/image/account_active.svg" alt>
      <div slot="item-text" class="footer-bar_item_text">账户</div>
    </FooterItem>
    <span class="count">5</span>
  </div>
</template>

<script>
  import FooterItem from './footerItem'
  export default {
    name: "Footer",
    components: {
      FooterItem
    },
    data() {
      return {
       /* lists: [
          {
            path: '/find',
            img: require('../../assets/image/find.svg'),
            srcActive: require('../../assets/image/find_active.svg'),
            text: '发现'},
          {
            path: '/video',
            img: require('../../assets/image/video.svg'),
            srcActive: require('../../assets/image/video_active.svg'),
            text: '视频'},
          {
            path: '/my_profile',
            img: require('../../assets/image/my_profile.svg'),
            srcActive: require('../../assets/image/my_profile_active.svg'),
            text: '我的'},
          {
            path: '/friend',
            img: require('../../assets/image/friend.svg'),
            srcActive: require('../../assets/image/friend_active.svg'),
            text: '朋友'},
          {
            path: '/account',
            img: require('../../assets/image/account.svg'),
            srcActive: require('../../assets/image/account_active.svg'),
            text: '账户'}
        ]*/
      }
    },

  }
</script>

<style scoped>
.footer-bar{
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  border-top: 1px solid #d3d3d3;
  display: flex;
}
.footer-bar_item_text{
  font-size: 33px;
  /*color: #959595;*/
}
.count{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #c14d34;
  color: white;
  line-height: 55px;
  text-align: center;
  position: relative;
  right: 115px;
  top: 5px;
  font-size: 28px;
}
</style>
