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
            class="group cursor-pointer bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-white/5 hover:ring-orange-500/20 transition-all duration-300 hover:-translate-y-2"
          >
            <!-- Coin Image -->
            <div class="aspect-square overflow-hidden bg-slate-700/50">
              <img
                :src="coin.image"
                :alt="coin.description"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
    <div
      v-if="lightboxOpen"
      @click="closeLightbox"
      class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div @click.stop class="max-w-4xl w-full bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-6 border-b border-slate-700">
          <div>
            <h3 class="text-2xl font-bold text-white">{{ selectedCoin?.unit }}</h3>
            <p class="text-slate-300">{{ selectedCoin?.branch }} • {{ selectedCoin?.date }}</p>
          </div>
          <button @click="closeLightbox" class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="grid md:grid-cols-2 gap-8 p-6">
          <!-- Large Image -->
          <div class="aspect-square bg-slate-700/50 rounded-lg overflow-hidden">
            <img
              :src="selectedCoin?.image"
              :alt="selectedCoin?.description"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Coin Details -->
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-semibold text-white mb-2">Description</h4>
              <p class="text-slate-300">{{ selectedCoin?.description }}</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <h5 class="font-medium text-white mb-1">Size</h5>
                <p class="text-slate-300">{{ selectedCoin?.size }}</p>
              </div>
              <div>
                <h5 class="font-medium text-white mb-1">Plating</h5>
                <p class="text-slate-300">{{ selectedCoin?.plating }}</p>
              </div>
              <div>
                <h5 class="font-medium text-white mb-1">Edge</h5>
                <p class="text-slate-300">{{ selectedCoin?.edge }}</p>
              </div>
              <div>
                <h5 class="font-medium text-white mb-1">Quantity</h5>
                <p class="text-slate-300">{{ selectedCoin?.quantity }}</p>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex items-center justify-between pt-6 border-t border-slate-700">
              <button
                @click="previousCoin"
                :disabled="currentIndex === 0"
                class="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <span class="text-slate-400">{{ currentIndex + 1 }} of {{ filteredCoins.length }}</span>
              
              <button
                @click="nextCoin"
                :disabled="currentIndex === filteredCoins.length - 1"
                class="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

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
    image: '/tests/test_1.jpeg',
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
    image: '/tests/test_2.jpeg',
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
    image: '/tests/test_3.jpeg',
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
    image: '/tests/test_4.jpeg',
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