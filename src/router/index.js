import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import Cart from '../components/Cart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: ProductList },
    { path: '/products/:id', component: ProductDetail },
    { path: '/cart', component: Cart },
  ],
});

