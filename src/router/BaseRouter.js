import { createRouter, createWebHashHistory } from 'vue-router'
import meeting from "./RouterMeeting.js";
import HelloWorld from "@/components/HelloWorld.vue";
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: "/aaa",
    // redirect: "/approve/list", //重定向列表页
    meta: {
      title: "",
    },
    component: HelloWorld,
    children: [
      ...meeting,
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: HelloWorld },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: HelloWorld },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory('/front/'),
  routes, // `routes: routes` 的缩写
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href

export default router;
