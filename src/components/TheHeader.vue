<template>
  <navbar class="header">
    <div class="name">
      <a href="">{{ userName }}</a>
    </div>
    <div class="links">
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
    <burger />
  </navbar>
</template>

<script>
import burger from './TheBurger.vue';

export default {
  components: {
    burger
  },
  data() {
    return {
      userName: 'Trushik Semyon',
      switchToggle: false
    };
  },

  methods: {
    openLinks(switchToggle) {
      this.switchToggle = !switchToggle;
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
  a {
    color: var(--all-text-white);
    text-decoration: none;
    font-size:3rem;
    text-align: center;
    display: block;
  }
  @include for-desktop {
    margin: 0 auto;
    max-width: 80rem;
    padding: 1rem 2rem;
    justify-content: space-between;
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
.links {
  position: relative;
  background:var(--background-main-color);
  position: absolute;
  width: 100%;
  top: 0;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  @include for-desktop {
    position: relative;
    justify-content: space-between;
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
.links a {
  margin: 0 auto;
  width: 90%;
  border-bottom: 0.1rem solid;
  @include for-desktop {
    font-size: 1.5rem;
    display: block;
    border-bottom: 0;
    margin: 0 0.5rem;
  }
}
.links a:hover {
      text-decoration: underline;
      color: var(--link-color);
    }
.show {
  display: flex;
}
.close {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-self: center;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  @include for-desktop {
    display: none;
  }
}
.close  span{
  border: 0.1rem solid #fff;
  width: 100%;
}
.close span:first-child {
  transform: translateY(100%)  rotate(45deg);
}
.close span:last-child {
  transform:  translateY(50%) rotate(-45deg);
}
  .name, .links {
    font-size: 2rem;
    align-self: center;
  }
</style>
