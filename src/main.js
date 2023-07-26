
import { createApp } from 'vue'
import router from './router';
import store from './store'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue";
const app = createApp(App)

app.component('base-button', BaseButton);

app.use(router);
app.use(store);
app.mount('#app');