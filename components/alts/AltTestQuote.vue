<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/30 pt-20">

    <!-- Breadcrumb -->
    <div class="container mx-auto px-6 py-4 max-w-7xl">
      <nav class="flex items-center space-x-2 text-sm">
        <a href="#" class="text-orange-500 hover:text-orange-400">Challenge Coins</a>
        <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-400">Military Challenge Coins</span>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-6 pb-12 max-w-7xl">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-white text-center mb-8">Military Challenge Coins</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Main Product Image -->
          <div class="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-lg ring-1 ring-slate-700/50">
            <img 
              :src="thumbnails[selectedImage]" 
              alt="Military Challenge Coin"
              class="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            >
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="w-full bg-black/10 backdrop-blur-sm rounded-xl p-4">
            <div class="grid grid-cols-6 gap-2">
              <button 
                v-for="(image, index) in thumbnails" 
                :key="index"
                @click="selectedImage = index"
                class="w-full aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20"
                :class="selectedImage === index ? 'border-orange-500 scale-105' : 'border-gray-700 hover:border-gray-500'"
              >
                <img :src="image" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover">
              </button>
            </div>
          </div>

          <!-- Product Description Tabs -->
          <div class="bg-black/20 backdrop-blur-sm rounded-xl border border-amber-900/30 shadow-lg">
            <div class="flex border-b border-amber-900/30">
              <button 
                v-for="tab in tabs" 
                :key="tab"
                @click="activeTab = tab"
                class="px-6 py-3 text-sm font-medium transition-colors duration-200"
                :class="activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'"
              >
                {{ tab }}
              </button>
            </div>
            <div class="p-6">
              <div v-if="activeTab === 'Description'" class="text-gray-300 leading-relaxed">
                <p>Military challenge coins are a time-honored tradition representing unit pride, achievement, and camaraderie. Our premium challenge coins feature high-quality metal construction with detailed enamel work. Each coin is crafted to honor military service and can be customized with unit insignia, mottos, and commemorative designs. Perfect for recognition ceremonies, unit gifts, and preserving military heritage.</p>
              </div>
              <div v-else-if="activeTab === 'Artwork'" class="text-gray-300">
                <p>Our design team works with you to create custom artwork that captures your unit's identity and mission. We provide digital proofs and unlimited revisions to ensure your vision comes to life.</p>
              </div>
              <div v-else-if="activeTab === 'Turnaround'" class="text-gray-300">
                <p>Standard production time is 10-14 business days after artwork approval. Rush orders available for 7-day delivery with additional fees.</p>
              </div>
              <div v-else-if="activeTab === 'Shipping'" class="text-gray-300">
                <p>Free shipping on orders over $500. Standard shipping via FedEx Ground. Expedited shipping options available.</p>
              </div>
              <div v-else-if="activeTab === 'Returns'" class="text-gray-300">
                <p>100% satisfaction guarantee. If you're not completely satisfied with your order, contact us within 30 days for a full refund or replacement.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Product Title -->
          <div class="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h2 class="text-2xl font-bold text-white mb-2">Custom Military Challenge Coin</h2>
            <div class="flex items-center space-x-2">
              <div class="text-amber-400 text-lg font-medium">★★★★★</div>
              <span class="text-slate-400 text-sm">4.9 (128 reviews)</span>
            </div>
          </div>

          <!-- Step 1: Size & Quantity -->
          <div class="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-lg">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">1</div>
              <h3 class="text-xl font-semibold text-white">Configure Your Coin</h3>
            </div>

            <!-- Size Selection -->
            <div class="mb-6">
              <h4 class="text-slate-300 font-medium mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Select Size
              </h4>
              <div class="grid grid-cols-3 gap-3">
                <label 
                  v-for="size in sizes" 
                  :key="size"
                  class="relative flex items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-200 border-2"
                  :class="{
                    'border-orange-500 bg-slate-700/50 text-white': selectedSize === size,
                    'border-slate-700 hover:border-slate-600 text-slate-300': selectedSize !== size
                  }"
                >
                  <input 
                    type="radio" 
                    :value="size" 
                    v-model="selectedSize"
                    class="sr-only"
                  >
                  <span class="font-medium">{{ size }}"</span>
                </label>
              </div>
            </div>

            <!-- Quantity Selection -->
            <div>
              <h4 class="text-slate-300 font-medium mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Select Quantity
              </h4>
              <div class="space-y-2 max-h-64 overflow-y-auto pr-2 -mr-2">
                <label 
                  v-for="qty in quantities" 
                  :key="qty.amount"
                  class="flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200"
                  :class="{
                    'bg-slate-700/50 border border-orange-500/30': selectedQuantity === qty.amount,
                    'hover:bg-slate-700/30 border border-transparent': selectedQuantity !== qty.amount
                  }"
                >
                  <div class="flex items-center space-x-3">
                    <input 
                      type="radio"
                      :value="qty.amount"
                      v-model="selectedQuantity"
                      class="sr-only"
                    >
                    <div 
                      class="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                      :class="selectedQuantity === qty.amount ? 'border-orange-500' : 'border-slate-600'"
                    >
                      <div v-if="selectedQuantity === qty.amount" class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                    </div>
                    <span class="text-white font-medium">
                      {{ qty.amount === 'Other' ? 'Custom Quantity' : qty.amount.toLocaleString() }}
                    </span>
                  </div>
                  <div v-if="qty.amount !== 'Other'" class="text-right">
                    <div class="text-white font-medium">${{ qty.pricePerUnit }} <span class="text-slate-400 text-sm">/ea</span></div>
                    <div v-if="qty.savings" class="text-orange-400 text-xs font-medium">SAVE {{ qty.savings }}%</div>
                  </div>
                </label>
              </div>
              <div class="text-center mt-4">
                <button class="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors flex items-center justify-center w-full">
                  View bulk pricing
                  <svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 2: Plating -->
          <div class="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
            <button 
              @click="platingExpanded = !platingExpanded"
              class="flex items-center justify-between w-full"
            >
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <h3 class="text-xl font-semibold text-white">Plating</h3>
              </div>
              <svg 
                class="h-5 w-5 text-gray-400 transition-transform duration-200"
                :class="{ 'rotate-180': platingExpanded }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="platingExpanded" class="mt-4 space-y-3">
              <label 
                v-for="plating in platingOptions" 
                :key="plating"
                class="flex items-center space-x-3 cursor-pointer group"
              >
                <input 
                  type="radio" 
                  :value="plating" 
                  v-model="selectedPlating"
                  class="w-4 h-4 text-orange-500 border-gray-600 focus:ring-orange-500 focus:ring-2"
                >
                <span class="text-white group-hover:text-orange-400 transition-colors">{{ plating }}</span>
              </label>
            </div>
          </div>

          <!-- Step 3: Attachment -->
          <div class="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
            <button 
              @click="attachmentExpanded = !attachmentExpanded"
              class="flex items-center justify-between w-full"
            >
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <h3 class="text-xl font-semibold text-white">Attachment</h3>
              </div>
              <svg 
                class="h-5 w-5 text-gray-400 transition-transform duration-200"
                :class="{ 'rotate-180': attachmentExpanded }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="attachmentExpanded" class="mt-4 space-y-3">
              <label 
                v-for="attachment in attachmentOptions" 
                :key="attachment"
                class="flex items-center space-x-3 cursor-pointer group"
              >
                <input 
                  type="radio" 
                  :value="attachment" 
                  v-model="selectedAttachment"
                  class="w-4 h-4 text-orange-500 border-gray-600 focus:ring-orange-500 focus:ring-2"
                >
                <span class="text-white group-hover:text-orange-400 transition-colors">{{ attachment }}</span>
              </label>
            </div>
          </div>

          <!-- Pricing Summary -->
          <div class="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
            <div class="text-center mb-4">
              <div class="text-gray-400 text-sm mb-1">Estimated Total*</div>
              <div class="text-3xl font-bold text-white">${{ estimatedTotal }}</div>
              <div class="text-gray-500 text-xs mt-2">*This is a price estimate! Formal quotation requires a production-ready design!</div>
            </div>
            
            <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Get a Proof</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive data
