import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './locales/i18n';
import VClickOutside from './directive/VClickOutside';
const app = createApp(App);

app.use(i18n);
app.directive("click-outside", VClickOutside);
app.mount('#app');