import FooPages from './pages/FooPages';
import BarPages from './pages/BarPages';
import HomePage from './pages/HomePage';
import ApartmentPage from './pages/ApartmentPage';
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/foo',
    component: FooPages
  },
  {
    path: '/bar',
    component: BarPages
  },
  {
    path: '/',
    component: HomePage,
    name: 'homepages'
  },
  {
    path: '/apartment',
    component: ApartmentPage,
    name: 'apartment'
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router