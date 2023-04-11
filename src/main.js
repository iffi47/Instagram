import { createApp } from 'vue'
import App from './App.vue'
// import vue from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import { dateFns } from '@date-fns'
import { loadFonts } from './plugins/webfontloader'
import '../src/assets/main.css'
loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
