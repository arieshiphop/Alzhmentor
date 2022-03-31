import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'


createApp(App).use(VueChartkick).use(router).mount('#app')
