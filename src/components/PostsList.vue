<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} - {{ post.content }}
        <button @click="goEditPost(post.id)" >edit post</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { postsList } from '../services/api'
export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    goEditPost(postId) {
        try {
            this.$router.push({ path: `/editPosts/${postId}` });
        } catch (error) {
            console.error(error);
        }
    }
  },
  mounted() {
    postsList()
      .then((response) => {
        this.posts = response.data.posts
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

<style>
ul {
  list-style: none;
  width: 500px;
  display: block;
  margin: 0 auto;
}
li {
  font-size: 20px;
  text-align: center;
}
</style>
