import { createApp } from 'vue'
import App from './App.vue'

import primeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);

app.use(primeVue);
app.component("Button", Button);
app.component("InputText", InputText);

app.mount('#app');
