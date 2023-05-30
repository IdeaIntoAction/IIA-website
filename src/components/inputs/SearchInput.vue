<template>
  <form class="inputContainer">
    <label for="search">Search</label>
    <button
      class="searchIconBtn"
      type="button"
    >
      <img
        src="../assets/icons/search.svg"
        alt="search"
      >
    </button>
    <input
      class="searchInput"
      placeholder="Search posts"
      type="text"
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      postsItems: '123'
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../style/abstracts/variables";
@import "../../style/abstracts/mixins";
.inputContainer {
    width: 100%;
    position: relative;
    padding: 0 1rem;
    margin: 0 auto;
    @include for-desktop {
        padding: 0;
    }
    .searchInput {
        display: block;
        margin: 0 auto;
        padding-left: 4rem;
        padding-right: 4rem;
        font-size: 1rem;
        color:  var(--all-text-white);;
        background-color: var(--background-opacity);
        width: 100%;
        height: 4.5rem;
        border: 0.01rem solid var(--border-color);
        border-radius: 5rem;
    }
    .searchIconBtn{
        left: 1.6rem;
        top: 0.9rem;
        position: absolute;
        border: none;
        opacity: 100%;
        background-color: var(--background-opacity);
        z-index: -1;
        @include for-desktop {
            left: 0.7rem;
        }
    }
    label{
        display: none;
    }
}
</style>
