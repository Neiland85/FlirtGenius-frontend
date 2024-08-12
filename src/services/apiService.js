import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getProducts() {
    return apiClient.get('/products');
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
  createProduct(product) {
    return apiClient.post('/products', product);
  },
  updateProduct(id, product) {
    return apiClient.put(`/products/${id}`, product);
  },
  deleteProduct(id) {
    return apiClient.delete(`/products/${id}`);
  },
  checkout(cartItems) {
    return apiClient.post('/checkout', { items: cartItems });
  },
  getTransactions() {
    return apiClient.get('/transactions');
  },
};

