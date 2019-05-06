import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories';

//load Vuex
Vue.use(Vuex);

//create Store
export default new Vuex.Store({
  modules: {
    categories
  }
});
