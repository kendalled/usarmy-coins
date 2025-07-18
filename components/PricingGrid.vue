<template>
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
</template>

<script setup>
defineProps({
  tiers: {
    type: Array,
    required: true
  },
  frequency: {
    type: String,
    default: 'monthly'
  }
})

defineEmits(['tier-selected'])
</script>