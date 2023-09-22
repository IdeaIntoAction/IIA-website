<script>
import Header from './component/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<template>
  <div class="main_wrapper">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
</style>
