import HomePage from './pages/HomePage';
import ApartmentPage from './pages/ApartmentPage';
import ErrorPage from './pages/ErrorPage';
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/untitled-vue/',
    component: HomePage,
    name: 'homepages'
  },
  {
    path: '/untitled-vue/apartments/:id',
    component: ApartmentPage,
    name: 'apartment'
  },
  {
    path: "/untitled-vue/:pathMatch(.*)",
    component: ErrorPage,
    name: 'error-page',
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router