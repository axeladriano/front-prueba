import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.success === false) {
      toast.error(response.data.message || 'Error en la operación');
      return Promise.reject(response.data);
    }
    
    if (['post', 'put', 'delete'].includes(response.config.method) && response.data.message) {
      toast.success(response.data.message);
    }
    
    return response;
  },
  (error) => {
    if (error.response) {
      const data = error.response.data;
      const message = data.message || 'Error inesperado en el servidor';
      toast.error(message);
      
      if (data.errors) {
        Object.values(data.errors).forEach(err => toast.error(err[0]));
      }
    } else if (error.request) {
      toast.error('Error de red. No se pudo conectar con el servidor.');
    }
    return Promise.reject(error);
  }
);

export default api;