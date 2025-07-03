<template>
  <div class="min-h-screen bg-slate-900">
    <ZeroNavbar />
    
    <!-- Fixed Navbar + Trust Bar Spacing -->
    <div class="pt-32">
      <!-- Hero Section -->
      <div class="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Coins</span> Gallery
          </h1>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our portfolio of custom military challenge coins crafted for units across all branches of the US Armed Forces
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-white/5 mb-12">
          <div class="flex flex-wrap gap-4 items-center justify-between">
            <!-- Branch Filter -->
            <div class="flex flex-wrap gap-2">
              <button
                v-for="branch in branches"
                :key="branch"
                @click="selectedBranch = branch"
                :class="[
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                  selectedBranch === branch
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                ]"
              >
                {{ branch }}
              </button>
            </div>

            <!-- Sort Controls -->
            <div class="flex items-center gap-4">
              <label class="text-sm text-slate-300">Sort by:</label>
              <select
                v-model="sortBy"
                class="bg-slate-700/50 text-white rounded-lg pl-3 pr-8 py-2 text-sm border border-slate-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[right_8px_center] bg-[length:12px_8px]"
              >
                <option value="recent">Most Recent</option>
                <option value="branch">Military Branch</option>
                <option value="name">Unit Name</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div
            v-for="(coin, index) in filteredCoins"
            :key="index"
            @click="openLightbox(coin, index)"
            class="group cursor-pointer bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-white/5 hover:ring-orange-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Coin Image -->
            <div class="aspect-square overflow-hidden bg-slate-700/50">
              <img
                :src="coin.image"
                :alt="coin.description"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Coin Info -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span :class="getBranchColor(coin.branch)" class="px-2 py-1 rounded-full text-xs font-medium">
                  {{ coin.branch }}
                </span>
                <span class="text-xs text-slate-400">{{ coin.date }}</span>
              </div>
              
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                {{ coin.unit }}
              </h3>
              <p class="text-sm text-slate-300 mb-4">{{ coin.description }}</p>
              
              <!-- Coin Specs -->
              <div class="grid grid-cols-2 gap-2 text-xs text-slate-400">
                <div>Size: {{ coin.size }}</div>
                <div>Plating: {{ coin.plating }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-16" v-if="hasMoreCoins">
          <button
            @click="loadMoreCoins"
            class="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            Load More Coins
          </button>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightboxOpen"
        @click="closeLightbox"
        class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <Transition
          appear
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div @click.stop class="relative transform overflow-hidden bg-slate-800 shadow-2xl sm:max-w-6xl sm:w-full sm:rounded-2xl">
            <!-- Close Button - Absolute positioned -->
            <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                @click="closeLightbox"
                type="button"
                class="rounded-md bg-slate-800 text-slate-400 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-800"
              >
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Image Section -->
              <div class="relative bg-slate-700 lg:order-first">
                <div class="flex h-96 items-center justify-center lg:h-full">
                  <img
                    :src="selectedCoin?.image"
                    :alt="selectedCoin?.description"
                    class="h-full w-full object-contain p-8"
                  />
                </div>
              </div>

              <!-- Content Section -->
              <div class="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                <!-- Header -->
                <div>
                  <div class="mb-4">
                    <div class="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">
                      {{ selectedCoin?.branch }}
                    </div>
                  </div>
                  
                  <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {{ selectedCoin?.unit }}
                  </h2>
                  
                  <p class="mt-4 text-base text-slate-300">
                    {{ selectedCoin?.description }}
                  </p>

                  <!-- Specifications -->
                  <div class="mt-8">
                    <h3 class="text-lg font-medium text-white">Specifications</h3>
                    <dl class="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                      <div>
                        <dt class="font-medium text-white">Size</dt>
                        <dd class="text-slate-300">{{ selectedCoin?.size }}</dd>
                      </div>
                      <div>
                        <dt class="font-medium text-white">Plating</dt>
                        <dd class="text-slate-300">{{ selectedCoin?.plating }}</dd>
                      </div>
                      <div>
                        <dt class="font-medium text-white">Edge</dt>
                        <dd class="text-slate-300">{{ selectedCoin?.edge }}</dd>
                      </div>
                      <div>
                        <dt class="font-medium text-white">Quantity</dt>
                        <dd class="text-slate-300">{{ selectedCoin?.quantity }}</dd>
                      </div>
                      <div>
                        <dt class="font-medium text-white">Completed</dt>
                        <dd class="text-slate-300">{{ selectedCoin?.date }}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <!-- Navigation Footer -->
                <div class="mt-8 flex items-center justify-between border-t border-slate-700 pt-6">
                  <button
                    @click="previousCoin"
                    :disabled="currentIndex === 0"
                    type="button"
                    class="inline-flex items-center gap-x-2 rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-slate-600 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg class="-ml-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                    Previous
                  </button>
                  
                  <span class="text-sm text-slate-400">
                    {{ currentIndex + 1 }} of {{ filteredCoins.length }}
                  </span>
                  
                  <button
                    @click="nextCoin"
                    :disabled="currentIndex === filteredCoins.length - 1"
                    type="button"
                    class="inline-flex items-center gap-x-2 rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-slate-600 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <svg class="-mr-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// SEO Meta
useHead({
  title: 'Our Coins Gallery - US Army Coins',
  meta: [
    { name: 'description', content: 'Browse our portfolio of custom military challenge coins crafted for units across all branches of the US Armed Forces.' },
    { name: 'keywords', content: 'military challenge coins, custom coins, army coins, navy coins, air force coins, marine corps coins' }
  ]
})

// Reactive data
const selectedBranch = ref('All Branches')
const sortBy = ref('recent')
const lightboxOpen = ref(false)
const selectedCoin = ref(null)
const currentIndex = ref(0)
const displayCount = ref(12)


// Branches for filtering
const branches = ['All Branches', 'Army', 'Navy', 'Air Force', 'Marine Corps', 'Coast Guard', 'Space Force']

// Sample coin data (this would typically come from an API or CMS)
const allCoins = ref([
  {
    image: '/images/coins/army-coin-render.png',
    unit: '101st Airborne Division',
    branch: 'Army',
    description: 'Custom challenge coin featuring the Screaming Eagles emblem with airborne wings and division insignia.',
    date: 'March 2024',
    size: '2.0"',
    plating: 'Antique Gold',
    edge: 'Rope Edge',
    quantity: '500 coins'
  },
  {
    image: '/images/coins/navy-coin-render.png',
    unit: 'Naval Special Warfare',
    branch: 'Navy',
    description: 'Elite SEAL team challenge coin with trident emblem and team motto in raised relief.',
    date: 'March 2024',
    size: '1.75"',
    plating: 'Black Nickel',
    edge: 'Cut Edge',
    quantity: '200 coins'
  },
  {
    image: '/images/coins/air-force-coin-render.png',
    unit: '23rd Fighter Wing',
    branch: 'Air Force',
    description: 'Fighter wing challenge coin showcasing F-16 aircraft with wing emblem and base location.',
    date: 'February 2024',
    size: '2.0"',
    plating: 'Silver',
    edge: 'Reeded Edge',
    quantity: '750 coins'
  },
  {
    image: '/images/coins/marine-corps-coin-render.png',
    unit: '2nd Marine Division',
    branch: 'Marine Corps',
    description: 'Marine Corps division coin featuring eagle, globe, and anchor with divisional history.',
    date: 'February 2024',
    size: '1.75"',
    plating: 'Antique Bronze',
    edge: 'Diamond Cut',
    quantity: '1000 coins'
  },
  {
    image: '/images/coins/army-coin-render.png',
    unit: '82nd Airborne Division',
    branch: 'Army',
    description: 'All American division coin with paratrooper wings and AA emblem in vibrant colors.',
    date: 'January 2024',
    size: '2.0"',
    plating: 'Gold',
    edge: 'Rope Edge',
    quantity: '600 coins'
  },
  {
    image: '/images/coins/navy-coin-render.png',
    unit: 'USS Enterprise',
    branch: 'Navy',
    description: 'Aircraft carrier challenge coin commemorating deployment with ship silhouette.',
    date: 'January 2024',
    size: '2.25"',
    plating: 'Silver',
    edge: 'Cut Edge',
    quantity: '2000 coins'
  },
  {
    image: '/images/coins/air-force-coin-render.png',
    unit: '1st Fighter Wing',
    branch: 'Air Force',
    description: 'Combat fighter wing coin featuring F-22 Raptor with wing heritage design.',
    date: 'December 2023',
    size: '1.75"',
    plating: 'Antique Silver',
    edge: 'Reeded Edge',
    quantity: '800 coins'
  },
  {
    image: '/images/coins/marine-corps-coin-render.png',
    unit: '1st Marine Expeditionary Force',
    branch: 'Marine Corps',
    description: 'MEF challenge coin with amphibious assault theme and unit lineage.',
    date: 'December 2023',
    size: '2.0"',
    plating: 'Copper',
    edge: 'Diamond Cut',
    quantity: '1200 coins'
  },
  {
    image: '/images/coins/coast-guard-coin-render.png',
    unit: 'Coast Guard Station Miami',
    branch: 'Coast Guard',
    description: 'Coast Guard station coin featuring lighthouse and rescue operations theme.',
    date: 'November 2023',
    size: '1.75"',
    plating: 'Antique Silver',
    edge: 'Rope Edge',
    quantity: '400 coins'
  },
  {
    image: '/images/coins/space-force-coin-render.png',
    unit: 'Space Operations Command',
    branch: 'Space Force',
    description: 'Space Force command coin with orbital design and guardian wings.',
    date: 'October 2023',
    size: '2.0"',
    plating: 'Black Nickel',
    edge: 'Cut Edge',
    quantity: '300 coins'
  }
])

// Computed properties
const filteredCoins = computed(() => {
  let filtered = allCoins.value

  // Filter by branch
  if (selectedBranch.value !== 'All Branches') {
    filtered = filtered.filter(coin => coin.branch === selectedBranch.value)
  }

  // Sort coins
  filtered = [...filtered].sort((a, b) => {
    switch (sortBy.value) {
      case 'recent':
        return new Date(b.date) - new Date(a.date)
      case 'branch':
        return a.branch.localeCompare(b.branch)
      case 'name':
        return a.unit.localeCompare(b.unit)
      default:
        return 0
    }
  })

  return filtered.slice(0, displayCount.value)
})

const hasMoreCoins = computed(() => {
  let totalFiltered = allCoins.value
  if (selectedBranch.value !== 'All Branches') {
    totalFiltered = totalFiltered.filter(coin => coin.branch === selectedBranch.value)
  }
  return displayCount.value < totalFiltered.length
})

// Methods
const getBranchColor = (branch) => {
  const colors = {
    'Army': 'bg-green-600/20 text-green-400',
    'Navy': 'bg-blue-600/20 text-blue-400',
    'Air Force': 'bg-sky-600/20 text-sky-400',
    'Marine Corps': 'bg-red-600/20 text-red-400',
    'Coast Guard': 'bg-orange-600/20 text-orange-400',
    'Space Force': 'bg-purple-600/20 text-purple-400'
  }
  return colors[branch] || 'bg-slate-600/20 text-slate-400'
}

const openLightbox = (coin, index) => {
  selectedCoin.value = coin
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  selectedCoin.value = null
  document.body.style.overflow = 'auto'
}

const nextCoin = () => {
  if (currentIndex.value < filteredCoins.value.length - 1) {
    currentIndex.value++
    selectedCoin.value = filteredCoins.value[currentIndex.value]
  }
}

const previousCoin = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    selectedCoin.value = filteredCoins.value[currentIndex.value]
  }
}

const loadMoreCoins = () => {
  displayCount.value += 8
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  
  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowRight':
      nextCoin()
      break
    case 'ArrowLeft':
      previousCoin()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>