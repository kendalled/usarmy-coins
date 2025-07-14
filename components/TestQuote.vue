<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/30 pt-32 pb-32">

    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb" class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem] py-3">
      <div class="flex items-center space-x-2 text-sm">
        <a href="/#our-coins" class="text-orange-500 hover:text-orange-400 font-medium">Challenge Coins</a>
        <svg class="h-4 w-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-400 font-medium">{{ props.breadcrumbText }}</span>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem]">
      <!-- Page Title -->
      <h1 class="text-3xl sm:text-4xl font-bold text-white text-center mb-16">{{ props.pageTitle }}</h1>

      <div class="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-12">
        <!-- Left Column -->
        <div class="lg:col-span-4 space-y-8">
          <!-- Main Product Image -->
          <div class="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-xl ring-1 ring-white/5">
            <img 
              :src="thumbnails[selectedImage]" 
              :alt="props.pageTitle"
              class="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            >
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="bg-black/20 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/5">
            <div class="grid grid-cols-6 gap-3">
              <button 
                v-for="(image, index) in thumbnails" 
                :key="index"
                @click="selectedImage = index"
                class="aspect-square rounded-lg overflow-hidden ring-2 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20"
                :class="selectedImage === index ? 'ring-orange-500 scale-105' : 'ring-gray-700/50 hover:ring-gray-600'"
              >
                <img :src="image" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover">
              </button>
            </div>
          </div>

          <!-- Product Description Tabs -->
          <div class="bg-black/20 backdrop-blur-sm rounded-xl ring-1 ring-white/5 shadow-lg">
            <div class="grid grid-cols-4 divide-x divide-amber-900/30">
              <button 
                v-for="tab in tabs" 
                :key="tab"
                @click="activeTab = tab"
                class="py-4 text-sm font-medium transition-colors duration-200 relative"
                :class="activeTab === tab ? 'text-orange-500' : 'text-gray-400 hover:text-white'"
              >
                {{ tab }}
                <div 
                  v-if="activeTab === tab" 
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                ></div>
              </button>
            </div>
            <div class="p-6">
              <div v-if="activeTab === 'Description'" class="text-gray-300 leading-relaxed">
                <p class="text-base">Military challenge coins are a time-honored tradition representing unit pride, achievement, and camaraderie. Our premium challenge coins feature high-quality metal construction with detailed enamel work. Each coin is crafted to honor military service and can be customized with unit insignia, mottos, and commemorative designs. Perfect for recognition ceremonies, unit gifts, and preserving military heritage.</p>
              </div>
              <div v-else-if="activeTab === 'Artwork'" class="text-gray-300">
                <p class="text-base">Our design team works with you to create custom artwork that captures your unit's identity and mission. We provide digital proofs and unlimited revisions to ensure your vision comes to life.</p>
              </div>
              <div v-else-if="activeTab === 'Turnaround'" class="text-gray-300">
                <p class="text-base">Standard production time is 10-14 business days after artwork approval. Rush orders available for 7-day delivery with additional fees.</p>
              </div>
              <div v-else-if="activeTab === 'Shipping'" class="text-gray-300">
                <p class="text-base">Free shipping on orders over $500. Standard shipping via FedEx Ground. Expedited shipping options available.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-5 space-y-6">
          <!-- Step 1: Size & Quantity -->
          <div class="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-white/5">
            <!-- Header with step indicator -->
            <div class="flex items-center gap-4 mb-6">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold text-sm shadow-lg">
                1
              </div>
              <h2 class="text-lg font-medium text-white tracking-tight">Size & Quantity</h2>
              <div class="ml-auto text-slate-400 text-sm font-medium">
                {{ selectedSize }}" | {{ formatQuantity(selectedQuantity) }} Qty
              </div>
            </div>

            <!-- Selection grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Size selection -->
              <div>
                <h3 class="text-sm font-medium text-slate-300 mb-3">Select size</h3>
                <div class="space-y-2.5">
                  <label v-for="size in sizes" :key="size" class="block">
                    <div class="flex items-center bg-slate-700/50 rounded-lg p-3 cursor-pointer hover:bg-slate-700 transition-colors ring-1 ring-white/5" 
                         :class="{ 'ring-2 ring-orange-500 bg-slate-700': selectedSize === size }">
                      <input 
                        type="radio" 
                        name="size" 
                        :value="size" 
                        v-model="selectedSize"
                        class="h-4 w-4 text-orange-500 border-slate-500 focus:ring-orange-500 bg-slate-800"
                      />
                      <span class="ml-3 text-sm font-medium text-slate-200">{{ size }}"</span>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Quantity selection -->
              <div>
                <h3 class="text-sm font-medium text-slate-300 mb-3">Select quantity</h3>
                <div class="space-y-2.5">
                  <label v-for="option in quantities" :key="option.amount" class="block">
                    <div class="flex items-center justify-between bg-slate-700/50 rounded-lg p-3 cursor-pointer hover:bg-slate-700 transition-colors ring-1 ring-white/5" 
                         :class="{ 'ring-2 ring-orange-500 bg-slate-700': selectedQuantity === option.amount }">
                      <div class="flex items-center">
                        <input 
                          type="radio" 
                          name="quantity" 
                          :value="option.amount" 
                          v-model="selectedQuantity"
                          class="h-4 w-4 text-orange-500 border-slate-500 focus:ring-orange-500 bg-slate-800"
                        />
                        <span class="ml-3 text-sm font-medium text-slate-200">{{ formatQuantity(option.amount) }}</span>
                      </div>
                      <div class="text-right flex items-center space-x-3">
                        <span class="text-sm font-medium text-slate-300" v-if="getPricePerUnit(option.amount)">${{ getPricePerUnit(option.amount) }} per coin</span>
                        <span v-if="option.savings" class="text-xs font-semibold bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full">
                          SAVE {{ option.savings }}%
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div class="mt-4 text-right">
                  <button class="text-sm font-medium text-orange-400 hover:text-orange-300 inline-flex items-center">
                    View bulk pricing
                    <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Plating -->
          <div class="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-white/5">
            <button 
              @click="platingExpanded = !platingExpanded"
              class="flex items-center justify-between w-full"
            >
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">2</div>
                <h3 class="text-lg font-medium text-white">Plating</h3>
              </div>
              <svg 
                class="h-5 w-5 text-slate-400 transition-transform duration-200"
                :class="{ 'rotate-180': platingExpanded }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="platingExpanded" class="mt-6">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <label 
                  v-for="plating in platingOptions" 
                  :key="plating.name"
                  class="relative cursor-pointer group"
                >
                  <input 
                    type="radio" 
                    :value="plating.name" 
                    v-model="selectedPlating"
                    class="sr-only peer"
                  >
                  <div class="rounded-xl p-4 bg-slate-700/50 ring-1 ring-white/5 hover:bg-slate-700/70 transition-all duration-200 overflow-hidden peer-checked:ring-2 peer-checked:ring-orange-500 peer-checked:bg-slate-700">
                    <!-- Image container with adjusted aspect ratio -->
                    <div class="w-full mb-3 rounded-lg bg-slate-800/50 overflow-hidden" style="aspect-ratio: 685/363;">
                      <img 
                        :src="plating.image" 
                        :alt="plating.name"
                        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      >
                    </div>
                    <!-- Label -->
                    <div class="text-sm font-medium text-slate-200 group-hover:text-orange-400 transition-colors text-center">
                      {{ plating.name }}
                    </div>
                    <!-- Selected indicator -->
                    <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-orange-500 transform scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Step 3: Packaging -->
          <div class="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-white/5">
            <button 
              @click="packagingExpanded = !packagingExpanded"
              class="flex items-center justify-between w-full"
            >
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">3</div>
                <h3 class="text-lg font-medium text-white">Packaging</h3>
              </div>
              <svg 
                class="h-5 w-5 text-slate-400 transition-transform duration-200"
                :class="{ 'rotate-180': packagingExpanded }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="packagingExpanded" class="mt-6">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <label 
                  v-for="option in packagingOptions" 
                  :key="option.name"
                  class="relative cursor-pointer group"
                >
                  <input 
                    type="radio" 
                    :value="option.name" 
                    v-model="selectedPackaging"
                    class="sr-only peer"
                  >
                  <div class="aspect-square rounded-xl p-4 bg-slate-700/50 ring-1 ring-white/5 hover:bg-slate-700/70 transition-all duration-200 overflow-hidden peer-checked:ring-2 peer-checked:ring-orange-500 peer-checked:bg-slate-700 flex flex-col items-center">
                    <!-- Price badge -->
                    <span class="absolute top-2 left-2 bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                      {{ option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}` }}
                    </span>
                    <!-- Image container -->
                    <div class="w-full h-24 mb-3 rounded-lg bg-slate-800/50 overflow-hidden flex items-center justify-center">
                      <img 
                        :src="option.image" 
                        :alt="option.name"
                        class="max-h-full max-w-full object-contain"
                      >
                    </div>
                    <!-- Label -->
                    <div class="text-sm font-medium text-slate-200 group-hover:text-orange-400 transition-colors text-center">
                      {{ option.name }}
                    </div>
                    <!-- Selected indicator -->
                    <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-orange-500 transform scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Pricing Summary -->
          <div ref="pricingSummary" class="sticky bottom-6">
            <div class="bg-slate-800/95 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-white/5">
              <div class="text-center mb-4">
                <div class="text-slate-400 text-sm font-medium mb-1.5">Estimated Total*</div>
                <div class="flex items-center justify-center gap-3 mb-1">
                  <div class="text-lg text-slate-500 line-through">${{ retailPrice }}</div>
                  <div class="text-3xl font-bold text-white tracking-tight">${{ estimatedTotal }}</div>
                </div>
                <div class="text-orange-400 text-sm font-medium">You save: ${{ savings }}</div>
                <div class="text-slate-500 text-xs mt-2">*Final price determined after artwork approval</div>
              </div>

              <button 
                @click="openContactForm"
                class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3.5 px-6 rounded-lg transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-lg mb-6"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Get Your Free Proof</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    <!-- Full Width Gallery and Testimonials Section -->
    <div v-show="false" class="mt-24 w-full bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem] py-16">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Trusted by Military Units Worldwide</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">Join thousands of military units who trust us with their challenge coin traditions.</p>
        </div>
        <DeliveredCoinsGallery />
      </div>
    </div>

    <!-- Contact Form Modal -->
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showContactForm" class="relative z-50" role="dialog" aria-modal="true">
        <!-- Background backdrop -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="closeContactForm"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4" @click.self="closeContactForm">
            <!-- Dialog panel -->
            <Transition
              appear
              enter-active-class="ease-out duration-300"
              enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to-class="opacity-100 translate-y-0 sm:scale-100"
              leave-active-class="ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0 sm:scale-100"
              leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <QuoteContactForm 
                :quote-data="quoteDataForSubmission"
                @close="closeContactForm"
                @submitted="handleQuoteSubmitted"
              />
            </Transition>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Success Modal -->
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showSuccessModal" class="relative z-50" role="dialog" aria-modal="true">
        <!-- Background backdrop -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="closeSuccessModal"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4" @click.self="closeSuccessModal">
            <!-- Dialog panel -->
            <Transition
              appear
              enter-active-class="ease-out duration-300"
              enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to-class="opacity-100 translate-y-0 sm:scale-100"
              leave-active-class="ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0 sm:scale-100"
              leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <QuoteSuccessModal
                :submitted-data="submittedQuoteData"
                @close="closeSuccessModal"
                @new-quote="handleNewQuote"
              />
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import DeliveredCoinsGallery from './DeliveredCoinsGallery.vue'
import QuoteContactForm from './QuoteContactForm.vue'
import QuoteSuccessModal from './QuoteSuccessModal.vue'

