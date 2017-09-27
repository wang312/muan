/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active', // 这是链接激活时的class
})

import Index from '../pages/index.vue'
import About from '../pages/about.vue'
import Stars from '../pages/stars.vue'
import Case from '../pages/case.vue'
import News from '../pages/news.vue'
import Concat from '../pages/concat.vue'

export default new VueRouter({
  base: __dirname,
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/stars',
      component: Stars
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/concat',
      component: Concat
    },
    {
      path: '*',
      redirect: '/index',

    }
  ]
})
