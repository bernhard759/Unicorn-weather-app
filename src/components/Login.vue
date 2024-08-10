<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>Login to Get Your Unicorn Weather Forecast</h2>
        <b-form-group label="Email">
          <b-form-input v-model="email" type="email" placeholder="Enter your email"></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="login">Login</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/unicorn-forecast');
      } catch (error) {
        console.error('Login failed', error);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

b-button {
  display: block;
  width: 100%;
  margin-top: 20px;
}
</style>
