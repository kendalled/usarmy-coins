<template>
  <header class="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-xs z-50 transition-all duration-300" :class="{ 'bg-black/30': scrolled }">
    <div class="container mx-auto px-6 py-4 max-w-336">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <span class="sr-only">US Army Coins</span>
            <svg class="h-8 w-8 mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#181d23" stroke="#ea580c" stroke-width="3" />
              <rect x="14" y="10" width="12" height="20" rx="6" fill="#ea580c" />
              <circle cx="20" cy="20" r="4" fill="#fff" />
            </svg>
            <span class="text-white font-bold text-2xl tracking-wide">US Army Coins</span>
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 text-sm font-semibold">Pricing</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 text-sm font-semibold">Units & Departments</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 text-sm font-semibold">Products</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 text-sm font-semibold">Blog</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 text-sm font-semibold">Gallery</a>
        </nav>
        
        <!-- Right Side Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 text-sm font-semibold">Sign in</a>
          <a href="#" class="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-md transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 text-sm">
            Get a Free Quote
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-hidden">
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-black/95 border-t border-gray-800">
      <div class="container mx-auto px-6 py-4">
        <nav class="flex flex-col space-y-4">
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 py-2">Pricing</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 py-2">Units & Departments</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 py-2">Products</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 py-2">Blog</a>
          <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 py-2">Gallery</a>
          <div class="pt-2 border-t border-gray-800 flex flex-col space-y-3">
            <a href="#" class="text-white hover:text-orange-500 transition-colors duration-300 py-2">Sign in</a>
            <a href="#" class="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-md transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 text-center">
              Get a Free Quote
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>