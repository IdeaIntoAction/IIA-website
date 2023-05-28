<template>
  <div class="container">
    <form @submit.prevent="register">
      <label for="email">Email</label>
      <input
        type="email"
        v-model="email"
        placeholder="Email"
      >
      <label for="password">Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="Password"
      >
      <button type="submit">
        Registration
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
import { createUser } from '../services/api';
import { catchError } from '../services/errorHandler';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },

  methods: {
    register() {
      const { email, password } = this;
      createUser(email, password)
        .then(response => {
          this.$router.push('/createPosts');
          return localStorage.setItem('sessionToken', response.data.token);
        })
        .catch(error => {
          catchError.call(this, error);
        });
    }
  }
};
</script>

<style></style>
