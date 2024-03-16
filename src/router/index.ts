import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { requiresAuth: false },
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const { user } = useUserStore()
  const isAuthenticated = user.value !== null

  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login')
    }

    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router
