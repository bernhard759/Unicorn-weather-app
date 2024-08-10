<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>Unicorn Weather Forecast</h2>

        <!-- Show spinner while loading -->
        <div v-if="loading" class="d-flex justify-content-center m-3">
          <b-spinner  label="Loading..."></b-spinner>
        </div>

        <!-- Show the forecast when loading is complete -->
        <div v-else>
          <b-card v-for="(weather, city) in forecast" :key="city" class="mb-3" bg-variant="light" text-variant="dark">
            <b-card-header>{{ city }}</b-card-header>
            <b-card-body>{{ weather }}</b-card-body>
          </b-card>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { getAuth } from 'firebase/auth';

export default {
  data() {
    return {
      forecast: {},
      loading: true, // Loading state
    };
  },
  async created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();

      // Create an Axios instance with retry logic
      const apiClient = axios.create();
      axiosRetry(apiClient, {
        retries: 3,
        retryCondition: (error) => {
          return error.response.status >= 400 || error.code === 'ECONNABORTED';
        },
        retryDelay: (retryCount) => {
          console.log(`Retry attempt #${retryCount}`);
          return retryCount * 1000; // Exponential backoff (1s, 2s, 3s)
        }
      });

      try {
        const response = await apiClient.get('http://localhost:8000/unicorn-weather', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.forecast = response.data.forecast;
      } catch (error) {
        console.error('Error fetching forecast:', error);
      } finally {
        this.loading = false; // Stop loading when request completes
      }
    } else {
      this.loading = false; // Stop loading if no user is found
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
