import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "vue": "vue/dist/vue.esm-bundler.js",
    }
  },
  base: "/", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  build: {
    outDir: "dist",
    // 9月更新
    assetsDir: "assets", //指定静态资源存放路径
    // assetsPublicPath:'',
    sourcemap: true, //是否构建source map 文件
  },
  server: {
    host: '127.0.0.1',
    port: '3000',
    proxy: {
      '/foo': 'http://localhost:4567',
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
      // 代理 WebSocket 或 socket
      '/socket.io': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  }
})
