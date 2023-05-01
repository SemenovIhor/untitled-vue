<template>
  <div id="app">
    <div class="content">
      <HeaderApp />
      <router-view></router-view>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",
  components: {
    FooterApp,
    HeaderApp,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
