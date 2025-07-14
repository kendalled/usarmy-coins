<template>
  <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem]">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
            <CoinIcon />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ branchData.title }}
          </h2>
          <p class="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {{ branchData.description }}
          </p>
        </div>
        
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <!-- Heritage Card -->
          <div class="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20">
            <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ branchData.heritage.title }}</h3>
            <p class="text-slate-300 leading-relaxed" v-html="branchData.heritage.description"></p>
          </div>
          
          <!-- Design Elements Card -->
          <div class="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20">
            <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ branchData.design.title }}</h3>
            <p class="text-slate-300 leading-relaxed" v-html="branchData.design.description"></p>
          </div>
          
          <!-- Mission Card -->
          <div class="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20">
            <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ branchData.mission.title }}</h3>
            <p class="text-slate-300 leading-relaxed" v-html="branchData.mission.description"></p>
          </div>
        </div>
        
        <!-- Features Section -->
        <div class="bg-gradient-to-r from-slate-800/50 to-slate-900/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">{{ branchData.features.title }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="feature in branchData.features.items" :key="feature.title" class="text-center">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath"/>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">{{ feature.title }}</h4>
              <p class="text-slate-300 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- Popular Uses Section -->
        <div class="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-orange-500/20">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">{{ branchData.uses.title }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="column in branchData.uses.columns" :key="column" class="space-y-4">
              <div v-for="use in column" :key="use" class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">{{ use }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  branchData: {
    type: Object,
    required: true
  }
})
</script>