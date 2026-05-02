import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue'; // Crea una vista simple de bienvenida
import ProductList from '../views/Products/List.vue';
import ProductForm from '../views/Products/Form.vue';

const routes = [
  { path: '/', component: () => import('../views/Dashboard.vue') },
  { path: '/products', component: () => import('../views/Products/List.vue') },
  { path: '/products/create', component: () => import('../views/Products/Form.vue') },
  { path: '/products/edit/:id', component: () => import('../views/Products/Form.vue') },
];  

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;