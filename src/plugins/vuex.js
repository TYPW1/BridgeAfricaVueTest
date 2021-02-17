import Vue from 'vue'
import Vuex from 'vuex'
import Products from "@/data/products";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

        isLoggedIn: false,
        user: null,
        products: Products
    },
    mutations: {
        setUser (state, user) {
            state.isLoggedIn = true
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
        },

        loadUser(state){
            const user = localStorage.getItem("user")
            if (user){
                state.user = JSON.parse(user)
                state.isLoggedIn = true
            }
        },

        logOut (state){
            state.isLoggedIn = false
            state.user = null
            localStorage.removeItem("user")
        },

        loadProducts(state)  {
            const products = localStorage.getItem("product")
            if (products){
                state.products = JSON.parse(products)
            }
        },

        addProduct(state, product){
            product.id = state.products[state.products.length-1].id + 1
            state.products = [...state.products, product]
            localStorage.setItem("product", JSON.stringify(state.products))
        },

        deleteProduct(state, index){
            const product = [...state.products]
            product.splice(index, 1)
            state.products = product
            localStorage.setItem("product", JSON.stringify(state.products))
        },

        updateProduct(state, product){
            const index = state.products.findIndex(x => x.id === product.id)
            if (index>-1){
                const products = [...state.products]
                products.splice(index, 1, product)
                state.products = products
                localStorage.setItem("product", JSON.stringify(state.products))
            }
        }
    }
})

export default store