import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/generator/k8s/deployment',
    component: () => import('../views/generator/k8s/deployment.vue')
  },
  {
    path: '/generator/k8s/service',
    component: () => import('../views/generator/k8s/service.vue')
  },
  {
    path: '/generator/k8s/dd_values',
    component: () => import('../views/generator/k8s/dd_values.vue')
  },
  {
    path: '/generator/k8s/helm',
    component: () => import('../views/generator/k8s/helm.vue')
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router
