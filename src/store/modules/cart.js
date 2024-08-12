const state = {
  cart: [],
};

const mutations = {
  ADD_TO_CART(state, product) {
    state.cart.push(product);
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
};

const getters = {
  cartItems: (state) => state.cart,
  cartTotal: (state) => state.cart.reduce((total, product) => total + product.price, 0),
};

export default {
  state,
  mutations,
  actions,
  getters,
};

