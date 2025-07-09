<template>
  <!-- Trust Bar / Engagement Banner -->
  <div class="relative z-10 hidden lg:block">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem] py-2">
      <div class="flex items-center justify-between">
        <!-- Trust Metrics -->
        <div class="flex items-center space-x-6 text-sm">
          <div class="flex items-center text-slate-200">
            <svg class="w-4 h-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><span class="font-semibold text-white">{{ orderCount }}</span> orders this month</span>
          </div>
          <div class="flex items-center text-slate-200">
            <svg class="w-4 h-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><span class="font-semibold text-white">100%</span> Made in USA</span>
          </div>
        </div>
        
        <!-- Live Order Alert -->
        <div v-if="latestOrder" class="animate-fade-in-out text-sm text-slate-200">
          <span class="inline-flex items-center">
            <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span class="hidden xl:inline">{{ latestOrder }}</span>
            <span class="xl:hidden">{{ shortenedOrder }}</span>
          </span>
        </div>
        
        <!-- Production Timer -->
        <div class="text-sm">
          <span class="text-orange-400">Order in next </span>
          <span class="font-mono text-white">{{ productionTimer }}</span>
          <span class="text-slate-200"> for delivery by {{ deliveryDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Trust metrics
const orderCount = ref(847)
const latestOrder = ref(null)
const productionTimer = ref('23:45:12')
// Calculate delivery date (2 weeks from current date)
const deliveryDate = computed(() => {
  const now = new Date()
  const deliveryDate = new Date(now.getTime() + (14 * 24 * 60 * 60 * 1000)) // Add 14 days in milliseconds
  
  // Format as "Month DD" (e.g., "May 15")
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = monthNames[deliveryDate.getMonth()]
  const day = deliveryDate.getDate()
  
  return `${month} ${day}`
})

// Simulated latest orders
const recentOrders = [
  'CPT. Mike R. from Fort Bragg ordered 200 coins',
  'SSG. Sarah T. from Camp Pendleton ordered 100 coins',
  'LTC. James B. from Fort Hood ordered 300 coins'
]

// Computed property to shorten order text for lg screens
const shortenedOrder = computed(() => {
  if (!latestOrder.value) return ''
  
  // Format: 'CPT. Mike R., Fort Bragg - 200 pcs.'
  return latestOrder.value
    .replace(' from Fort Bragg ordered ', ', Fort Bragg - ')
    .replace(' from Camp Pendleton ordered ', ', Camp Pendleton - ')
    .replace(' from Fort Hood ordered ', ', Fort Hood - ')
    .replace(' coins', ' pcs.')
})

let orderInterval = null
let timerInterval = null

onMounted(() => {
  // Simulate live orders
  orderInterval = setInterval(() => {
    latestOrder.value = recentOrders[Math.floor(Math.random() * recentOrders.length)]
    setTimeout(() => {
      latestOrder.value = null
    }, 5000)
  }, 15000)
  
  // Update production timer
  const updateTimer = () => {
    const now = new Date()
    const end = new Date(now)
    end.setHours(23, 59, 59)
    
    const diff = end - now
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    productionTimer.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  
  updateTimer()
  timerInterval = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  // Clear intervals
  if (orderInterval) clearInterval(orderInterval)
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style scoped>
.animate-fade-in-out {
  animation: fadeInOut 5s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
}
</style>