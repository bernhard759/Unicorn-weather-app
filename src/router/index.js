import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import { getCurrentUser } from 'vuefire';

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/unicorn-forecast',
    component: () => import('../components/UnicornForecast.vue'),
    beforeEnter: async (to, from, next) => {
      const user = await getCurrentUser();
      if (user) {
        next();
      } else {
        next('/login');
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
