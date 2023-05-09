<template>
  <header class="header">
    <ContainerList>
      <router-link to="/">
        <LogoHeader />
      </router-link>
    </ContainerList>
  </header>
</template>

<script>
import LogoHeader from "./LogoHeader.vue";
import ContainerList from "./shared/ContainerList.vue";

export default {
  name: "HeaderApp",
  components: { ContainerList, LogoHeader },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
}
</style>
