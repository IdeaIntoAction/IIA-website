// edit post btn remove todo
//remove red bg and fix img w/h todo
<template>
  <div class="mainContainer">
    <div
      class="post"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="post-img">
        <img
          class="post-img"
          src="../assets/icons/crazy-monster.svg"
          alt="post-img"
        >
      </div>
      <h2 class="content">
        title: {{ post.title }}!!! date post !!!
      </h2>
      <h3 class="content">
        content: {{ post.content }}
      </h3>
      <div class="btn topEdit-btn">
        <!-- <button
          type="button"
          @click="goEditPost(post.id)"
        >
          edit post
        </button> -->
      </div>
    </div>
    <div
      v-if="error"
      class="errorMessage"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
import { postsList } from '../services/api';
import { catchError } from '../services/errorHandler';

export default {
  data() {
    return {
      posts: [],
      error: ''
    };
  },
  mounted() {
    postsList()
      .then(response => {
        this.posts = response.data.posts;
      })
      .catch(error => {
        catchError.call(this, error);
      });
  },
  methods: {
    goEditPost(postId) {
      try {
        this.$router.push({ path: `/editPosts/${postId}` });
      } catch (error) {
        catchError.call(this, error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../style/abstracts/mixins';
@import '../style/abstracts/variables';
.mainContainer {
    max-width: 130rem;
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 2rem;
    @include for-desktop{
        grid-template-columns: repeat(3, 1fr);
    }
}
.post {
    font-size: 2rem;
    border-radius: 1rem;
    margin: 0 auto;
    width: 100%;
    height: 50rem;
    color: var(--all-text-white);
}
.post-img {
    height: 30rem;
    width: 100%;
    background: #bb0000;
    border-radius: 1rem;
}
.content {
    margin: 3rem 0;
}
.post-img {
    width: 100%;
}
</style>