// Props
const props = defineProps({
  pageTitle: {
    type: String,
    default: 'Military Challenge Coins'
  },
  breadcrumbText: {
    type: String,
    default: 'Military Challenge Coins'
  },
  primaryImage: {
    type: String,
    default: '/images/coins/army-coin-render.png'
  }
})

// Reactive data
const selectedImage = ref(0)
const activeTab = ref('Description')
const selectedSize = ref('1.75')
const selectedQuantity = ref(100)
const selectedPlating = ref('Antique Gold')
const selectedPackaging = ref('Poly Bag')
const platingExpanded = ref(false)
const packagingExpanded = ref(false)

// Modal states
const showContactForm = ref(false)
const showSuccessModal = ref(false)
const submittedQuoteData = ref(null)

// Static data
const thumbnails = computed(() => [
  props.primaryImage,
  '/images/coins/navy-coin-render.png',
  '/images/coins/air-force-coin-render.png',
  '/images/coins/marine-corps-coin-render.png',
  '/images/coins/coast-guard-coin-render.png',
  '/images/coins/space-force-coin-render.png'
])

const tabs = ['Description', 'Artwork', 'Turnaround', 'Shipping']

const sizes = ['1.50', '1.75', '2.0', '2.25', '2.5', '2.75', '3.0']

