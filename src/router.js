import { createRouter, createWebHistory } from 'vue-router';

import TheRegistration from './components/TheRegistration.vue';
import CreatePosts from './components/CreatePosts.vue';
import PostsList from './components/PostsList.vue';
import EditPosts from './components/EditPosts.vue';

const routes = [
  {
    path: '/',
    component: TheRegistration
  },
  {
    path: '/createPosts',
    component: CreatePosts
  },
  {
    path: '/postsList',
    component: PostsList
  },
  {
    path: '/editPosts/:id',
    component: EditPosts
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
