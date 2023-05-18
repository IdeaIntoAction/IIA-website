<template>
  <div>
    <h1>empty</h1>
    <form @submit.prevent="newPost">
      <input type="title" placeholder="title" v-model="title" />
      <input type="content" placeholder="content" v-model="content" />
      <button type="submit">New Post</button>
    </form>
  </div>
</template>

<script>
import { createPost } from '../services/api'
export default {
  data() {
    return {
      title: '',
      content: '',
    }
  },

  methods: {
    newPost() {
      const {title, content} = this
      createPost(title, content,).then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
    },
  },
}
</script>

<style></style>
