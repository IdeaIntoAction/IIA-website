<template>
  <div>
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
