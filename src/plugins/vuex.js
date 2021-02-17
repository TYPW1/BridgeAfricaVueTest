import Vue from 'vue'
import Vuex from 'vuex'
import Products from "@/data/products";
import {UserList} from "@/data/users";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: UserList,
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

        createUser(state, user) {
            state.isLoggedIn = true
            user.id = UserList[UserList.length-1].id +1
            state.users = [...state.users, user]
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("users", JSON.stringify(state.users))
        },

        loadUser(state){
            const user = localStorage.getItem("user")
            const users = localStorage.getItem("users")
            if (user){
                state.user = JSON.parse(user)
                state.isLoggedIn = true
            }

            if (users){
                state.users = JSON.parse(users)
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

        deleteProduct(state, id){
            const product = [...state.products]
            const index = state.products.findIndex(x => x.id === id)
            if (index>-1) {
                product.splice(index, 1)
                state.products = product
                localStorage.setItem("product", JSON.stringify(state.products))
            }
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