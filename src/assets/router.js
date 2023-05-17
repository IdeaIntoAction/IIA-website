import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue'
import EmptyAccount from '../components/Empty-account.vue';

const routes = [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/account',
      component: EmptyAccount
    },

  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
