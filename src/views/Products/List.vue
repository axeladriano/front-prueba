<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Productos</h1>
      <router-link to="/products/create" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
        + Nuevo Producto
      </router-link>
    </div>

    <div v-if="productStore.loading" class="text-center py-10">Cargando...</div>

    <div v-else class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-50 border-b">
          <tr>
            <th class="p-4 font-semibold text-gray-700">Nombre</th>
            <th class="p-4 font-semibold text-gray-700">Precio</th>
            <th class="p-4 font-semibold text-gray-700">Stock</th>
            <th class="p-4 font-semibold text-gray-700 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productStore.products" :key="item.id" class="border-b hover:bg-gray-50">
            <td class="p-4">{{ item.name }}</td>
            <td class="p-4">S/ {{ item.price }}</td>
            <td class="p-4">{{ item.stock }}</td>
            <td class="p-4 text-right space-x-2">
              <router-link :to="`/products/edit/${item.id}`" class="text-blue-600 hover:underline">Editar</router-link>
              <button @click="productStore.deleteProduct(item.id)" class="text-red-600 hover:underline">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../../stores/productStore';

const productStore = useProductStore();
onMounted(() => productStore.fetchProducts());
</script>