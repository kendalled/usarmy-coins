<template>
  <div class="flow-root bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
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
  }
})

defineEmits(['frequency-change'])
</script>