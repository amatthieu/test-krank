import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ListEvents from '@/components/ListEvents'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListEvents',
      component: ListEvents
    }
  ]
})
