<template>
  <div class="-mt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Content Column -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Uncompromising Quality, <span class="text-orange-500">Battle-Tested Standards</span>
            </h2>
            <div class="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                When it comes to military challenge coins, we understand that quality isn't just about appearance—it's about honoring service, tradition, and the sacrifices made by our men and women in uniform. Every coin we craft is built to the same exacting standards our military demands: durable, precise, and worthy of the heroes who carry them.
              </p>
              <p>
                Our coins are manufactured using premium-grade metals and time-tested techniques that ensure each piece can withstand the rigors of military life. From the barracks to the battlefield, from ceremonies to everyday carry, these coins are engineered to last a lifetime and beyond. Because when you're commemorating service to our nation, nothing less than perfection will do.
              </p>
            </div>
          </div>
          
          <!-- Quality Features -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-2">Made in USA</h3>
                <p class="text-slate-400 text-sm">Proudly manufactured on American soil with American craftsmanship</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-2">Military-Grade Durability</h3>
                <p class="text-slate-400 text-sm">Built to withstand years of handling and harsh conditions</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-2">Premium Materials</h3>
                <p class="text-slate-400 text-sm">High-quality metals and finishes that maintain their luster</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-2">Precision Craftsmanship</h3>
                <p class="text-slate-400 text-sm">Every detail meticulously crafted by skilled artisans</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Image Column -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl ring-1 ring-white/10">
            <img 
              src="/images/misc/challenge-coin-collection.jpg" 
              alt="Military challenge coin quality assurance process"
              class="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
          </div>
          
          <!-- Floating quality badge -->
          <div class="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-lg transform rotate-3">
            <div class="text-sm font-semibold">100% Quality</div>
            <div class="text-xs opacity-90">Guaranteed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component displays quality information about military challenge coins
// targeting current and former military personnel
</script>