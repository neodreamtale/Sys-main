import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import meeting from "./RouterMeeting.js";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  ...meeting,
  { path: '/:pathMatch(.*)*', name: 'not-found', component: HelloWorld },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: HelloWorld },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href

export default router;
