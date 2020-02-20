import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    name: 'Anil',
  },
});

getters: {
    user(state)
    {
      return state.name
    }
},