const quantities = [
  { amount: 50, pricePerUnit: null, savings: null },
  { amount: 100, pricePerUnit: null, savings: 40 },
  { amount: 300, pricePerUnit: null, savings: 48 },
  { amount: 500, pricePerUnit: null, savings: 49 },
  { amount: 1000, pricePerUnit: null, savings: 50 },
  { amount: 2000, pricePerUnit: null, savings: 51 }
]

const platingOptions = [
  {
    name: 'Antique Gold',
    image: '/images/plating/usarmy-coin-gold.png'
  },
  {
    name: 'Antique Silver',
    image: '/images/plating/usarmy-coin-silver.png'
  },
  {
    name: 'Antique Copper',
    image: '/images/plating/usarmy-coin-copper.png'
  },
  {
    name: 'Black Metal',
    image: '/images/plating/usarmy-coin-black-metal.png'
  },
  {
    name: 'Polished Silver',
    image: '/images/plating/usarmy-coin-silver.png'
  },
  {
    name: 'Nickel',
    image: '/images/plating/usarmy-coin-nickle.png'
  }
]

const packagingOptions = [
  {
    name: 'Poly Bag',
    image: '/packaging/poly-bag.jpg',
    price: 0
  },
  {
    name: 'Acrylic Case',
    image: '/packaging/acrylic-case.jpg',
    price: 1.00
  },
  {
    name: 'Velvet Bag',
    image: '/packaging/velvet-bag.jpg',
    price: 0.60
  },
  {
    name: 'Velvet Case',
    image: '/packaging/velvet-case.jpg',
    price: 4.00
  }
]

