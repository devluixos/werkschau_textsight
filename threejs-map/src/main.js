// main.js
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css';           // core css
import 'primeicons/primeicons.css';                     // icons
import 'primeflex/primeflex.css';                       // PrimeFlex

const app = createApp(App);
app.use(PrimeVue);
app.component('PrimeDialog', Dialog);
app.mount('#app');
