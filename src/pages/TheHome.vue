<template>
  <div class="mainContainer">
    <div class="main-img">
      <img
        class="crazyMonster"
        src="../assets/icons/Crazy-monster.svg"
        alt="#"
      >
    </div>
    <div class="content">
      <div class="title">
        Learn development with great articles.
      </div>
      <div class="subtitle">
        Find the latest of my writing here.
      </div>
      <searchInput class="homeBtn" />
    </div>
  </div>
  <!-- <div>
    <div class="main-img">
      {{ }}
    </div>
  </div> -->
</template>
<script>
import searchInput from '../components/inputs/SearchInput.vue';

export default {
  components: {
    searchInput
  },
  data() {}
};
</script>
<style scoped lang="scss">
@import "../style/variables.scss";
@import "../style/abstraction/home.scss";
.mainContainer {
  display: flex;
  flex-direction: column;
  @include for-desktop {
    padding: 0 1rem;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 70rem;
    margin: 0 auto;
  }
  .main-img{
    .crazyMonster {
      display: block;
      margin: 0 auto;
      width: 70%;
    }
  }
  .content {
    @include for-desktop {
      margin-top: 6rem;
      max-width: 50%;
    }
    .title {
      width: 80%;
      font-size: 3rem;
      line-height: 3rem;
      color: var(--title-color);
      display: block;
      margin: 0 auto;
      @include for-desktop {
        width: 100%;
      }
    }
    .subtitle {
      display: block;
      margin: 1rem auto 0;
      width: 80%;
      font-size: 2.5rem;
      line-height: 3rem;
      color: var(--subtitle-color);
       @include for-desktop {
        width: 100%;
      }
    }
    .homeBtn {
      margin-top: 2.5rem;
    }
  }
}

</style>
