import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Auth Pages
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'

// Auth Pages
import ProductPage from '@/pages/products/index'
import ProductDetailPage from '@/pages/products/detail'
import ProductNewPage from '@/pages/products/new'


const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [
        { path: '/', redirect:'/products' },
        { path: '/login', component: LoginPage},
        { path: '/register', component: RegisterPage},
        { path: '/products', component: ProductPage},
        { path: '/products:[id]', component: ProductDetailPage},
        { path: '/products/add', component: ProductNewPage},
    ]
})

export default router