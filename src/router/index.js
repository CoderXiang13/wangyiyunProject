import Vue from 'vue'
import Router from 'vue-router'
import RankingTop from '../components/RankingTop'
import DetailsSongList from '../components/DetailsSongList'

const Video = () => import('../components/views/Video')
const My_profile = () => import('../components/views/My_profile')
const Friend = () => import('../components/views/Friend')
const Account = () => import('../components/views/Account')

// 解决反复点击产生的bug
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/RankingTop',
  },
  {
    path: '/RankingTop',
    name: 'RankingTop',
    component: RankingTop,
  },
  {
    path: '/DetailsSongList',
    name: 'DetailsSongList',
    component: DetailsSongList
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/my_profile',
    name: 'my_profile',
    component: My_profile
  },
  {
    path: '/friend',
    name: 'friend',
    component: Friend
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
]
const router = new Router({ routes })
export default router

