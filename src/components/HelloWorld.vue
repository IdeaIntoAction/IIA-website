<template>
  <div class="registration-form">
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Registration</button>
    </form>
  </div>
</template>

<script>
import { createUser } from '../services/api'
// import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      const { email, password } = this;
      createUser(email, password).then((response) => {
        console.log(response.data.token)
        this.$router.push('/account')
        return localStorage.setItem('sessionToken', response.data.token)
      })
      .catch((error) => {
          console.error(error)
      })
    },
  },
}
</script>

<style>

</style>
