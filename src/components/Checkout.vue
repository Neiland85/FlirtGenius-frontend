<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cart.length">
      <div v-for="(item, index) in cart" :key="index">
        <h2>{{ item.name }}</h2>
        <p>Price: {{ item.price | currency }}</p>
        <p>Quantity: {{ item.quantity }}</p>
      </div>
      <h3>Total: {{ totalPrice | currency }}</h3>

      <form @submit.prevent="processPayment">
        <label for="cardNumber">Card Number:</label>
        <input type="text" v-model="cardNumber" required>

        <label for="expiryDate">Expiry Date:</label>
        <input type="text" v-model="expiryDate" required>

        <label for="cvc">CVC:</label>
        <input type="text" v-model="cvc" required>

        <button type="submit">Pay Now</button>
      </form>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cart: [],
      cardNumber: '',
      expiryDate: '',
      cvc: '',
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
    async processPayment() {
      try {
        const paymentData = {
          cart: this.cart,
          cardNumber: this.cardNumber,
          expiryDate: this.expiryDate,
          cvc: this.cvc,
        };
        const response = await axios.post('http://localhost:5000/checkout', paymentData);
        alert('Payment successful!');
        localStorage.removeItem('cart');  // Clear cart after successful payment
        this.$router.push('/');
      } catch (error) {
        console.error('Payment error:', error);
        alert('There was an issue processing your payment.');
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 20px;
}
label {
  display: block;
  margin: 10px 0 5px;
}
input {
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>

