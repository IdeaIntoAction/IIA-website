<template>
  <div class="container">
    <h1>empty</h1>
    <form @submit.prevent="newPost">
      <label for="password">Password</label>
      <input
        type="title"
        placeholder="title"
        v-model="title"
      >
      <label for="content">Password</label>
      <input
        type="content"
        placeholder="content"
        v-model="content"
      >
      <button type="submit">
        New Post
      </button>
    </form>
    <div
      v-if="error"
      class="errorMessage"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
import { createPost } from '../services/api';
import { catchError } from '../services/errorHandler';

export default {
  data() {
    return {
      title: '',
      content: '',
      error: ''
    };
  },

  methods: {
    newPost() {
      const { title, content } = this;
      createPost(title, content).catch(error => {
        catchError.call(this, error);
      });
    }
  }
};
</script>

<style></style>
