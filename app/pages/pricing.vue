<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
    <!-- Header -->
    <div class="pt-24 pb-12">
      <div class="max-w-336 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Challenge Coin Pricing
        </h1>
        <p class="text-xl text-slate-200 max-w-3xl mx-auto">
          Professional military challenge coins with transparent pricing
        </p>
      </div>
    </div>

    <!-- Simple Pricing Cards -->
    <div class="max-w-336 mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Basic Package -->
        <div class="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h3 class="text-2xl font-bold text-white mb-4">Basic</h3>
          <div class="text-4xl font-bold text-orange-500 mb-6">$3.95<span class="text-lg text-slate-300">/coin</span></div>
          <ul class="text-slate-200 space-y-3 mb-8">
            <li>• Standard 1.75" size</li>
            <li>• Basic plating options</li>
            <li>• 100 coin minimum</li>
            <li>• 2-3 week delivery</li>
          </ul>
          <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Get Quote
          </button>
        </div>

        <!-- Premium Package -->
        <div class="bg-gradient-to-b from-orange-500 to-orange-600 rounded-lg p-8 border-2 border-orange-400 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">Premium</h3>
          <div class="text-4xl font-bold text-white mb-6">$4.95<span class="text-lg text-orange-100">/coin</span></div>
          <ul class="text-orange-50 space-y-3 mb-8">
            <li>• Multiple size options</li>
            <li>• Premium plating finishes</li>
            <li>• 50 coin minimum</li>
            <li>• Rush delivery available</li>
          </ul>
          <button class="w-full bg-white hover:bg-orange-50 text-orange-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Get Quote
          </button>
        </div>

        <!-- Custom Package -->
        <div class="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h3 class="text-2xl font-bold text-white mb-4">Custom</h3>
          <div class="text-4xl font-bold text-orange-500 mb-6">Quote<span class="text-lg text-slate-300"> based</span></div>
          <ul class="text-slate-200 space-y-3 mb-8">
            <li>• Any size or shape</li>
            <li>• Special finishes</li>
            <li>• No minimum order</li>
            <li>• Priority support</li>
          </ul>
          <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Get Quote
          </button>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 text-center">
        <p class="text-slate-300 text-lg mb-4">
          All prices include free design consultation and digital proof
        </p>
        <p class="text-slate-400">
          Questions about pricing? Contact us for a detailed quote.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Pricing - US Army Coins',
  meta: [
    { name: 'description', content: 'Professional military challenge coin pricing with transparent rates and flexible packages.' }
  ]
})
</script>