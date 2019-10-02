import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Fv from '@/components/Fv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fv',
      component: Fv
    }
  ]
})
