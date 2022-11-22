import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/vue-tipppy',
    name: 'VueTippy',
    component: () => import('../components/modules/templates/VueTippy.vue'),
  },
  {
    path: '/el-popover',
    name: 'ElPopover',
    component: () => import('../components/modules/templates/ElPopover.vue'),
  },
  {
    path: '/setInterval',
    name: 'SetInterval',
    component: () => import('../components/modules/templates/SetInterval.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
