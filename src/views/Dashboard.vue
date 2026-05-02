<template>
  <div class="p-6 max-w-6xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8 text-center mt-10">
      <h1 class="text-4xl font-bold text-gray-800 mb-4"></h1>
      <p class="text-gray-600 mb-8">
        puedes gestionar todos los productos y categorías
      </p>
      
      <div class="flex justify-center gap-4">
        <router-link 
          to="/products" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Ver Productos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>