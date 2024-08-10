import { createApp } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire';
import App from './App.vue';
import { auth } from './firebase';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// App
const app = createApp(App);

// VueFire for firebase auth
app.use(VueFire, {
  firebaseApp: auth.app,
  modules: [VueFireAuth()],
});

app.use(BootstrapVue3);

// Router
app.use(router);

// Mount
app.mount('#app');