const selectedImage = ref(0)
const activeTab = ref('Description')
const selectedSize = ref('1.75')
const selectedQuantity = ref(100)
const selectedPlating = ref('Antique Gold')
const selectedAttachment = ref('Military Clutch')
const platingExpanded = ref(false)
const attachmentExpanded = ref(false)

// Static data
const thumbnails = [
  '/images/coins/army-coin-render.png',
  '/images/coins/navy-coin-render.png',
  '/images/coins/air-force-coin-render.png',
  '/images/coins/marine-corps-coin-render.png',
  '/images/coins/coast-guard-coin-render.png',
  '/images/coins/space-force-coin-render.png'
]

const tabs = ['Description', 'Artwork', 'Turnaround', 'Shipping', 'Returns']

const sizes = ['0.75', '1', '1.25', '1.5', '1.75', '2']

const quantities = [
  { amount: 100, pricePerUnit: '2.89', savings: null },
  { amount: 200, pricePerUnit: '2.30', savings: 20 },
  { amount: 300, pricePerUnit: '1.70', savings: 41 },
  { amount: 500, pricePerUnit: '1.40', savings: 52 },
  { amount: 750, pricePerUnit: '1.31', savings: 55 },
  { amount: 1000, pricePerUnit: '1.23', savings: 57 },
  { amount: 2000, pricePerUnit: '1.14', savings: 61 },
  { amount: 3000, pricePerUnit: '1.04', savings: 64 },
  { amount: 5000, pricePerUnit: '0.87', savings: 70 },
  { amount: 10000, pricePerUnit: '0.78', savings: 73 },
  { amount: 'Other', pricePerUnit: null, savings: null }
]

const platingOptions = [
  'Antique Gold',
  'Antique Silver',
  'Antique Copper',
  'Bright Gold',
  'Bright Silver',
  'Black Nickel'
]

const attachmentOptions = [
  'Military Clutch',
  'Butterfly Clutch',
  'Safety Pin',
  'Magnetic Back',
  'No Attachment'
]

// Computed properties
const estimatedTotal = computed(() => {
  if (selectedQuantity.value === 'Other') return '0.00'
  
  const qty = quantities.find(q => q.amount === selectedQuantity.value)
  if (!qty || !qty.pricePerUnit) return '0.00'
  
  const total = parseFloat(qty.pricePerUnit) * selectedQuantity.value
  return total.toFixed(2)
})
</script>