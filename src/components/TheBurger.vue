<template>
  <div
    class="burger"
    @click=" $emit('toggleSwitch')"
    @keydown="bar"
  >
    <span />
    <span />
    <span />
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
      this.switchToggle = !this.switchToggle;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/abstracts/mixins";
.burger {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 4rem;
    height: 4rem;
    @include for-desktop{
      display: none;
    }
  }

.burger span {
    width: 100%;
    border:  0.01rem solid #fff;
}
</style>
