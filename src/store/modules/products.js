import axios from 'axios';

const state = {
  products: [],
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get('/api/products');
    commit('SET_PRODUCTS', response.data);
  },
};

const getters = {
  allProducts: state => state.products,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

