import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router/router.js';
import './router/main.js';

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;




createApp(App).use(router).mount('#app')