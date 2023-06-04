// mt-5 button todo
<template>
  <div class="mainContainer">
    <form
      class="mt-10"
      @submit.prevent="log"
    >
      <label for="email">not email</label>
      <input
        class="inputs"
        @input="validateForm"
        type="email"
        v-model.trim="email"
        placeholder="Login"
      >
      <label for="password">Password</label>
      <input
        @input="validateForm"
        class="mt-1 inputs"
        type="password"
        v-model="password"
        placeholder="Password"
      >
      <button
        :disabled="!validForm"
        type="submit"
        class="w30 mt-5 formBtn"
      >
        <router-link :to="validForm ? '/registration' : ''">
          Sign in with email
        </router-link>
      </button>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      validForm: false
    };
  },
  methods: {
    validateForm() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(this.email);
      const isValidPassword = this.password.length > 8;
      this.validForm = isValidEmail && isValidPassword;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../style/abstracts/mixins.scss';
.inputs, .formBtn {
  @include for-desktop {
    height: 5rem;
    width: 50rem;
  }
}
</style>
