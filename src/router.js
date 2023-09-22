import { createRouter, createWebHistory } from 'vue-router';

import StatisticCore from './pages/StatisticCore.vue';


const routes = [
  {
    path: '/',
    component: StatisticCore
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
