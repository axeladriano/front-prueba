<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- BARRA DE NAVEGACIÓN -->
    <nav class="bg-indigo-700 text-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <!-- Logo / Nombre del Proyecto -->
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold tracking-wider uppercase">Overskull <span class="text-indigo-300">Admin</span></span>
            </div>
            
            <!-- Enlaces de Navegación -->
            <div class="hidden md:ml-10 md:flex md:space-x-4">
              <router-link 
                to="/" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                active-class="bg-indigo-900 text-white"
                inactive-class="text-indigo-100 hover:bg-indigo-600"
              >
                Dashboard
              </router-link>

              <router-link 
                to="/products" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                active-class="bg-indigo-900 text-white"
                inactive-class="text-indigo-100 hover:bg-indigo-600"
              >
                Productos
              </router-link>

              <router-link 
                to="/categories" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                active-class="bg-indigo-900 text-white"
                inactive-class="text-indigo-100 hover:bg-indigo-600"
              >
                Categorías
              </router-link>
            </div>
          </div>

          <!-- Perfil / Acciones rápidas (Opcional) -->
          <div class="flex items-center">
            <span class="text-xs bg-indigo-800 px-2 py-1 rounded text-indigo-200 border border-indigo-500">
              Prueba Técnica Laravel + Vue
            </span>
          </div>
        </div>
      </div>

      <!-- Menú Móvil (Simple) -->
      <div class="md:hidden px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600">Dashboard</router-link>
        <router-link to="/products" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600">Productos</router-link>
        <router-link to="/categories" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600">Categorías</router-link>
      </div>
    </nav>

    <!-- CONTENEDOR DINÁMICO (Aquí se cargan tus vistas) -->
    <main class="py-10">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <!-- El componente RouterView es vital para que las rutas funcionen -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>

    <!-- FOOTER SIMPLE -->
    <footer class="bg-white border-t mt-auto py-4">
      <div class="text-center text-gray-500 text-sm">
        &copy; 2026 Overskull - Gestión de Inventario
      </div>
    </footer>
  </div>
</template>

<script setup>
/**
 * No se requiere lógica compleja aquí, App.vue actúa como el layout principal.
 * El manejo de estados de carga globales se hace mediante los stores de Pinia.
 */
</script>

<style>
/* Animación suave para el cambio de páginas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>