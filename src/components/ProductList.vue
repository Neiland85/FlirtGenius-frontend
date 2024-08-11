<template>
  <div>
    <h1>Product List</h1>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product.name">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price | currency }}</p>
        <router-link :to="`/product/${product.id}`">View Details</router-link>
      </div>
    </div>
    <div v-else>
      <p>No products available</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para los productos */
div {
  margin-bottom: 20px;
}
img {
  width: 100px;
  height: auto;
}
</style>

