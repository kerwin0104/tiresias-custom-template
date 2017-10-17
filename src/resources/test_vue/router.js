import Vue from 'vue'
import Router from 'vue-router'
import HelloTiresiasVue from './components/HelloTiresiasVue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloTiresiasVue',
      component: HelloTiresiasVue
    }
  ]
})
