import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import Auth from './auth';
import Group from './group';
import Sns from './sns';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    ...Auth,
    ...Group,
    ...Sns
  ],
});

export default router;
