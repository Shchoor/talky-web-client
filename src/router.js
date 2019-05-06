import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rules from './views/Rules.vue'
import About from './views/About.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        component: Home,
        meta: {
          breadCrumb: 'Home'
        }
      },
      {
        path: '/rules',
        component: Rules,
        meta: {
          breadCrumb: 'Rules'
        }
      },
      {
        path: '/login',
        component: Login,
        meta: {
          breadCrumb: 'Login'
        }
      },
      {
        path: '/register',
        component: Register,
        meta: {
          breadCrumb: 'Register'
        }
      },
      // {
      //   path: '/category/',
      //   component: HelloEarth,
      //   meta: {
      //     breadCrumb: 'Earth'
      //   },
      //   children: [
      //     {
      //       path: 'moon',
      //       component: HelloMoon,
      //       meta: {
      //         breadCrumb: 'Moon'
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '/saturn',
      //   component: HelloSaturn,
      //   meta: {
      //     breadCrumb: 'Saturn'
      //   },
      //   children: [
      //     {
      //       path: ':moon',
      //       component: HelloSaturnMoon,
      //       props: true
      //     }
      //   ]
      // },
      {
        path: '*',
        redirect: '/'
      }
    ]
})
