import { createRouter, createWebHistory } from 'vue-router';

import StatisticCore from './pages/StatisticCore.vue';
import StatisticSite from './pages/StatisticSite.vue';


const routes = [
  {
    path: '/',
    component: StatisticCore
  },
  // {
  //   path: '', name your clicked site and id {name/id}
  //   component: StatisticSite
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
