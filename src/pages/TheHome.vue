<template>
    <div class="homeContainer">
        <div class="content">
            <div class="title">
                Learn development with
                great articles.
            </div>
            <div class="subtitle">
                Find the latest of my writing here.
            </div>
            <searchInput class="homeBtn" />
        </div>
        <div class="main-img">
            <!-- <img src="" alt=""> -->
        </div>
    </div>
</template>
<script>
import searchInput from '../components/inputs/SearchInput.vue';

export default {
  components: {
    searchInput
  },
  data() {

  }
};
</script>
<style lang="scss">
.homeContainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  .main-img {
    width: 25rem;
  }
  .content {
    .title {
      margin-top: 10rem;
      width: 25rem;
      font-size: 40px;
      line-height: 47px;
      color: #FFFFFF;
    }
    .subtitle {
      margin-top: 1.5rem;
      width: 30rem;
      font-size: 40px;
      line-height: 47px;
      color: #A9ADC1;
    }
    .homeBtn{
      margin-top: 2.5rem;
    }
  }
}
</style>
