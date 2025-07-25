<template>
  <div class="bg-slate-800 min-h-screen pt-24">
    <!-- Navigation Component -->
    <ZeroNavbar />

    <main>
      <!-- Hero Section Component -->
      <!-- This would be split into: components/pricing/PricingHero.vue -->
      <form class="group/tiers isolate overflow-hidden">
        <div class="flow-root bg-slate-800 pt-24 pb-16 sm:pt-32 lg:pb-0">
          <div class="mx-auto max-w-336 px-4 sm:px-6 lg:px-8">
            <div class="relative z-10">
              <h1 class="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                Premium Challenge Coins <span class="text-orange-500">Starting at $2.98</span>
              </h1>
              <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-slate-300 sm:text-xl/8">
                Professional military challenge coins with transparent pricing and no hidden fees. Made in USA with volume discounts up to 50% off retail prices.
              </p>
              
              <!-- Quantity Toggle Component -->
              <!-- This would be split into: components/pricing/QuantityToggle.vue -->
              <div class="mt-16 flex justify-center">
                <fieldset aria-label="Quantity selection">
                  <div class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                    <label class="group relative rounded-full px-2.5 py-1 has-checked:bg-orange-500">
                      <input type="radio" name="quantity" value="small" checked class="absolute inset-0 appearance-none rounded-full" />
                      <span class="text-white">100-499 Coins</span>
                    </label>
                    <label class="group relative rounded-full px-2.5 py-1 has-checked:bg-orange-500">
                      <input type="radio" name="quantity" value="large" class="absolute inset-0 appearance-none rounded-full" />
                      <span class="text-white">500+ Coins</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            <!-- Pricing Tiers Grid Component -->
            <!-- This would be split into: components/pricing/PricingTiers.vue -->
            <div class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              <!-- Background gradient -->
              <svg viewBox="0 0 1208 1024" aria-hidden="true" class="absolute -bottom-48 left-1/2 h-256 -translate-x-1/2 translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                <ellipse cx="604" cy="512" rx="604" ry="512" fill="url(#pricing-gradient)" />
                <defs>
                  <radialGradient id="pricing-gradient">
                    <stop stop-color="#ea580c" />
                    <stop offset="1" stop-color="#fb923c" />
                  </radialGradient>
                </defs>
              </svg>
              
              <!-- Tier background for desktop -->
              <div aria-hidden="true" class="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-slate-700/80 lg:ring-1 lg:ring-white/10"></div>

              <!-- Basic Tier Component -->
              <!-- This would be split into: components/pricing/PricingTier.vue -->
              <div class="group/tier relative rounded-2xl bg-slate-700/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 id="tier-basic" class="text-sm/6 font-semibold text-white group-data-featured/tier:text-slate-900">
                    No Color Coins
                  </h3>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=quantity][value=small]:checked]/tiers:hidden group-data-featured/tier:text-slate-900">
                        $3.60
                      </p>
                      <p class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=quantity][value=large]:checked]/tiers:hidden group-data-featured/tier:text-slate-900">
                        $2.98
                      </p>
                      <div class="text-sm">
                        <p class="text-white group-data-featured/tier:text-slate-900">per coin</p>
                        <p class="text-slate-400 group-not-has-[[name=quantity][value=small]:checked]/tiers:hidden group-data-featured/tier:text-slate-500">
                          100 coins
                        </p>
                        <p class="text-slate-400 group-not-has-[[name=quantity][value=large]:checked]/tiers:hidden group-data-featured/tier:text-slate-500">
                          1000 coins
                        </p>
                      </div>
                    </div>
                    <NuxtLink to="/quote" class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 inline-block">
                      Get Quote
                    </NuxtLink>
                  </div>
                  
                  <!-- Features List Component -->
                  <!-- This would be split into: components/pricing/FeaturesList.vue -->
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white lg:border-t-0">
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Die-struck brass design
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Antique finish only
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Most cost-effective option
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Premium Tier Component (Featured) -->
              <div data-featured="true" class="group/tier relative z-10 rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/10">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 id="tier-premium" class="text-sm/6 font-semibold text-white group-data-featured/tier:text-slate-900">
                    One Side Color
                  </h3>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=quantity][value=small]:checked]/tiers:hidden group-data-featured/tier:text-slate-900">
                        $3.93
                      </p>
                      <p class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=quantity][value=large]:checked]/tiers:hidden group-data-featured/tier:text-slate-900">
                        $3.35
                      </p>
                      <div class="text-sm">
                        <p class="text-white group-data-featured/tier:text-slate-900">per coin</p>
                        <p class="text-slate-400 group-not-has-[[name=quantity][value=small]:checked]/tiers:hidden group-data-featured/tier:text-slate-500">
                          100 coins
                        </p>
                        <p class="text-slate-400 group-not-has-[[name=quantity][value=large]:checked]/tiers:hidden group-data-featured/tier:text-slate-500">
                          1000 coins
                        </p>
                      </div>
                    </div>
                    <NuxtLink to="/quote" class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white group-data-featured/tier:bg-orange-600 group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-featured/tier:focus-visible:outline-orange-600 transition-all duration-300 inline-block">
                      Get Quote
                    </NuxtLink>
                  </div>
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-slate-900/5 group-data-featured/tier:border-slate-900/5 group-data-featured/tier:text-slate-400 lg:border-t-0">
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500 group-data-featured/tier:text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Die-struck with soft enamel
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500 group-data-featured/tier:text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Color on one side only
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500 group-data-featured/tier:text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        All plating options
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500 group-data-featured/tier:text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Popular choice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Elite Tier Component -->
              <div class="group/tier relative rounded-2xl bg-slate-700/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 id="tier-elite" class="text-sm/6 font-semibold text-white group-data-featured/tier:text-slate-900">
                    Both Sides Color
                  </h3>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=quantity][value=small]:checked]/tiers:hidden group-data-featured/tier:text-slate-900">
                        $4.26
                      </p>
                      <p class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=quantity][value=large]:checked]/tiers:hidden group-data-featured/tier:text-slate-900">
                        $3.71
                      </p>
                      <div class="text-sm">
                        <p class="text-white group-data-featured/tier:text-slate-900">per coin</p>
                        <p class="text-slate-400 group-not-has-[[name=quantity][value=small]:checked]/tiers:hidden group-data-featured/tier:text-slate-500">
                          100 coins
                        </p>
                        <p class="text-slate-400 group-not-has-[[name=quantity][value=large]:checked]/tiers:hidden group-data-featured/tier:text-slate-500">
                          1000 coins
                        </p>
                      </div>
                    </div>
                    <NuxtLink to="/quote" class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 inline-block">
                      Get Quote
                    </NuxtLink>
                  </div>
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white lg:border-t-0">
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Die-struck with soft enamel
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Color on both sides
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        All plating options
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-slate-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Premium option
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabbed Pricing Table Section -->
        <div class="relative bg-slate-50 lg:pt-14">
          <div class="mx-auto max-w-336 px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            
            <!-- Tab Navigation -->
            <div class="mb-16">
              <!-- Enhanced Header Section -->
              <div class="text-center mb-12">
                <p class="text-base font-semibold text-orange-600 mb-3">Transparent Pricing</p>
                <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">Challenge Coin Pricing</h2>
                <p class="text-lg text-slate-400 max-w-2xl mx-auto">Professional military challenge coins with volume discounts. Choose your color option and size to see exact pricing with no hidden fees.</p>
              </div>
              <div class="flex justify-center">
                <div class="inline-flex rounded-lg bg-slate-100 p-1 shadow-sm">
                  <button 
                    type="button"
                    @click.prevent="activePricingTab = 'no-color'" 
                    :class="activePricingTab === 'no-color' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                  >
                    No Color
                  </button>
                  <button 
                    type="button"
                    @click.prevent="activePricingTab = 'one-side'" 
                    :class="activePricingTab === 'one-side' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                  >
                    Color on One Side
                  </button>
                  <button 
                    type="button"
                    @click.prevent="activePricingTab = 'both-sides'" 
                    :class="activePricingTab === 'both-sides' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                  >
                    Both Sides Color
                  </button>
                </div>
              </div>
            </div>

            <!-- Mobile Pricing Tables -->
            <section class="lg:hidden">
              <!-- Mobile No Color Table -->
              <div v-if="activePricingTab === 'no-color'" class="space-y-8">
                <div v-for="qty in quantities" :key="qty" class="rounded-lg bg-white shadow-sm ring-1 ring-slate-900/10 overflow-hidden">
                  <div class="px-6 py-4 border-b border-slate-200" :class="qty === '100' ? 'border-orange-600 bg-orange-50' : ''">
                    <h3 class="text-lg font-semibold" :class="qty === '100' ? 'text-orange-600' : 'text-slate-900'">{{ qty }} Coins</h3>
                    <div v-if="qty === '100'" class="inline-block mt-2">
                      <span class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/30">Most Popular</span>
                    </div>
                  </div>
                  <div class="px-6 py-4">
                    <div class="space-y-3">
                      <div v-for="(pkg, index) in pricingData.noColor" :key="index" class="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                        <span class="text-sm font-medium text-slate-900">{{ pkg.name }}</span>
                        <span class="text-sm font-semibold text-slate-900">${{ pkg.prices[qty] || 'N/A' }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mobile One Side Color Table -->
              <div v-if="activePricingTab === 'one-side'" class="space-y-8">
                <div v-for="qty in quantities" :key="qty" class="rounded-lg bg-white shadow-sm ring-1 ring-slate-900/10 overflow-hidden">
                  <div class="px-6 py-4 border-b border-slate-200" :class="qty === '100' ? 'border-orange-600 bg-orange-50' : ''">
                    <h3 class="text-lg font-semibold" :class="qty === '100' ? 'text-orange-600' : 'text-slate-900'">{{ qty }} Coins</h3>
                    <div v-if="qty === '100'" class="inline-block mt-2">
                      <span class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/30">Most Popular</span>
                    </div>
                  </div>
                  <div class="px-6 py-4">
                    <div class="space-y-3">
                      <div v-for="(pkg, index) in pricingData.oneSide" :key="index" class="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                        <span class="text-sm font-medium text-slate-900">{{ pkg.name }}</span>
                        <span class="text-sm font-semibold text-slate-900">${{ pkg.prices[qty] || 'N/A' }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mobile Both Sides Color Table -->
              <div v-if="activePricingTab === 'both-sides'" class="space-y-8">
                <div v-for="qty in quantities" :key="qty" class="rounded-lg bg-white shadow-sm ring-1 ring-slate-900/10 overflow-hidden">
                  <div class="px-6 py-4 border-b border-slate-200" :class="qty === '100' ? 'border-orange-600 bg-orange-50' : ''">
                    <h3 class="text-lg font-semibold" :class="qty === '100' ? 'text-orange-600' : 'text-slate-900'">{{ qty }} Coins</h3>
                    <div v-if="qty === '100'" class="inline-block mt-2">
                      <span class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/30">Most Popular</span>
                    </div>
                  </div>
                  <div class="px-6 py-4">
                    <div class="space-y-3">
                      <div v-for="(pkg, index) in pricingData.bothSides" :key="index" class="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                        <span class="text-sm font-medium text-slate-900">{{ pkg.name }}</span>
                        <span class="text-sm font-semibold text-slate-900">${{ pkg.prices[qty] || 'N/A' }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Desktop Pricing Tables -->
            <section class="hidden lg:block">
              <!-- No Color Desktop Table -->
              <div v-if="activePricingTab === 'no-color'" class="relative overflow-visible rounded-lg bg-white shadow-sm ring-1 ring-slate-900/10">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-slate-200">
                      <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Size</th>
                      <th v-for="qty in quantities" :key="qty" 
                          class="px-6 text-center text-sm font-semibold relative"
                          :class="[qty === '100' ? 'text-orange-600 pt-8 pb-4' : 'text-slate-900 py-4']">
                        <div v-if="qty === '100'" class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap">
                          <span class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/30">Most Popular</span>
                        </div>
                        <div class="font-semibold">{{ qty }}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    <tr v-for="(pkg, index) in pricingData.noColor" :key="index" class="hover:bg-slate-50">
                      <td class="px-6 py-4 text-sm font-medium text-slate-900">{{ pkg.name }}</td>
                      <td v-for="qty in quantities" :key="qty" 
                          class="px-6 py-4 text-center text-sm font-semibold text-slate-900"
                          :class="qty === '100' ? 'bg-orange-50/50' : ''">
                        ${{ pkg.prices[qty] || 'N/A' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- One Side Color Desktop Table -->
              <div v-if="activePricingTab === 'one-side'" class="relative overflow-visible rounded-lg bg-white shadow-sm ring-1 ring-slate-900/10">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-slate-200">
                      <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Size</th>
                      <th v-for="qty in quantities" :key="qty" 
                          class="px-6 text-center text-sm font-semibold relative"
                          :class="[qty === '100' ? 'text-orange-600 pt-8 pb-4' : 'text-slate-900 py-4']">
                        <div v-if="qty === '100'" class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap">
                          <span class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/30">Most Popular</span>
                        </div>
                        <div class="font-semibold">{{ qty }}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    <tr v-for="(pkg, index) in pricingData.oneSide" :key="index" class="hover:bg-slate-50">
                      <td class="px-6 py-4 text-sm font-medium text-slate-900">{{ pkg.name }}</td>
                      <td v-for="qty in quantities" :key="qty" 
                          class="px-6 py-4 text-center text-sm font-semibold text-slate-900"
                          :class="qty === '100' ? 'bg-orange-50/50' : ''">
                        ${{ pkg.prices[qty] || 'N/A' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Both Sides Color Desktop Table -->
              <div v-if="activePricingTab === 'both-sides'" class="relative overflow-visible rounded-lg bg-white shadow-sm ring-1 ring-slate-900/10">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-slate-200">
                      <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Size</th>
                      <th v-for="qty in quantities" :key="qty" 
                          class="px-6 text-center text-sm font-semibold relative"
                          :class="[qty === '100' ? 'text-orange-600 pt-8 pb-4' : 'text-slate-900 py-4']">
                        <div v-if="qty === '100'" class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap">
                          <span class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/30">Most Popular</span>
                        </div>
                        <div class="font-semibold">{{ qty }}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    <tr v-for="(pkg, index) in pricingData.bothSides" :key="index" class="hover:bg-slate-50">
                      <td class="px-6 py-4 text-sm font-medium text-slate-900">{{ pkg.name }}</td>
                      <td v-for="qty in quantities" :key="qty" 
                          class="px-6 py-4 text-center text-sm font-semibold text-slate-900"
                          :class="qty === '100' ? 'bg-orange-50/50' : ''">
                        ${{ pkg.prices[qty] || 'N/A' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </form>

      <!-- FAQ Section Component -->
      <!-- This would be split into: components/pricing/FAQ.vue -->
      <div class="bg-slate-800 py-24 sm:py-32">
        <div class="mx-auto max-w-336 px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl class="mt-20 divide-y divide-white/10">
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-white lg:col-span-5">
              What's the minimum order quantity?
            </dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-slate-300">
                Our minimum order is 50 coins for all packages. This ensures the best value and quality for your military unit or organization.
              </p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-white lg:col-span-5">
              How long does production take?
            </dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-slate-300">
                Standard production time is 15-20 business days after proof approval. Rush production (7-10 days) is available for Premium and Elite packages for an additional fee.
              </p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-white lg:col-span-5">
              Do you offer military discounts?
            </dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-slate-300">
                Yes! Active duty, veterans, and military organizations receive a 10% discount on all orders. Contact us with your military ID for verification.
              </p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-white lg:col-span-5">
              What file formats do you accept for artwork?
            </dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-slate-300">
                We accept AI, EPS, PDF, PSD, and high-resolution PNG/JPG files. Our design team can also work with sketches, photos, or existing coins to create your design.
              </p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-white lg:col-span-5">
              Can you recreate existing military insignia?
            </dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-slate-300">
                Absolutely! We specialize in military heraldry and can recreate official unit crests, badges, and insignia with precision. We ensure all designs meet military standards and regulations.
              </p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-white lg:col-span-5">
              What payment methods do you accept?
            </dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-slate-300">
                We accept major credit cards, PayPal, government purchase orders, and wire transfers. Military units can also set up net-30 payment terms after credit approval.
              </p>
            </dd>
          </div>
          </dl>
        </div>
      </div>
    </main>

    <!-- Footer Component (would use existing footer) -->
    <!-- This would reference: components/ZeroFooter.vue -->
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variables for tab switching
const activePricingTab = ref('no-color')

// Challenge coin pricing data - organized by color type and size
const rawPricingData = {
  no_color_enamel: {
    description: "No Color Enamel - Metal Coins",
    quantities: [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000],
    pricing: {
      "1.5": [5.32, 3.27, 3.01, 2.80, 2.74, 2.68, 2.57, 2.46, 2.29],
      "1.75": [6.03, 3.60, 3.28, 3.10, 3.04, 2.98, 2.92, 2.84, 2.79],
      "2": [6.31, 3.93, 3.63, 3.40, 3.28, 3.26, 3.20, 3.12, 3.01],
      "2.25": [7.41, 4.93, 4.27, 3.78, 3.72, 3.61, 3.52, 3.48, 3.28],
      "2.5": [8.23, 5.48, 4.94, 4.37, 4.33, 4.16, 4.00, 3.75, 3.61],
      "2.75": [10.71, 6.25, 5.98, 5.63, 5.39, 5.14, 4.71, 4.48, 4.18],
      "3": [12.14, 7.02, 6.97, 6.89, 6.46, 6.11, 5.43, 5.19, 4.74],
      "3.25": [13.36, 7.72, 7.67, 7.58, 7.11, 6.72, 5.98, 5.71, 5.22],
      "3.5": [14.69, 8.49, 8.43, 8.34, 7.82, 7.39, 6.57, 6.29, 5.74],
      "3.75": [16.16, 9.35, 9.28, 9.18, 8.60, 8.13, 7.23, 6.92, 6.32],
      "4": [17.78, 10.29, 10.21, 10.09, 9.46, 8.96, 7.96, 7.61, 6.95]
    }
  },
  one_side_color_enamel: {
    description: "One Side with Color Enamel",
    quantities: [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000],
    pricing: {
      "1.5": [5.76, 3.56, 3.26, 3.04, 2.98, 2.92, 2.82, 2.65, 2.57],
      "1.75": [6.31, 3.93, 3.67, 3.48, 3.40, 3.35, 3.01, 2.91, 2.77],
      "2": [6.97, 4.33, 4.15, 3.92, 3.84, 3.76, 3.40, 3.26, 3.09],
      "2.25": [7.90, 5.22, 5.02, 4.85, 4.80, 4.50, 3.61, 3.34, 3.13],
      "2.5": [9.50, 6.25, 6.09, 5.76, 5.21, 4.85, 4.11, 3.56, 3.28],
      "2.75": [11.53, 6.75, 6.53, 6.42, 5.96, 5.69, 4.92, 4.44, 4.38],
      "3": [12.74, 7.23, 7.12, 7.00, 6.72, 6.53, 5.72, 5.30, 5.04],
      "3.25": [14.02, 7.96, 7.83, 7.70, 7.39, 7.19, 6.29, 5.83, 5.55],
      "3.5": [15.42, 8.75, 8.62, 8.47, 8.14, 7.90, 6.93, 6.43, 6.11],
      "3.75": [16.96, 9.63, 9.48, 9.32, 8.96, 8.69, 7.63, 7.06, 6.71],
      "4": [18.66, 10.60, 10.43, 10.25, 9.85, 9.56, 8.38, 7.78, 7.38]
    }
  },
  both_sides_color_enamel: {
    description: "Both Sides with Color Enamel",
    quantities: [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000],
    pricing: {
      "1.5": [6.20, 3.71, 3.39, 3.28, 3.23, 3.12, 2.90, 2.68, 2.46],
      "1.75": [6.86, 4.26, 4.05, 3.83, 3.76, 3.71, 3.49, 3.38, 3.28],
      "2": [7.19, 4.70, 4.49, 4.37, 4.31, 4.26, 4.04, 3.82, 3.60],
      "2.25": [8.23, 5.34, 5.17, 4.96, 4.90, 4.82, 4.51, 4.26, 4.03],
      "2.5": [10.16, 6.32, 6.09, 5.95, 5.82, 5.77, 5.45, 4.89, 4.35],
      "2.75": [11.81, 6.94, 6.75, 6.60, 6.34, 6.17, 5.51, 5.22, 4.91],
      "3": [14.01, 7.57, 7.43, 7.24, 6.86, 6.57, 6.20, 5.76, 5.47],
      "3.25": [15.41, 8.33, 8.18, 7.97, 7.55, 7.23, 6.82, 6.34, 6.02],
      "3.5": [16.95, 9.17, 8.99, 8.77, 8.30, 7.96, 7.50, 6.97, 6.62],
      "3.75": [18.65, 10.08, 9.89, 9.64, 9.13, 8.75, 8.25, 7.67, 7.28],
      "4": [20.52, 11.09, 10.88, 10.61, 10.05, 9.63, 9.08, 8.44, 8.02]
    }
  }
}

// Transform the raw data - sizes as columns, quantities as rows
const coinSizes = Object.keys(rawPricingData.no_color_enamel.pricing)
const pricingData = ref({
  noColor: coinSizes.map((size) => ({
    name: `${size}"`,
    description: `${size}" diameter`,
    featured: size === '1.75', // Feature the most popular size
    prices: rawPricingData.no_color_enamel.quantities.reduce((acc, qty, qtyIndex) => {
      acc[qty.toString()] = rawPricingData.no_color_enamel.pricing[size][qtyIndex]?.toFixed(2)
      return acc
    }, {})
  })),
  oneSide: coinSizes.map((size) => ({
    name: `${size}"`,
    description: `${size}" diameter`,
    featured: size === '1.75', // Feature the most popular size
    prices: rawPricingData.one_side_color_enamel.quantities.reduce((acc, qty, qtyIndex) => {
      acc[qty.toString()] = rawPricingData.one_side_color_enamel.pricing[size][qtyIndex]?.toFixed(2)
      return acc
    }, {})
  })),
  bothSides: coinSizes.map((size) => ({
    name: `${size}"`,
    description: `${size}" diameter`,
    featured: size === '1.75', // Feature the most popular size
    prices: rawPricingData.both_sides_color_enamel.quantities.reduce((acc, qty, qtyIndex) => {
      acc[qty.toString()] = rawPricingData.both_sides_color_enamel.pricing[size][qtyIndex]?.toFixed(2)
      return acc
    }, {})
  }))
})

// All available quantities for table rows
const quantities = ref(['50', '100', '200', '300', '500', '1000', '2000', '3000', '5000'])

// SEO meta tags
useSeoMeta({
  title: 'Military Challenge Coin Pricing - Starting at $2.98 | US Army Coins',
  description: 'Transparent military challenge coin pricing. No color ($2.98), one side color ($3.35), both sides color ($3.71). Made in USA with volume discounts up to 50% off.',
  ogTitle: 'Military Challenge Coin Pricing - Starting at $2.98',
  ogDescription: 'Professional military challenge coins with transparent pricing. Three color options available with volume discounts.',
  ogImage: '/images/coins/pricing-hero.jpg',
  ogType: 'website',
  ogUrl: 'https://usarmycoins.com/pricing',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Military Challenge Coin Pricing - Starting at $2.98',
  twitterDescription: 'Professional military challenge coins with transparent pricing. Made in USA with fast turnaround.',
  canonical: '/pricing'
})

// Structured data for pricing
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Military Challenge Coins",
  "description": "Professional military challenge coins with transparent pricing and no hidden fees. Made in USA with volume discounts.",
  "brand": {
    "@type": "Brand",
    "name": "US Army Coins"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "US Army Coins",
    "url": "https://usarmycoins.com"
  },
  "category": "Military Challenge Coins",
  "offers": [
    {
      "@type": "Offer",
      "name": "No Color Coins",
      "price": "2.98",
      "priceCurrency": "USD",
      "description": "Die-struck brass design with antique finish only. Most cost-effective option.",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "2.98",
        "maxPrice": "3.60",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "Offer",
      "name": "One Side Color",
      "price": "3.35",
      "priceCurrency": "USD", 
      "description": "Die-struck with soft enamel color on one side only. Popular choice with all plating options.",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "3.35",
        "maxPrice": "3.93",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "Offer",
      "name": "Both Sides Color",
      "price": "3.71",
      "priceCurrency": "USD",
      "description": "Die-struck with soft enamel color on both sides. Premium option with all plating choices.",
      "availability": "https://schema.org/InStock", 
      "validFrom": "2024-01-01",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "3.71",
        "maxPrice": "4.26",
        "priceCurrency": "USD"
      }
    }
  ]
}

// Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "US Army Coins",
  "url": "https://usarmycoins.com",
  "description": "Professional military challenge coin manufacturer specializing in custom coins for all branches of the US military.",
  "sameAs": [
    "https://usarmycoins.com"
  ]
}

// Breadcrumb schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://usarmycoins.com"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Pricing",
      "item": "https://usarmycoins.com/pricing"
    }
  ]
}

// FAQ schema for the inline FAQ section
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the minimum order quantity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our minimum order is 50 coins for all packages. This ensures the best value and quality for your military unit or organization."
      }
    },
    {
      "@type": "Question", 
      "name": "How long does production take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard production time is 10-14 business days after artwork approval. Rush production is available for 7-day delivery with additional fees."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "We accept major credit cards, PayPal, and bank transfers. Payment is required 50% upfront with the remaining balance due before shipping."
      }
    }
  ]
}

// Add structured data to head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(pricingSchema)
    },
    {
      type: 'application/ld+json', 
      innerHTML: JSON.stringify(organizationSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema)
    }
  ]
})
</script>