<template>
  <div class="container">
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <h2>title: {{ post.title }}</h2>
        <div class="content">
          content: {{ post.content }}
        </div>
        <div class="btn topEdit-btn">
          <button
            type="button"
            @click="goEditPost(post.id)"
          >
            edit post
          </button>
        </div>
      </li>
    </ul>
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
li {
  position: relative;
  .topEdit-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
