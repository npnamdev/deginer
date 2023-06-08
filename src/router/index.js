import { createRouter, createWebHistory } from 'vue-router'

import ManageHome from '../components/HomePage/ManageHome.vue';
import Home from '../components/HomePage/Home.vue';
import Product from '../components/HomePage/Product.vue';
import Cart from '../components/HomePage/Cart.vue';


const routes = [
    {
        path: '/',
        component: ManageHome,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: '/product',
                component: Product,
            },
            {
                path: '/cart',
                component: Cart,
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;