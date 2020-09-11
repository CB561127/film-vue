import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '../components/FirstPage'
// import filmMessage from '../components/FilmMessage'
// import review from '../components/Review'
import classify from '../components/Classify'
// import rankList from '../components/RankList'
import review from  "../components/Comments"
import login from '../components/Login'
import search from '../components/Search'
import register from '../components/Register'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/register',
      name: 'register',
      component:register,
      meta: {
        requireAuth: true
      }
    },
    {
      path:'/search',
      name:'search',
      component:search,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/index',
      name: 'firstPage',
      component: firstPage,
    },
    {
      path: '/review',
      name: 'review',
      component:review,
      meta: {
        requireAuth: true
      }
    },
    // {
    //   path: '/list',
    //   name: 'list',
    //   component:rankList,
    //   meta: {
    //     requireAuth: true
    //   }
    // },
    {
      path: '/classify',
      name: 'classify',
      component:classify,
      meta: {
        requireAuth: true
      }
    },
    // {
    //   path:'/message',
    //   name:'message',
    //   component:filmMessage,
    // }
  ]
})
