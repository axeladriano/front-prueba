import { defineStore } from 'pinia';
import api from '../services/api';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null,
    loading: false
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const { data } = await api.get('/product');
        this.products = data.data;
      } finally {
        this.loading = false;
      }
    },
    async fetchProduct(id) {
      this.loading = true;
      try {
        const { data } = await api.get(`/product/${id}`);
        this.product = data.data;
      } finally {
        this.loading = false;
      }
    },
    async saveProduct(productData) {
      this.loading = true;
      try {
        if (productData.id) {
          await api.put(`/product/${productData.id}`, productData);
        } else {
          await api.post('/product', productData);
        }
        return true;
      } catch (error) {
        return false;
      } finally {
        this.loading = false;
      }
    },
    async deleteProduct(id) {
      if (!confirm('¿Eliminar este producto?')) return;
      try {
        await api.delete(`/product/${id}`);
        this.products = this.products.filter(p => p.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  }
});