const state = {
  items: [],
};

const mutations = {
  ADD_TO_CART(state, product) {
    const item = state.items.find(item => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      state.items.push({ ...product, quantity: 1 });
    }
  },
  REMOVE_FROM_CART(state, productId) {
    state.items = state.items.filter(item => item.id !== productId);
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  removeFromCart({ commit }, productId) {
    commit('REMOVE_FROM_CART', productId);
  },
};

const getters = {
  cartItems: state => state.items,
  cartTotal: state => state.items.reduce((total, item) => total + item.price * item.quantity, 0),
};

export default {
  state,
  mutations,
  actions,
  getters,
};

