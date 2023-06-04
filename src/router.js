import { createRouter, createWebHistory } from 'vue-router';

import TheRegistration from './components/TheRegistration.vue';
import CreatePosts from './components/CreatePosts.vue';
import PostsList from './components/PostsList.vue';
import EditPosts from './components/EditPosts.vue';
import TheHome from './pages/TheHome.vue';
import AdminPage from './pages/AdminLogin.vue';

const routes = [
  {
    path: '/',
    component: TheHome
  },
  {
    path: '/Admin',
    component: AdminPage
  },
  {
    path: '/registration',
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
