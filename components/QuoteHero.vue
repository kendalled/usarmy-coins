<template>
  <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 pt-32 pb-16">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem]">
      <div class="text-center">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8">
          <CoinIcon class="w-10 h-10" />
        </div>
        
        <!-- Headline -->
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Get Your Free
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Coin Quote
          </span>
        </h1>
        
        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Custom military challenge coins for all branches of service. Professional design, premium quality, and fast turnaround.
        </p>
        
        <!-- Trust indicators -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Made in USA</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>10-14 Day Delivery</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span>500K+ Coins Delivered</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CoinIcon from './CoinIcon.vue'
</script>