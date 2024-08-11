<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="product.name">
    <p>{{ product.description }}</p>
    <p>{{ product.price | currency }}</p>
    <p>Stock: {{ product.stock }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      const productId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:5000/products/${productId}`);
        this.product = response.data;
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
    addToCart(product) {
      // Lógica para agregar el producto al carrito
    },
  },
};
</script>

<style scoped>
/* Estilos para los detalles del producto */
img {
  width: 200px;
  height: auto;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>

