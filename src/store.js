
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    plugins: [
        createPersistedState(
            {
                key: 'my-app',
                paths: ['cartProducts'],
                storage: window.sessionStorage
            },
        )
    ],
    state() {
        return {
            products: [
                { id: 1, name: "Iphone 12 Pro Max", price: 10, quantity: 1 },
                { id: 2, name: "Macbook Pro 2020", price: 20, quantity: 1 },
                { id: 3, name: "SamSung galaxy s1", price: 30, quantity: 1 },
                { id: 4, name: "Ipad Air 2022", price: 80, quantity: 1 },
            ],
            cartProducts: [],
            selectedProducts: [],
        }
    },
    mutations: {
        addToCart(state, product) {
            const cartProducts = state.cartProducts.find((p) => p.id === product.id);
            if (cartProducts) {
                cartProducts.quantity++;
            } else {
                state.cartProducts.push({ ...product, quantity: 1 });
            }

            const selectedProducts = state.selectedProducts.find((p) => p.id === product.id);
            if (!selectedProducts) {
                state.selectedProducts.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(state, product) {
            const index = state.cartProducts.findIndex((p) => p.id === product.id);
            if (index !== -1) {
                state.cartProducts.splice(index, 1);
            }

            const index2 = state.selectedProducts.findIndex((p) => p.id === product.id);
            if (index2 !== -1) {
                state.selectedProducts.splice(index2, 1);
            }
        },
        deleteCart(state) {
            state.cartProducts = [];
            state.selectedProducts = [];
        },
        increaseQuantity(state, product) {
            product.quantity++;
        },
        decreaseQuantity(state, product) {
            if (product.quantity > 1) {
                product.quantity--;
            }
        },
    },
    getters: {
        total(state) {
            return state.selectedProducts.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0);
        },
    },
})


export default store;
