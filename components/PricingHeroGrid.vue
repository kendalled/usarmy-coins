<template>
  <div class="flow-root bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="relative z-10">
        <h1 class="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          {{ title }}
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          {{ subtitle }}
        </p>
        <div class="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
              <label class="group relative rounded-full px-2.5 py-1 has-checked:bg-indigo-500">
                <input 
                  type="radio" 
                  name="frequency" 
                  value="monthly" 
                  :checked="frequency === 'monthly'"
                  @change="$emit('frequency-change', 'monthly')"
                  class="absolute inset-0 appearance-none rounded-full" 
                />
                <span class="text-white">Monthly</span>
              </label>
              <label class="group relative rounded-full px-2.5 py-1 has-checked:bg-indigo-500">
                <input 
                  type="radio" 
                  name="frequency" 
                  value="annually" 
                  :checked="frequency === 'annually'"
                  @change="$emit('frequency-change', 'annually')"
                  class="absolute inset-0 appearance-none rounded-full" 
                />
                <span class="text-white">Annually</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <!-- Pricing Grid -->
      <div class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
        <svg viewBox="0 0 1208 1024" aria-hidden="true" class="absolute -bottom-48 left-1/2 h-256 -translate-x-1/2 translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
          <ellipse cx="604" cy="512" rx="604" ry="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
          <defs>
            <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div aria-hidden="true" class="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"></div>
        
        <PricingTier
          v-for="tier in tiers"
          :key="tier.name"
          :tier-name="tier.name"
          :monthly-price="tier.monthlyPrice"
          :annual-price="tier.annualPrice"
          :features="tier.features"
          :featured="tier.featured"
          :frequency="frequency"
          @tier-selected="$emit('tier-selected', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Pricing that grows with you'
  },
  subtitle: {
    type: String,
    default: 'Choose an affordable plan that\'s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.'
  },
  frequency: {
    type: String,
    default: 'monthly'
  },
  tiers: {
    type: Array,
    required: true
  }
})

defineEmits(['frequency-change', 'tier-selected'])
</script> 