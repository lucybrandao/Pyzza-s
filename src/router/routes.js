
const routes = [
  {
    path: '/',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'home' }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue'), name: 'login' },
      { path: 'cadastro', component: () => import('pages/Cadastro.vue'), name: 'cadastro' }
    ]
  },
  {
    path: '/cardapio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cardapio.vue'), name: 'cardapio' },
      { path: 'pizzas', component: () => import('pages/Pizzas.vue'), name: 'cardapio-pizza-list' },
      { path: 'sobremesas', component: () => import('pages/Sobremesas.vue'), name: 'cardapio-sobremesa-list' },
      { path: 'bebidas', component: () => import('pages/Bebidas.vue'), name: 'cardapio-bebida-list' }
    ]
  },
  {
    path: '/carrinho',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Carrinho.vue'), name: 'carrinho' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
