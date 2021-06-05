import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import './assets/scss/main.scss';
import AppIcon from './components/icons/AppIcon.vue';

createApp(App)
  .component('app-icon', AppIcon)
  .use(router)
  .mount('#app');
