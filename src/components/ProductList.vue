<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card>
          <v-img :src="product.image" height="200px"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price | currency }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" @click="$router.push(`/product/${product.id}`)">View Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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

