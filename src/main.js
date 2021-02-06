import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import './assets/scss/main.scss';

createApp(App)
  .use(router)
  .mount('#app');
