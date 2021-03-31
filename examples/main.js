import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import '../packages/iconfont/iconfont.css'
import wphUi from "./../packages"
app.use(wphUi)
app.config.globalProperties.Message = wphUi.Message;
app.mount('#app')
