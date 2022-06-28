import router from "./router/BaseRouter.js"; // 路由配置
import { createApp } from 'vue'
import App from './App.vue'

const page = createApp(App)
page.use(router)
page.mount('#app')