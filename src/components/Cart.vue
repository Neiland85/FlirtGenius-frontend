<template>
  <v-container>
    <h1>Your Cart</h1>
    <v-row v-if="cart.length">
      <v-col v-for="(item, index) in cart" :key="index" cols="12" md="4">
        <v-card>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>Price: {{ item.price | currency }}</v-card-subtitle>
          <v-card-text>
            Quantity: {{ item.quantity }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" @click="removeFromCart(index)">Remove</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider v-else></v-divider>
    <div v-else>
      <p>Your cart is empty</p>
    </div>
    <h3 v-if="cart.length">Total: {{ totalPrice | currency }}</h3>
    <v-btn v-if="cart.length" color="primary" @click="$router.push('/checkout')">Proceed to Checkout</v-btn>
  </v-container>
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
.v-card {
  margin-bottom: 20px;
}
</style>

