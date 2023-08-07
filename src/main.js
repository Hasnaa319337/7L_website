import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


import i18n from "./i18n"; 


//axios
import axios from "axios";
import VueAxios from "vue-axios";
import Cookies from "js-cookie";

axios.defaults.headers = {
  Accept: "application/json",
  "Accept-Language": Cookies.get('locale'),
};



const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(VueAxios, axios);
app.use(i18n)
app.use(vuetify)
app.use(router)
app.mount('#app')
