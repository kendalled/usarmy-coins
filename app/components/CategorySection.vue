<template>
  <!-- Category section -->
  <section aria-labelledby="category-heading" class="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">Shop by Military Branch</h2>
        <a href="#" class="hidden text-sm font-semibold text-yellow-600 hover:text-yellow-500 sm:block">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div class="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              <!-- todo: zoom images on hover -->
              <a v-for="branch in branches" :href="branch.link" :title="'Custom ' + branch.name + ' Challenge Coins'" class="relative bg-gray-100 flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 transition-opacity xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img :src="branch.image" :alt="branch.name + ' Challenge Coin'" class="size-full object-cover">
                </span>
                <!-- was: bg-opacity-50 -->
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-gray-800 opacity-75"></span>
                <span class="relative mt-auto text-center text-xl font-bold text-white">{{ branch.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 px-4 sm:hidden">
        <a href="#" class="block text-sm font-semibold text-yellow-600 hover:text-yellow-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>
</template>

<script setup>
const branches = [
  {
    name: 'US Army',
    image: '/images/coins/army-coin-render.png',
    link: '/army-challenge-coins'
  },
  {
    name: 'Navy',
    image: '/images/coins/navy-coin-render.png',
    link: '/'
  },
  {
    name: 'Air Force',
    image: '/images/coins/air-force-coin-render.png',
    link: '/'
  },
  {
    name: 'Marine Corps',
    image: '/images/coins/marine-corps-coin-render.png',
    link: '/'
  },
  {
    name: 'Coast Guard',
    image: '/images/coins/coast-guard-coin-render.png',
    link: '/'
  }
]
</script>