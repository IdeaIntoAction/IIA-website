<template>
  <div class="mainContainer">
    <div class="main-img">
      <img
        class="crazyMonster"
        src="../assets/icons/crazy-monster.svg"
        alt="monster"
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
@import "../style/abstracts/mixins";
@import '../style/abstracts/variables';
.mainContainer {
  display: flex;
  flex-direction: column;
  @include for-desktop {
    padding: 0 1rem;
    flex-direction: row-reverse;
    justify-content: space-between;
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
      color: var(--title-color);
      display: block;
      margin: 0 auto;
      @include for-desktop {
        width: 100%;
      }
    }
    .subtitle {
      color: var(--subtitle-color);
      display: block;
      margin: 1rem auto 0;
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
