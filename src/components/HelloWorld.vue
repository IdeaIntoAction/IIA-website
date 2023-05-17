<template>
  <div class="registration-form">
    <form @submit.prevent="register" >
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Пароль" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:8080/api/auth/sign-up', { email: this.email, password: this.password })
        .then(response => {
          const sessionToken = response;
          console.log(sessionToken)
          localStorage.setItem('sessionToken', sessionToken.data.token);
          this.$router.push('/account')
          // Редирект на желаемую страницу или выполнение других действий
        })
        .catch(error => {
          console.error(error);
          // Обработка ошибок
        });
    }
  }
};
</script>

<style>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
</style>
