/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        component: () =>
            import ('../views/FrontView.vue'),
        children: [{
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: 'products',
                component: () =>
                    import ('../views/ProductsView.vue')
            },
            {
                path: 'product/:id',
                component: () =>
                    import ('../views/ProductView.vue')
            },
            {
                path: 'cart',
                component: () =>
                    import ('../views/CartView.vue')
            },
            {
                path: 'payment/:id',
                component: () =>
                    import ('../views/PaymentsView.vue')
            },
            {
                path: 'me',
                component: () =>
                    import ('../views/AboutMe.vue')
            },
        ]
    },
    {
        path: '/login',
        component: () =>
            import ('../views/LoginView.vue')
    },
    {
        path: '/admin',
        component: () =>
            import ('../views/DashboardView.vue'),
        children: [{
                path: 'products',
                component: () =>
                    import ('../views/AdminProducts.vue')
            },
            {
                path: 'order',
                component: () =>
                    import ('../views/AdminOrder.vue')
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