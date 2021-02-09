import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
  },
  {
    name: 'Object',
    path: '/object/:slug',
    component: () =>
      import(/* webpackChunkName: "object" */ '../views/object/Object.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
