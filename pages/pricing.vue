<template>
  <div class="bg-white">
    <ZeroNavbar />
    
    <main>
      <!-- Pricing section -->
      <form class="group/tiers isolate overflow-hidden">
        <div class="flow-root bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="relative z-10">
              <h1 class="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">Transparent Pricing for Premium Challenge Coins</h1>
              <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Premium military challenge coins with no hidden fees. Volume discounts up to 51% off. Every coin backed by our satisfaction guarantee and made in the USA.</p>
              <div class="mt-16 flex justify-center">
                <fieldset aria-label="Color options">
                  <div class="grid grid-cols-3 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                    <label 
                      v-for="option in colorOptions" 
                      :key="option.id"
                      class="group relative rounded-full px-2.5 py-1 has-checked:bg-orange-500"
                    >
                      <input 
                        type="radio" 
                        name="colorOption" 
                        :value="option.id" 
                        v-model="selectedColorOption"
                        class="absolute inset-0 appearance-none rounded-full" 
                      />
                      <span class="text-white">{{ option.name }}</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              <svg viewBox="0 0 1208 1024" aria-hidden="true" class="absolute -bottom-48 left-1/2 h-256 -translate-x-1/2 translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                <ellipse cx="604" cy="512" rx="604" ry="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
                <defs>
                  <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                    <stop stop-color="#f97316" />
                    <stop offset="1" stop-color="#ea580c" />
                  </radialGradient>
                </defs>
              </svg>
              <div aria-hidden="true" class="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"></div>
              
              <!-- Size Options -->
              <div class="group/tier relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 class="text-sm/6 font-semibold text-white">Small Size</h3>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p class="text-4xl font-semibold tracking-tight text-white">
                        ${{ getLowestPrice('1.50') }}
                      </p>
                      <div class="text-sm">
                        <p class="text-white">USD</p>
                        <p class="text-gray-400">Starting at 1.50"</p>
                      </div>
                    </div>
                    <NuxtLink 
                      to="/"
                      class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Get Quote
                    </NuxtLink>
                  </div>
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white lg:border-t-0">
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-gray-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        1.50" - 1.75" diameter
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-gray-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Perfect for individual recognition
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-gray-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Free digital proofs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <!-- Standard Size (Featured) -->
              <div data-featured="true" class="group/tier relative z-10 rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/10">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 class="text-sm/6 font-semibold text-gray-900">Standard Size</h3>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p class="text-4xl font-semibold tracking-tight text-gray-900">
                        ${{ getLowestPrice('2.0') }}
                      </p>
                      <div class="text-sm">
                        <p class="text-gray-900">USD</p>
                        <p class="text-gray-500">Starting at 2.0"</p>
                      </div>
                    </div>
                    <NuxtLink 
                      to="/"
                      class="w-full rounded-md bg-orange-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      Get Quote
                    </NuxtLink>
                  </div>
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" class="-my-2 divide-y divide-gray-900/5 border-t border-gray-900/5 text-sm/6 text-gray-600 lg:border-t-0">
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        2.0" - 2.5" diameter
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Most popular military size
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Perfect detail visibility
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Free shipping over $500
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Rush orders available
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-orange-600">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Made in USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <!-- Large Size -->
              <div class="group/tier relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 class="text-sm/6 font-semibold text-white">Large Size</h3>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p class="text-4xl font-semibold tracking-tight text-white">
                        ${{ getLowestPrice('3.0') }}
                      </p>
                      <div class="text-sm">
                        <p class="text-white">USD</p>
                        <p class="text-gray-400">Starting at 2.75"</p>
                      </div>
                    </div>
                    <NuxtLink 
                      to="/"
                      class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Get Quote
                    </NuxtLink>
                  </div>
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white lg:border-t-0">
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-gray-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        2.75" - 3.0" diameter
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-gray-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Maximum artwork detail
                      </li>
                      <li class="flex gap-x-3 py-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 flex-none text-gray-500">
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        Premium presentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative bg-gray-50 lg:pt-14">
          <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            
            <!-- Detailed Pricing Comparison (lg+) -->
            <section aria-labelledby="comparison-heading" class="mt-16">
              <h2 id="comparison-heading" class="text-3xl font-semibold text-gray-900 mb-8">Complete Pricing Breakdown</h2>
              
              
              <div class="overflow-x-auto">
                <table class="w-full min-w-full border-collapse bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Size</th>
                      <th scope="col" class="px-6 py-4 text-center text-sm font-semibold text-gray-900">50 Qty</th>
                      <th scope="col" class="px-6 py-4 text-center text-sm font-semibold text-gray-900">100 Qty</th>
                      <th scope="col" class="px-6 py-4 text-center text-sm font-semibold text-gray-900">300 Qty</th>
                      <th scope="col" class="px-6 py-4 text-center text-sm font-semibold text-gray-900">500 Qty</th>
                      <th scope="col" class="px-6 py-4 text-center text-sm font-semibold text-gray-900">1000 Qty</th>
                      <th scope="col" class="px-6 py-4 text-center text-sm font-semibold text-gray-900">2000 Qty</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="(sizeData, size) in getCurrentPricing()" :key="size" class="hover:bg-gray-50">
                      <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ size }}</td>
                      <td class="px-6 py-4 text-center text-sm text-gray-700">${{ sizeData['50'] }}</td>
                      <td class="px-6 py-4 text-center text-sm text-gray-700">${{ sizeData['100'] }}</td>
                      <td class="px-6 py-4 text-center text-sm text-gray-700">${{ sizeData['300'] }}</td>
                      <td class="px-6 py-4 text-center text-sm text-gray-700">${{ sizeData['500'] }}</td>
                      <td class="px-6 py-4 text-center text-sm text-gray-700">${{ sizeData['1000'] }}</td>
                      <td class="px-6 py-4 text-center text-sm text-gray-700">${{ sizeData['2000'] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-500">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Prices shown are per coin. Save up to 51% with larger quantities.</span>
              </div>
            </section>
            
            <!-- Value Propositions -->
            <section class="mt-24">
              <h2 class="text-3xl font-semibold text-gray-900 text-center mb-16">Why Choose US Army Coins?</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
                  <p class="text-gray-600">Museum-quality metals, detailed enamel work, and precision craftsmanship. Every coin is made to last generations.</p>
                </div>
                
                <div class="text-center">
                  <div class="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p class="text-gray-600">No hidden fees, no surprises. What you see is what you pay. Free shipping on orders over $500.</p>
                </div>
                
                <div class="text-center">
                  <div class="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                  <p class="text-gray-600">Standard 10-14 day production. Rush orders available. We understand military timelines and deliver on schedule.</p>
                </div>
                
                <div class="text-center">
                  <div class="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Made in USA</h3>
                  <p class="text-gray-600">Proudly manufactured in the United States with American materials and craftsmanship. Supporting our troops starts here.</p>
                </div>
                
                <div class="text-center">
                  <div class="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Custom Design</h3>
                  <p class="text-gray-600">Free digital proofs and unlimited revisions. Our design team works with you to create the perfect coin.</p>
                </div>
                
                <div class="text-center">
                  <div class="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                  <p class="text-gray-600">100% satisfaction guaranteed. If you're not completely happy with your coins, we'll make it right.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </form>

      <!-- FAQ section -->
      <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8 pb-24">
        <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently Asked Questions</h2>
        <dl class="mt-20 divide-y divide-gray-900/10">
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">What materials are used in your challenge coins?</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-gray-600">Our challenge coins are crafted from high-quality metals including brass, copper, and zinc alloy. Each coin features durable enamel finishes and premium plating options including antique gold, silver, copper, and black metal finishes that maintain their appearance over time.</p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">How long does it take to receive my challenge coins?</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-gray-600">Standard production time is 10-14 business days after artwork approval. We also offer rush production for 7-day delivery with additional fees. All orders include free shipping via FedEx Ground for orders over $500.</p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">Can I see a proof before my coins are manufactured?</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-gray-600">Absolutely! We provide detailed digital proofs and offer unlimited revisions at no extra charge. We won't begin production until you're completely satisfied with the design. This ensures your coins meet your exact specifications and expectations.</p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">What is the minimum order quantity?</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-gray-600">Our minimum order is 50 coins. We offer volume discounts starting at 100 coins with savings up to 51% on larger orders. The more you order, the better the per-unit price becomes.</p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">Do you offer custom shapes and sizes?</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-gray-600">Yes! While our standard sizes range from 1.5" to 3.0" in diameter, we can create custom shapes and sizes to match your specific requirements. Custom shapes include dog tags, shields, badges, and virtually any design you can imagine.</p>
            </dd>
          </div>
          <div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">Are your coins made in the USA?</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base/7 text-gray-600">Yes, we proudly manufacture all our challenge coins in the United States using American craftsmanship and the highest quality materials. We believe in supporting American manufacturing while delivering superior products to our military personnel.</p>
            </dd>
          </div>
        </dl>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Meta tags
useHead({
  title: 'Challenge Coin Pricing | US Army Coins',
  meta: [
    {
      name: 'description',
      content: 'Transparent pricing for premium military challenge coins. Volume discounts up to 51% off. Free digital proofs, free shipping over $500, and made in USA.'
    }
  ]
})

// Reactive data
const selectedColorOption = ref('no-color')

// Color options and their pricing
const colorOptions = [
  {
    id: 'no-color',
    name: 'No Color',
    description: 'Classic metal finish with raised and recessed details. Traditional military coin appearance with premium plating options.'
  },
  {
    id: 'both-sides',
    name: 'Both Sides',
    description: 'Full color enamel on front and back. Maximum visual impact with vibrant colors and detailed artwork on both sides.'
  },
  {
    id: 'one-side',
    name: 'One Side',
    description: 'Color enamel on one side, metal finish on the other. Perfect balance of tradition and modern design.'
  }
]

// Pricing matrices for each color option
const pricingData = {
  'no-color': {
    '1.50"': { '50': '4.85', '100': '2.96', '300': '2.50', '500': '2.44', '1000': '2.40', '2000': '2.35' },
    '1.75"': { '50': '5.35', '100': '3.22', '300': '2.80', '500': '2.73', '1000': '2.70', '2000': '2.64' },
    '2.0"': { '50': '5.80', '100': '3.52', '300': '3.06', '500': '2.97', '1000': '2.94', '2000': '2.88' },
    '2.25"': { '50': '6.85', '100': '4.37', '300': '3.69', '500': '3.49', '1000': '3.42', '2000': '3.37' },
    '2.5"': { '50': '7.26', '100': '4.95', '300': '3.95', '500': '3.91', '1000': '3.75', '2000': '3.70' },
    '2.75"': { '50': '8.29', '100': '5.66', '300': '5.10', '500': '4.88', '1000': '4.66', '2000': '4.61' },
    '3.0"': { '50': '9.19', '100': '6.37', '300': '6.25', '500': '5.86', '1000': '5.53', '2000': '5.48' }
  },
  'both-sides': {
    '1.50"': { '50': '5.58', '100': '3.39', '300': '3.00', '500': '2.93', '1000': '2.85', '2000': '2.80' },
    '1.75"': { '50': '6.32', '100': '3.85', '300': '3.46', '500': '3.42', '1000': '3.37', '2000': '3.32' },
    '2.0"': { '50': '7.05', '100': '4.29', '300': '3.97', '500': '3.92', '1000': '3.87', '2000': '3.82' },
    '2.25"': { '50': '7.67', '100': '4.85', '300': '4.51', '500': '4.45', '1000': '4.38', '2000': '4.33' },
    '2.5"': { '50': '8.61', '100': '5.75', '300': '5.41', '500': '5.29', '1000': '5.28', '2000': '5.23' },
    '2.75"': { '50': '9.51', '100': '6.32', '300': '6.00', '500': '5.77', '1000': '5.62', '2000': '5.57' },
    '3.0"': { '50': '10.56', '100': '6.88', '300': '6.59', '500': '6.22', '1000': '5.98', '2000': '5.93' }
  },
  'one-side': {
    '1.50"': { '50': '5.25', '100': '3.17', '300': '2.73', '500': '2.68', '1000': '2.63', '2000': '2.58' },
    '1.75"': { '50': '5.83', '100': '3.49', '300': '3.13', '500': '3.07', '1000': '3.03', '2000': '2.97' },
    '2.0"': { '50': '6.40', '100': '3.93', '300': '3.54', '500': '3.49', '1000': '3.40', '2000': '3.37' },
    '2.25"': { '50': '7.22', '100': '4.63', '300': '4.21', '500': '4.18', '1000': '4.12', '2000': '4.08' },
    '2.5"': { '50': '8.24', '100': '5.66', '300': '5.20', '500': '4.70', '1000': '4.45', '2000': '4.33' },
    '2.75"': { '50': '8.97', '100': '6.11', '300': '5.78', '500': '5.41', '1000': '5.15', '2000': '5.10' },
    '3.0"': { '50': '9.95', '100': '6.45', '300': '6.34', '500': '6.09', '1000': '5.90', '2000': '5.85' }
  }
}

// Methods
const getCurrentOption = () => {
  return colorOptions.find(option => option.id === selectedColorOption.value)
}

const getCurrentPricing = () => {
  return pricingData[selectedColorOption.value]
}

const getLowestPrice = (sizeCategory) => {
  const pricing = pricingData[selectedColorOption.value]
  let lowestPrice = Infinity
  
  if (sizeCategory === '1.50') {
    // Small sizes: 1.50" - 1.75"
    lowestPrice = Math.min(
      parseFloat(pricing['1.50"']['2000']),
      parseFloat(pricing['1.75"']['2000'])
    )
  } else if (sizeCategory === '2.0') {
    // Standard sizes: 2.0" - 2.5"
    lowestPrice = Math.min(
      parseFloat(pricing['2.0"']['2000']),
      parseFloat(pricing['2.25"']['2000']),
      parseFloat(pricing['2.5"']['2000'])
    )
  } else if (sizeCategory === '3.0') {
    // Large sizes: 2.75" - 3.0"
    lowestPrice = Math.min(
      parseFloat(pricing['2.75"']['2000']),
      parseFloat(pricing['3.0"']['2000'])
    )
  }
  
  return lowestPrice.toFixed(2)
}
</script>