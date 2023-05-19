<template>
  <div class="container">
    <div class="post">post {{ postId }}</div>
    <form @submit.prevent="editPost(title, content)">
      <input type="text" v-model="title" placeholder="Title" />
      <input type="text" v-model="content" placeholder="Content" />
      <div class="post">{{ title }}</div>
      <button type="submit">click</button>
    </form>
  </div>
</template>
<script>
import { getPostId, updatePost } from '../services/api'
import { handleRequestError } from '../services/errorHandler';
export default {
  data() {
    return {
      postId: '',
      title: '',
      content: '',
    }
  },
  methods: {
    editPost() {
      const updatePostData = {
        id: +this.postId,
        title: this.title,
        content: this.content,
      }
      updatePost(updatePostData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
        handleRequestError.call(this, error);
      })
    },
  },
  mounted() {
    getPostId(this.postId).then((response) => {
      console.log(response)
      this.title = response.data.title
      this.content = response.data.content
    })
  },
  created() {
    this.postId = this.$route.params.id
  },
}
</script>
<style></style>
