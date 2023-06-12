// edit post btn remove todo
//remove red bg and fix img w/h todo
<template>
  <div class="mainContainer">
    <div
      class="post"
    >
      <div class="post-img">
        <img
          :src="coverImage"
          class="post-img"
          alt="post-img"
        >
      </div>
      <h2
        class="content"
      >
        title: {{ title }}
      </h2>
      <h3 class="content">
        content: {{ content }}
      </h3>
      <div class="btn topEdit-btn">
        <button
          type="button"
          @click="goEditPost(id)"
        >
          edit post
        </button>
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
import { catchError } from '../services/errorHandler';

export default {
  props: ['title', 'content', 'coverImage', 'id'],
  data() {
    return {
      error: ''
    };
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
  width: 100%;
  max-width: 33rem;
}
.post {
  display: block;
  font-size: 2rem;
  border-radius: 1rem;
  margin: 0 auto;
  width: 100%;
  height: 50rem;
  color: var(--all-text-white);
}
.post-img {
  height: 30rem;
  border-radius: 1rem;
}
.content {
  overflow: hidden;
  margin: 3rem 0;
}
.post-img {
  width: 100%;
}
</style>
