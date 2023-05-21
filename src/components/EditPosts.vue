<template>
    <div class="container">
        <form @submit.prevent="editPost(title, content)">
            <input
                type="text"
                v-model="title"
                placeholder="Title"
            >
            <input
                type="text"
                v-model="content"
                placeholder="Content"
            >
            <button type="submit">
                Edit Post # {{ postId }}
            </button>
            <button @click="deletePost(this.updatePostData.id)">
                delate
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
import { getPostId, updatePost } from '../services/api';
import { handleRequestError } from '../services/errorHandler';

export default {
  data() {
    return {
      postId: '',
      title: '',
      content: '',
      error: ''
    };
  },
  mounted() {
    getPostId(this.postId).then(response => {
      this.title = response.data.title;
      this.content = response.data.content;
    });
  },
  created() {
    this.postId = this.$route.params.id;
  },
  methods: {
    editPost() {
      const updatePostData = {
        id: +this.postId,
        title: this.title,
        content: this.content
      };
      updatePost(updatePostData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          handleRequestError.call(this, error);
        });
      this.$router.push('/postsList');
    }
  }
};
</script>
<style></style>
