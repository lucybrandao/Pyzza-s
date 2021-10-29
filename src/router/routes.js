
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
