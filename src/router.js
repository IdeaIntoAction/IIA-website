import { createRouter, createWebHistory } from 'vue-router';

import StatisticCore from './pages/StatisticCore.vue';
import StatisticSite from './pages/StatisticSite.vue';

const routes = [
  {
    path: '',
    component: StatisticCore,
  },
  {
    path: '/parserInfo/:id',
    name: 'parserInfo',
    component: StatisticSite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
