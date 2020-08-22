import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '@/assets/css/index.scss';

createApp(App).use(store).mount('#app');
