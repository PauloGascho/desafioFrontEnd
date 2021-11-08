import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '@/views/Principal.vue'
import Produtos from '@/views/Produtos.vue'
import Movimentacoes from '@/views/Movimentacoes.vue'
import ConsultaProduto from '@/views/ConsultaProduto.vue'
import LucroProduto from '@/views/LucroProduto.vue'

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
  {
    path: '/movimentacao',
    name: 'Movimentacoes',
    component: Movimentacoes
  },
  {
    path: '/consulta-produto',
    name: 'ConsultaProduto',
    component: ConsultaProduto
  },
  {
    path: '/lucro-produto',
    name: 'LucroProduto',
    component: LucroProduto
  },
]

const router = new VueRouter({
  routes
})

export default router
