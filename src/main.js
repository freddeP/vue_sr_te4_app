import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Channel from './components/Channel.vue'
import Program from './components/Program.vue';

Vue.config.productionTip = false

// Lägg till vue-komponent globalt
Vue.component("Channel",Channel);
Vue.component("Program",Program);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
