<template>
    <div class="container">
        <h1>empty</h1>
        <form @submit.prevent="newPost">
            <input
                type="title"
                placeholder="title"
                v-model="title"
            >
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
import { handleRequestError } from '../services/errorHandler';

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
      createPost(title, content)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          handleRequestError.call(this, error);
        });
    }
  }
};
</script>

<style></style>
