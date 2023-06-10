<template>
  <navbar class="header">
    <div class="name">
      <a href="">{{ userName }}</a>
    </div>
    <div
      class="links"
      :class="{ show: showMenuList }"
    >
      <button
        type="button"
        class="close"
        @click="showLinks"
      >
        Close
      </button>
      <a href="#">Blog</a>
      <a href="#">Portfolio</a>
      <a href="#">About</a>
    </div>
    <div class="logo">
      <a
        aria-label="img"
        href="#"
      >
        <img
          src="../assets/icons/logo.svg"
          alt="logo"
        >
      </a>
    </div>
    <div
      @keydown="escape"
      @click="showLinks"
      class="burger"
    >
      <img
        class="logoMonster"
        src="../assets/icons/burger-icon.svg"
        alt="burger"
      >
    </div>
  </navbar>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Trushik Semyon',
      showMenuList: false
    };
  },

  methods: {
    showLinks() {
      this.showMenuList = !this.showMenuList;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../style/abstracts/mixins";
@import "../style/abstracts/variables";
.header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 3rem;
  .name {
    width: 100%;
  }
  a {
    color: var(--all-text-white);
    text-decoration: none;
    font-size:3rem;
    display: block;
  }
  @include for-desktop {
    margin: 0 auto;
    max-width: 80rem;
    padding: 1rem 2rem;
    justify-content: space-between;
  }
}
.burger {
  align-self: center;
  @include for-desktop {
    display: none;
  }
  .logoMonster{
    width: 3rem;
    height: 3rem;
  }
}
.logo, .links {
  display: none;
}
.logo {
  @include for-desktop {
    display: block;
  }
}
.close {
  color: var(--all-text-white);
  top: 1rem;
  right: 1rem;
  position: absolute;
  border: none;
  background: var(--background-opacity);
  @include for-desktop {
    display: none;
  }
}
.links {
  text-align: center;
  display: none;
  top: 0;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  flex-direction: column;
  z-index: 99;
  background: var(--background-main-color);
  @include for-desktop {
    left: 0;
    transform: none;
    display: flex;
    margin-left: 2rem;
    position: relative;
    flex-direction: row;
    justify-content: center;
  }
  a {
    display: block;
    margin: 2rem auto;
    border-bottom: 0.1rem solid var(--border-color);
    @include for-desktop {
      border-bottom: none;
      text-align: center;
      margin: 0 1rem;
      font-size: 2.5rem;
    }
  }
}
.links a:hover {
  text-decoration: underline;
  color: var(--link-color);
}
.show {
  display: flex;
}
.name, .links, .logo {
  font-size: 2rem;
  align-self: center;
}
</style>