// Pricing matrix based on size and quantity
const pricingMatrix = {
  '1.50': {
    50: 4.85,
    100: 2.96,
    300: 2.50,
    500: 2.44,
    1000: 2.40,
    2000: 2.35
  },
  '1.75': {
    50: 5.35,
    100: 3.22,
    300: 2.80,
    500: 2.73,
    1000: 2.70,
    2000: 2.64
  },
  '2.0': {
    50: 5.80,
    100: 3.52,
    300: 3.06,
    500: 2.97,
    1000: 2.94,
    2000: 2.88
  },
  '2.25': {
    50: 6.85,
    100: 4.37,
    300: 3.69,
    500: 3.49,
    1000: 3.42,
    2000: 3.37
  },
  '2.5': {
    50: 7.26,
    100: 4.95,
    300: 3.95,
    500: 3.91,
    1000: 3.75,
    2000: 3.70
  },
  '2.75': {
    50: 8.29,
    100: 5.66,
    300: 5.10,
    500: 4.88,
    1000: 4.66,
    2000: 4.61
  },
  '3.0': {
    50: 9.19,
    100: 6.37,
    300: 6.25,
    500: 5.86,
    1000: 5.53,
    2000: 5.48
  }
}

// Helper function
const formatQuantity = (quantity) => {
  if (quantity === "Other") return "Other"
  return quantity.toLocaleString()
}


