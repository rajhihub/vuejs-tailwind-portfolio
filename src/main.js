import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router/router.js';
import './data/app.js';
import './style/home.css';


import jQuery from "jquery";
const $ = jQuery;
window.$ = $;



createApp(App).use(router).mount('#app')