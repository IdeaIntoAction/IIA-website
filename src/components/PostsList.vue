<template>
  <div class="mainContainer">
    <div class="wrapper">
      <one-post
        class="posts"
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
      />
    </div>
  </div>
</template>

<script>
import OnePost from './OnePost.vue';
import { postsList } from '../services/api';
import { catchError } from '../services/errorHandler';

export default {
  components: {
    OnePost
  },
  data() {
    return {
      posts: []
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
  }
};
</script>

<style scoped lang="scss">
@import '../style/abstracts/mixins';
.wrapper {
  display: grid;
  padding: 0 2.5rem;
  gap: 2rem;
  grid-template-columns: auto;
  @include for-desktop{
      grid-template-columns: repeat(3, 1fr);
  }
  .posts {
    margin-top: 3rem;
  }
}
</style>
