import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "@/utils/menu.js"
import router from "@/router/index.js"

import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/base.css";

createApp(App).use(router).mount('#app')