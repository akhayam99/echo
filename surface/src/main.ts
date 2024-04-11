import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {library} from "@fortawesome/fontawesome-svg-core";
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faArrowsRotate)

app.use(router)

app.mount('#app')
