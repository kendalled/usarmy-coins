<template>
  <div class="relative bg-gray-50 lg:pt-14">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <!-- Mobile comparison -->
      <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
        <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>
        <div class="mx-auto max-w-2xl space-y-16">
          <div 
            v-for="tier in tiers" 
            :key="tier.name"
            class="border-t border-gray-900/10"
          >
            <div 
              :class="[
                '-mt-px pt-10',
                tier.featured 
                  ? 'w-72 border-t-2 border-indigo-600 md:w-80' 
                  : 'w-72 border-t-2 border-transparent md:w-80'
              ]"
            >
              <h3 :class="tier.featured ? 'text-sm/6 font-semibold text-indigo-600' : 'text-sm/6 font-semibold text-gray-900'">
                {{ tier.name }}
              </h3>
              <p class="mt-1 text-sm/6 text-gray-600">{{ tier.description }}</p>
            </div>

            <div class="mt-10 space-y-10">
              <div v-for="category in comparisonCategories" :key="category.name">
                <h4 class="text-sm/6 font-semibold text-gray-900">{{ category.name }}</h4>
                <div class="relative mt-6">
                  <div aria-hidden="true" class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-xs sm:block"></div>
                  <div 
                    :class="[
                      'relative rounded-lg bg-white shadow-xs sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                      tier.featured 
                        ? 'ring-2 ring-indigo-600' 
                        : 'ring-1 ring-gray-900/10'
                    ]"
                  >
                    <dl class="divide-y divide-gray-200 text-sm/6">
                      <div 
                        v-for="feature in category.features" 
                        :key="feature.name"
                        class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                      >
                        <dt class="pr-4 text-gray-600">{{ feature.name }}</dt>
                        <dd class="flex items-center justify-end sm:justify-center sm:px-4">
                          <svg 
                            v-if="feature.tiers[tier.name] === true"
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            data-slot="icon" 
                            aria-hidden="true" 
                            :class="tier.featured ? 'mx-auto size-5 text-indigo-600' : 'mx-auto size-5 text-indigo-600'"
                          >
                            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                          </svg>
                          <svg 
                            v-else-if="feature.tiers[tier.name] === false"
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            data-slot="icon" 
                            aria-hidden="true" 
                            class="mx-auto size-5 text-gray-400"
                          >
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                          </svg>
                          <span 
                            v-else 
                            :class="tier.featured && feature.tiers[tier.name] !== '1' && feature.tiers[tier.name] !== '3' ? 'font-semibold text-indigo-600' : 'text-gray-900'"
                          >
                            {{ feature.tiers[tier.name] }}
                          </span>
                          <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : feature.tiers[tier.name] === false ? 'No' : feature.tiers[tier.name] }}</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div 
                    aria-hidden="true" 
                    :class="[
                      'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                      tier.featured 
                        ? 'ring-2 ring-indigo-600' 
                        : 'ring-1 ring-gray-900/10'
                    ]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Desktop comparison -->
      <section aria-labelledby="comparison-heading" class="hidden lg:block">
        <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>
        <div class="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
          <div 
            v-for="tier in tiers" 
            :key="tier.name"
            aria-hidden="true" 
            class="-mt-px"
          >
            <div 
              :class="[
                'pt-10',
                tier.featured 
                  ? 'border-t-2 border-indigo-600' 
                  : 'border-t-2 border-transparent'
              ]"
            >
              <p :class="tier.featured ? 'text-sm/6 font-semibold text-indigo-600' : 'text-sm/6 font-semibold text-gray-900'">
                {{ tier.name }}
              </p>
              <p class="mt-1 text-sm/6 text-gray-600">{{ tier.description }}</p>
            </div>
          </div>
        </div>

        <div class="-mt-6 space-y-16">
          <div v-for="category in comparisonCategories" :key="category.name">
            <h3 class="text-sm/6 font-semibold text-gray-900">{{ category.name }}</h3>
            <div class="relative -mx-8 mt-10">
              <div aria-hidden="true" class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block">
                <div class="size-full rounded-lg bg-white shadow-xs"></div>
                <div class="size-full rounded-lg bg-white shadow-xs"></div>
                <div class="size-full rounded-lg bg-white shadow-xs"></div>
              </div>

              <table class="relative w-full border-separate border-spacing-x-8">
                <thead>
                  <tr class="text-left">
                    <th scope="col"><span class="sr-only">Feature</span></th>
                    <th v-for="tier in tiers" :key="tier.name" scope="col">
                      <span class="sr-only">{{ tier.name }} tier</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(feature, index) in category.features" :key="feature.name">
                    <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900">
                      {{ feature.name }}
                      <div v-if="index < category.features.length - 1" class="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
                    </th>
                    <td 
                      v-for="tier in tiers" 
                      :key="tier.name"
                      class="relative w-1/4 px-4 py-0 text-center"
                    >
                      <span class="relative size-full py-3">
                        <svg 
                          v-if="feature.tiers[tier.name] === true"
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          data-slot="icon" 
                          aria-hidden="true" 
                          class="mx-auto size-5 text-indigo-600"
                        >
                          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        <svg 
                          v-else-if="feature.tiers[tier.name] === false"
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          data-slot="icon" 
                          aria-hidden="true" 
                          class="mx-auto size-5 text-gray-400"
                        >
                          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                        <span 
                          v-else 
                          :class="tier.featured && feature.tiers[tier.name] !== '1' && feature.tiers[tier.name] !== '3' ? 'text-sm/6 font-semibold text-indigo-600' : 'text-sm/6 text-gray-900'"
                        >
                          {{ feature.tiers[tier.name] }}
                        </span>
                        <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : feature.tiers[tier.name] === false ? 'No' : feature.tiers[tier.name] }}</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div aria-hidden="true" class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block">
                <div 
                  v-for="tier in tiers" 
                  :key="tier.name"
                  :class="[
                    'rounded-lg',
                    tier.featured 
                      ? 'ring-2 ring-indigo-600' 
                      : 'ring-1 ring-gray-900/10'
                  ]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tiers: {
    type: Array,
    required: true
  },
  comparisonCategories: {
    type: Array,
    required: true
  }
})
</script>