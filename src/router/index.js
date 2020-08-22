import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '../components/FirstPage'
import filmMessage from '../components/FilmMessage'
import review from '../components/Review'
import classify from '../components/Classify'
import rankList from '../components/RankList'
import login from '../components/Login'
import search from '../components/Search'
Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/login',
      name: 'login',
      component:login,
      meta: {
        requireAuth: true
      }
    },
    {
      path:'/search',
      name:'search',
      component:search,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/',
      name: 'firstPage',
      component: firstPage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/review',
      name: 'review',
      component:review,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component:rankList,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component:classify,
      meta: {
        requireAuth: true
      }
    },
    {
      path:'/message',
      name:'message',
      component:filmMessage,
      meta: {
        requireAuth: true
      }
    }
  ]
})
