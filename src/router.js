import HomePage from './pages/HomePage';
import ApartmentPage from './pages/ApartmentPage';
import ErrorPage from './pages/ErrorPage';
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'homepages'
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment'
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
    name: 'error-page',
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router