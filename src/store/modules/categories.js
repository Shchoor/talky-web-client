import axios from 'axios';

const state = {
  categories: []
};

const getters = {
  allCategories: (state) => state.categories
};

const actions = {
  async fetchCategories({ commit }) {
    const response = await axios.get(
      'https://talkyapi.azurewebsites.net/api/forum/categories/parent'
    );

    commit('setCategories', response.data);
  }
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories)
};

export default {
  state,
  getters,
  actions,
  mutations
}
