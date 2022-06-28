<script >
</script>

<template>
  <!-- <router-view class="main-land">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view> -->
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <router-view class="main-land"></router-view>
</template>

<style>
body {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}

.main-land {
  width: 100%;
  height: 100%;
}
</style>
