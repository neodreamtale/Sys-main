import router from "@/router/BaseRouter"; // 路由配置

import { createApp } from 'vue'
import App from './App.vue'
// import MeetingStatus from '@/views/meeting/MeetingStatus.vue'
// debugger

const page = createApp({ App })
page.use(router)
page.mount('#app')

// createApp(App).mount('#app')
