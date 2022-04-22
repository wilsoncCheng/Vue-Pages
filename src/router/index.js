/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Frontend/HomeView.vue'

const routes = [{
        path: '/',
        component: () =>
            import ('../views/Frontend/FrontView.vue'),
        children: [{
                path: '',
                name: 'home',
                component: HomeView
            },
            {
                path: 'products',
                component: () =>
                    import ('../views/Frontend/ProductsView.vue')
            },
            {
                path: 'product/:id',
                component: () =>
                    import ('../views/Frontend/ProductView.vue')
            },
            {
                path: 'cart',
                component: () =>
                    import ('../views/Frontend/CartView.vue')
            },
            {
                path: 'payment/:id',
                component: () =>
                    import ('../views/Frontend/PaymentsView.vue')
            },
            {
                path: 'me',
                component: () =>
                    import ('../views/Frontend/AboutMe.vue')
            },
        ]
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Frontend/LoginView.vue')
    },
    {
        path: '/admin',
        component: () =>
            import ('../views/DashBoard/DashboardView.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('../views/DashBoard/AdminProducts.vue')
            },
            {
                path: 'order',
                component: () =>
                    import ('../views/DashBoard/AdminOrder.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active fw-bolder'
})

export default router