<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Checkout</h1>
        <div v-if="cart.length">
          <v-card v-for="(item, index) in cart" :key="index" class="mb-4">
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>Price: {{ item.price | currency }}</v-card-subtitle>
            <v-card-text>Quantity: {{ item.quantity }}</v-card-text>
          </v-card>
          <v-divider></v-divider>
          <h3>Total: {{ totalPrice | currency }}</h3>
          <v-form @submit.prevent="processPayment">
            <v-text-field label="Card Number" v-model="cardNumber" required></v-text-field>
            <v-text-field label="Expiry Date" v-model="expiryDate" required></v-text-field>
            <v-text-field label="CVC" v-model="cvc" required></v-text-field>
            <v-btn color="primary" type="submit">Pay Now</v-btn>
          </v-form>
        </div>
        <div v-else>
          <p>Your cart is empty</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
.v-card {
  padding: 16px;
}
</style>

