import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Channel from './components/Channel.vue'
import Program from './components/Program.vue';
import PoddFile from './components/PoddFiles.vue';
import FavProg from "./components/FavProg.vue";
import ProgramSearch from "./components/ProgramSearch.vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(router)
// Lägg till vue-komponent globalt
Vue.component("Channel",Channel);
Vue.component("Program",Program);
Vue.component("PoddFile",PoddFile);
Vue.component("FavProg",FavProg);
Vue.component("ProgramSearch", ProgramSearch);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
