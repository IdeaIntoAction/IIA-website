<template>
  <div class="mainContainer">
    <form @submit.prevent="register">
      <label for="email">Email</label>
      <input
        @input="validateForm"
        class="inputs"
        type="email"
        v-model="email"
        placeholder="Email"
      >
      <label for="password">Password</label>
      <input
        @input="validateForm"
        class="inputs"
        type="password"
        v-model="password"
        placeholder="Password"
      >
      <button
        class="formBtn"
        type="submit"
        :disabled="!validForm"
      >
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
      error: '',
      validForm: false
    };
  },

  methods: {
    validateForm() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(this.email);
      const isValidPassword = this.password.length > 8;
      this.validForm = isValidEmail && isValidPassword;
    },
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

<style scoped lang="scss">
@import '../style/abstracts/mixins';
.mainContainer {
  margin-top: 5rem;
}
.inputs, .formBtn {
  @include for-desktop {
    height: 5rem;
    width: 50rem;
  }
}
</style>
