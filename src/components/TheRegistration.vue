<template>
  <div class="registration-form">
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Registration</button>
    </form>
    <div v-if="error" class="errorMessage">{{ error }}</div>
  </div>
</template>

<script>
import { createUser } from '../services/api'
import { handleRequestError } from '../services/errorHandler';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    register() {
      const { email, password } = this
      createUser(email, password)
        .then((response) => {
          this.$router.push('/createPosts')
          return localStorage.setItem('sessionToken', response.data.token)
        })
        .catch((error) => {
        handleRequestError.call(this, error);
      })
    },
  },
}
</script>

<style></style>
