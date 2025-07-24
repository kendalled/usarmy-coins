<template>
  <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem]">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Build Your Custom Quote
          </h2>
          <p class="text-lg text-slate-300 max-w-2xl mx-auto">
            Select your military branch and customize your challenge coins. Get a free digital proof with every quote.
          </p>
        </div>

        <!-- Branch Selection -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-white mb-6 text-center">Select Your Military Branch</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <button
              v-for="branch in branches"
              :key="branch.id"
              @click="selectedBranch = branch.id"
              class="relative group bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-4 transition-all duration-300 ring-1 ring-white/5 hover:ring-orange-500/50"
              :class="{ 'ring-2 ring-orange-500 bg-slate-700/50': selectedBranch === branch.id }"
            >
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-slate-700/50">
                  <img 
                    :src="branch.image" 
                    :alt="branch.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  >
                </div>
                <div class="text-sm font-medium text-slate-200 group-hover:text-orange-400 transition-colors">
                  {{ branch.name }}
                </div>
              </div>
              <!-- Selected indicator -->
              <div 
                v-if="selectedBranch === branch.id"
                class="absolute top-2 right-2 w-4 h-4 rounded-full bg-orange-500"
              ></div>
            </button>
          </div>
        </div>

        <!-- Quote Form -->
        <div v-if="selectedBranch" class="mt-8">
          <QuoteBuilder 
            :key="selectedBranch"
            :page-title="getSelectedBranchName()"
            :breadcrumb-text="getSelectedBranchName()"
            :primary-image="getSelectedBranchImage()"
          />
        </div>

        <!-- Call to action when no branch selected -->
        <div v-else class="text-center py-12">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700/50 flex items-center justify-center">
            <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Choose Your Branch to Continue</h3>
          <p class="text-slate-400">Select your military branch above to start building your custom quote</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import QuoteBuilder from './QuoteBuilder.vue'

const selectedBranch = ref('')

const branches = [
  {
    id: 'army',
    name: 'Army',
    image: '/images/coins/army-coin-render.png'
  },
  {
    id: 'navy',
    name: 'Navy',
    image: '/images/coins/navy-coin-render.png'
  },
  {
    id: 'air-force',
    name: 'Air Force',
    image: '/images/coins/air-force-coin-render.png'
  },
  {
    id: 'marines',
    name: 'Marines',
    image: '/images/coins/marine-corps-coin-render.png'
  },
  {
    id: 'coast-guard',
    name: 'Coast Guard',
    image: '/images/coins/coast-guard-coin-render.png'
  },
  {
    id: 'space-force',
    name: 'Space Force',
    image: '/images/coins/space-force-coin-render.png'
  }
]

const getSelectedBranchName = () => {
  const branch = branches.find(b => b.id === selectedBranch.value)
  return branch ? `${branch.name} Challenge Coins` : 'Military Challenge Coins'
}

const getSelectedBranchImage = () => {
  const branch = branches.find(b => b.id === selectedBranch.value)
  return branch ? branch.image : '/images/coins/army-coin-render.png'
}
</script>