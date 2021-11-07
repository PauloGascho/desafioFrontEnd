import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '@/views/Principal.vue'
import Produtos from '@/views/Produtos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Principal
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos
  },
]

const router = new VueRouter({
  routes
})

export default router
