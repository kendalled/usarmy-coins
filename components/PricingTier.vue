<template>
  <div 
    :class="[
      'group/tier relative rounded-2xl',
      featured 
        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10' 
        : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0'
    ]"
    :data-featured="featured"
  >
    <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
      <h3 :id="`tier-${tierName.toLowerCase()}`" class="text-sm/6 font-semibold text-white group-data-featured/tier:text-gray-900">
        {{ tierName }}
      </h3>
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
        <div class="mt-2 flex items-center gap-x-4">
          <p 
            :class="[
              'text-4xl font-semibold tracking-tight text-white group-data-featured/tier:text-gray-900',
              frequency === 'monthly' ? 'block' : 'hidden'
            ]"
          >
            ${{ monthlyPrice }}
          </p>
          <p 
            :class="[
              'text-4xl font-semibold tracking-tight text-white group-data-featured/tier:text-gray-900',
              frequency === 'annually' ? 'block' : 'hidden'
            ]"
          >
            ${{ annualPrice }}
          </p>
          <div class="text-sm">
            <p class="text-white group-data-featured/tier:text-gray-900">USD</p>
            <p 
              :class="[
                'text-gray-400 group-data-featured/tier:text-gray-500',
                frequency === 'monthly' ? 'block' : 'hidden'
              ]"
            >
              Billed monthly
            </p>
            <p 
              :class="[
                'text-gray-400 group-data-featured/tier:text-gray-500',
                frequency === 'annually' ? 'block' : 'hidden'
              ]"
            >
              Billed annually
            </p>
          </div>
        </div>
        <button 
          type="submit" 
          name="tier" 
          :value="tierName.toLowerCase()" 
          :aria-describedby="`tier-${tierName.toLowerCase()}`"
          class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white group-data-featured/tier:bg-indigo-600 group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-featured/tier:focus-visible:outline-indigo-600"
          @click="$emit('tier-selected', tierName.toLowerCase())"
        >
          Buy this plan
        </button>
      </div>
      <div class="mt-8 flow-root sm:mt-10">
        <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-gray-900/5 group-data-featured/tier:border-gray-900/5 group-data-featured/tier:text-gray-600 lg:border-t-0">
          <li v-for="feature in features" :key="feature" class="flex gap-x-3 py-2">
            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-gray-500 group-data-featured/tier:text-indigo-600">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tierName: {
    type: String,
    required: true
  },
  monthlyPrice: {
    type: Number,
    required: true
  },
  annualPrice: {
    type: Number,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  frequency: {
    type: String,
    default: 'monthly'
  }
})

defineEmits(['tier-selected'])
</script>