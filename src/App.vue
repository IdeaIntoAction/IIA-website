<script>
import HeaderComponent from './component/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<template>
  <div class="main_wrapper">
    <header-component />
    <router-view />
  </div>
</template>

<style scoped lang="scss"></style>
