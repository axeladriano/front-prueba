<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
    <h2 class="text-xl font-bold mb-6">{{ isEdit ? 'Editar Producto' : 'Nuevo Producto' }}</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Nombre</label>
        <input v-model="form.name" type="text" class="w-full border p-2 rounded mt-1" required />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea v-model="form.description" class="w-full border p-2 rounded mt-1"></textarea>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Precio (S/)</label>
          <input v-model.number="form.price" type="number" step="0.01" class="w-full border p-2 rounded mt-1" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Stock</label>
          <input v-model.number="form.stock" type="number" class="w-full border p-2 rounded mt-1" required />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">ID Categoría</label>
        <input v-model.number="form.category_id" type="number" class="w-full border p-2 rounded mt-1" required />
      </div>

      <div class="flex justify-end space-x-3 pt-4">
        <button type="button" @click="$router.push('/products')" class="px-4 py-2 text-gray-600">Cancelar</button>
        <button type="submit" :disabled="productStore.loading" class="bg-indigo-600 text-white px-6 py-2 rounded-md">
          {{ productStore.loading ? 'Guardando...' : 'Guardar Producto' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../../stores/productStore';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const isEdit = computed(() => !!route.params.id);

const form = reactive({
  id: null,
  name: '',
  description: '',
  price: 0,
  stock: 0,
  category_id: ''
});

onMounted(async () => {
  if (isEdit.value) {
    await productStore.fetchProduct(route.params.id);
    Object.assign(form, productStore.product);
  }
});

const handleSubmit = async () => {
  const success = await productStore.saveProduct(form);
  if (success) router.push('/products');
};
</script>