// Price calculations
const retailPrice = computed(() => {
  if (selectedQuantity.value === 'Other' || !selectedSize.value) return '0.00'
  
  const price = pricingMatrix[selectedSize.value]?.[selectedQuantity.value]
  if (!price) return '0.00'
  
  // Add 40% markup for retail price
  const total = price * selectedQuantity.value * 1.4
  return total >= 1000 ? total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : total.toFixed(2)
})

const savings = computed(() => {
  if (selectedQuantity.value === 'Other' || !selectedSize.value) return '0.00'
  
  const price = pricingMatrix[selectedSize.value]?.[selectedQuantity.value]
  if (!price) return '0.00'
  
  const total = price * selectedQuantity.value
  const retailTotal = total * 1.4
  const savingsAmount = retailTotal - total
  
  return savingsAmount >= 1000 ? 
    savingsAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
    savingsAmount.toFixed(2)
})

// Computed properties
const estimatedTotal = computed(() => {
  if (selectedQuantity.value === 'Other' || !selectedSize.value) return '0.00'
  
  const price = pricingMatrix[selectedSize.value]?.[selectedQuantity.value]
  if (!price) return '0.00'
  
  const total = price * selectedQuantity.value
  return total >= 1000 ? total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : total.toFixed(2)
})

// Add this new method to get price per unit
const getPricePerUnit = (quantity) => {
  if (!selectedSize.value) return null
  return pricingMatrix[selectedSize.value]?.[quantity]?.toFixed(2)
}

// Quote data for submission
const quoteDataForSubmission = computed(() => ({
  size: selectedSize.value,
  quantity: selectedQuantity.value,
  plating: selectedPlating.value,
  packaging: selectedPackaging.value,
  estimatedTotal: estimatedTotal.value,
  retailPrice: retailPrice.value,
  savings: savings.value,
  pageTitle: props.pageTitle
}))

// Modal methods
const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}

const handleQuoteSubmitted = (data) => {
  submittedQuoteData.value = data
  showContactForm.value = false
  showSuccessModal.value = true
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  submittedQuoteData.value = null
}

const handleNewQuote = () => {
  // Reset all selections to defaults
  selectedImage.value = 0
  activeTab.value = 'Description'
  selectedSize.value = '1.75'
  selectedQuantity.value = 100
  selectedPlating.value = 'Antique Gold'
  selectedPackaging.value = 'Poly Bag'
  platingExpanded.value = false
  packagingExpanded.value = false
  
  // Close modal
  closeSuccessModal()
}

// Client-side only code
const persistSelections = () => {
  if (process.client) {
    const selections = {
      selectedImage: selectedImage.value,
      activeTab: activeTab.value,
      selectedSize: selectedSize.value,
      selectedQuantity: selectedQuantity.value,
      selectedPlating: selectedPlating.value,
      selectedPackaging: selectedPackaging.value,
      platingExpanded: platingExpanded.value,
      packagingExpanded: packagingExpanded.value
    }
    localStorage.setItem('coinSelections', JSON.stringify(selections))
  }
}

// Load saved selections on mount
onMounted(() => {
  if (process.client) {
    try {
      const saved = localStorage.getItem('coinSelections')
      if (saved) {
        const selections = JSON.parse(saved)
        selectedImage.value = selections.selectedImage
        activeTab.value = selections.activeTab
        selectedSize.value = selections.selectedSize
        selectedQuantity.value = selections.selectedQuantity
        selectedPlating.value = selections.selectedPlating
        selectedPackaging.value = selections.selectedPackaging
        platingExpanded.value = selections.platingExpanded
        packagingExpanded.value = selections.packagingExpanded
      }
    } catch (e) {
      console.error('Error loading saved selections:', e)
    }
  }
})

// Watch for changes and persist
watch(
  [
    selectedImage,
    activeTab,
    selectedSize,
    selectedQuantity,
    selectedPlating,
    selectedPackaging,
    platingExpanded,
    packagingExpanded
  ],
  () => persistSelections(),
  { deep: true }
)
</script>

