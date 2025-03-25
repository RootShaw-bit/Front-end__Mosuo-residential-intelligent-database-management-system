import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import '@/assets/css/index.css';
import axios from 'axios';

const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

// 注册 Pinia
app.use(pinia);

// 全局注册 axios
app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');
