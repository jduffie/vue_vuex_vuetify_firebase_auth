import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import * as firebase from 'firebase';

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: 'AIzaSyARc8UGrtqVG4VuAJ-Zq6pBtca-ZJzLWQE',
  authDomain: 'fir-ui-base.firebaseapp.com',
  databaseURL: 'https://fir-ui-base.firebaseio.com',
  projectId: 'fir-ui-base',
  storageBucket: 'fir-ui-base.appspot.com',
  messagingSenderId: '392248120351',
  appId: '1:392248120351:web:c5e9809b0c1682da05712a',
  measurementId: 'G-YW98CP8HCK'
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: function () {
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
