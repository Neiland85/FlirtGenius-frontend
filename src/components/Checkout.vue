<template>
  <div>
    <h1>Checkout</h1>
    <form @submit.prevent="submitCheckout">
      <div>
        <label for="cardNumber">Card Number:</label>
        <input type="text" v-model="paymentInfo.cardNumber" id="cardNumber" required>
      </div>
      <div>
        <label for="expiryDate">Expiry Date:</label>
        <input type="text" v-model="paymentInfo.expiryDate" id="expiryDate" required placeholder="MM/YY">
      </div>
      <div>
        <label for="cvv">CVV:</label>
        <input type="text" v-model="paymentInfo.cvv" id="cvv" required>
      </div>
      <div>
        <label for="cardholderName">Cardholder Name:</label>
        <input type="text" v-model="paymentInfo.cardholderName" id="cardholderName" required>
      </div>
      <button type="submit">Pay Now</button>
    </form>

    <div v-if="loading">Processing payment...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="success">Payment successful! Session ID: {{ sessionId }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      paymentInfo: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
      },
      cart: [],  // Esto debe venir del estado global (Vuex) o pasarse como prop
      loading: false,
      error: null,
      success: false,
      sessionId: null
    };
  },
  methods: {
    async submitCheckout() {
      this.loading = true;
      this.error = null;
      this.success = false;

      try {
        // Asegúrate de que el carrito contenga los productos seleccionados
        const response = await axios.post('http://localhost:3000/payments/checkout', {
          items: this.cart,
          paymentInfo: this.paymentInfo
        });

        // Guardar la sesión de Stripe en caso de que se necesite para futuras consultas
        this.sessionId = response.data.id;
        this.success = true;
      } catch (error) {
        // Manejar errores y mostrar un mensaje al usuario
        console.error('Error processing payment:', error);
        this.error = 'There was a problem processing your payment. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
/* Estilos básicos para el formulario */
form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

div[role="alert"] {
  margin-top: 20px;
  color: red;
}

div[role="status"] {
  margin-top: 20px;
  color: green;
}
</style>

