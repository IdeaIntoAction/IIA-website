<template>
  <form class="inputContainer">
    <label for="search">Search</label>
    <button
      class="searchIconBtn"
      type="button"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 18C14.9183 18 18.5 14.4183 18.5 10C18.5 5.58172 14.9183 2 10.5 2C6.08172 2 2.5 5.58172 2.5 10C2.5 14.4183 6.08172 18 10.5 18Z"
          stroke="#E6E9EE"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M16.1145 16.1145L22.75 22.75"
          stroke="#E6E9EE"
          stroke-width="4"
          stroke-miterlimit="10"
        />
      </svg>
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
