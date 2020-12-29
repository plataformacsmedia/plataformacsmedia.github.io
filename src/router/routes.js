
const routes = [
  {
    path: '/',
    component: () => import('layouts/Master.vue'),
    children: [
      {
        path: '',
        component: () => import('layouts/Public.vue'),
        children: [
          { path: '', component: () => import('pages/Index.vue') },
          { path: 'login', component: () => import('pages/Login.vue') }
        ]
      },
      {
        path: '/plataforma',
        component: () => import('layouts/Private.vue'),
        meta: { requiresAuth: true },
        children: [
          {
            name: 'plataforma',
            path: '',
            component: () => import('pages/private/Plataforma.vue'),
            meta: { requiresAuth: true },
          },
          { name: 'curso', path: 'curso/:slug', component: () => import('pages/private/Curso.vue'), meta: { requiresAuth: true } }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
