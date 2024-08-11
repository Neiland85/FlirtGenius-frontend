<template>
  <div>
    <h1>Your Cart</h1>
    <div v-if="cart.length">
      <div v-for="(item, index) in cart" :key="index">
        <h2>{{ item.name }}</h2>
        <p>Price: {{ item.price | currency }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <button @click="removeFromCart(index)">Remove</button>
      </div>
      <h3>Total: {{ totalPrice | currency }}</h3>
      <router-link to="/checkout">Proceed to Checkout</router-link>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  created() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart) {
        this.cart = storedCart;
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #cc0000;
}
</style>

