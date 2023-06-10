<template>
  <div class="mainContainer">
    <div class="header">
      <div class="back-arrow">
        <img
          class="back-arrow"
          src=""
          alt="back-arrow"
        >
      </div>
      <div class="add-post-title">
        Add post
      </div>
    </div>
    <form @submit.prevent="newPost">
      <label for="password">title</label>
      <input
        class="create-title-input"
        type="text"
        placeholder="Title"
        v-model="title"
      >
      <label for="content">Password</label>
      <textarea
        class="content-input"
        type="textarea"
        placeholder="Content"
        v-model="content"
      />
      <addfile />
      <button
        class="btn"
        type="submit"
      >
        Post
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
import addfile from './inputs/AddFileInput.vue';
import { createPost } from '../services/api';
import { catchError } from '../services/errorHandler';

export default {
  components: {
    addfile
  },
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

<style scoped lang="scss">
@import '../style/abstracts/variables';
.mainContainer {
  color: var(--all-text-white);
  flex-direction: column;
  padding: 1.5rem;
  .header{
    position: relative;
    display: flex;
    justify-content: center;
  }
  .back-arrow {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    display: inline;
    top: 0;
    left: 0;
  }
  .add-post-title {
    font-size: 2.5rem;
    display: inline-block;
  }
}
.create-title-input, .content-input {
  width: 100%;
  margin-top: 2rem;
  border-radius: 0.7rem;
}
.btn {
  margin-top: 5rem;
  width: 100%;
  border-radius: 0.7rem;
}

</style>
//border-radius,fz variables todo
