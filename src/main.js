import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import router from './router/index';
import 'boxicons';
import store from './store.js';
import './assets/css/style.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
