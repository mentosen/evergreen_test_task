import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/components/MainPage'),
    },
    {
        path:'/user/:id',
        component: () => import('@/components/UserPage')
    }
];

export default new Router({
    mode: 'history', // require service support
    routes: constantRoutes
})