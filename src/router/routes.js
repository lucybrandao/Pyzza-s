
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
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
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminDashboard.vue'), name: 'admin-dashboard' }
    ]
  },
  {
    path: '/admin/pedidos',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PedidoList.vue'), name: 'pedido-list' },
      { path: 'detalhe', component: () => import('pages/PedidoDetail.vue'), name: 'pedido-detail' }
    ]
  },
  {
    path: '/admin/usuarios',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UsuarioList.vue'), name: 'usuario-list' },
      { path: 'form', component: () => import('pages/UsuarioForm.vue'), name: 'usuario-form' },
      { path: 'detalhe', component: () => import('pages/UsuarioDetail.vue'), name: 'usuario-detail' }
    ]
  },
  {
    path: '/admin/pizzas',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PizzaList.vue'), name: 'pizza-list' },
      { path: 'form', component: () => import('pages/PizzaForm.vue'), name: 'pizza-form' },
      { path: 'detalhe', component: () => import('pages/PizzaDetail.vue'), name: 'pizza-detail' }
    ]
  },
  {
    path: '/admin/sobremesas',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SobremesaList.vue'), name: 'sobremesa-list' },
      { path: 'form', component: () => import('pages/SobremesaForm.vue'), name: 'sobremesa-form' },
      { path: 'detalhe', component: () => import('pages/SobremesaDetail.vue'), name: 'sobremesa-detail' }
    ]
  },
  {
    path: '/admin/bebidas',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BebidaList.vue'), name: 'bebida-list' },
      { path: 'form', component: () => import('pages/BebidaForm.vue'), name: 'bebida-form' },
      { path: 'detalhe', component: () => import('pages/BebidaDetail.vue'), name: 'bebida-detail' }
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
