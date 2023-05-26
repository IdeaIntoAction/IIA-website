<template>
  <div
    class="burger"
    @click=" $emit('toggleSwitch')"
    @keydown="bar"
  >
    <span>{{}}</span>
    <span>{{}}</span>
    <span>{{}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchToggle: true
    };
  },
  methods: {
    toggleSwitch() {
      // eslint-disable-next-line no-console
      this.switchToggle = !this.switchToggle;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/abstraction/home.scss";
.burger {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    @include for-desktop{
      display: none;
    }
  }

.burger span {
    width: 100%;
    border:  1px solid #fff;
}
</style>
