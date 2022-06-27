import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),      //格式一定要写对喽不然没有代码提示或者报错
      vue: 'vue/dist/vue.esm-bundler.js',
    }
  },
  plugins: [vue()],
  base: "/", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: "dist",
    // 9月更新
    assetsDir: "assets", //指定静态资源存放路径
    // assetsPublicPath:'',
    sourcemap: true, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: '3000',
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567',
      // 选项写法
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
