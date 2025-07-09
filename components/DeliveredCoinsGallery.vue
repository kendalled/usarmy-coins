<template>
  <div>
    <!-- Delivered Coins Section -->
    <div class="hidden bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl ring-1 ring-white/5 mb-16">
      <h3 class="text-xl font-medium text-white mb-8 text-center">Recently Delivered Challenge Coins</h3>
    
    <!-- Scrolling Gallery -->
    <div class="relative mb-8">
      <!-- Gradient Overlays -->
      <div class="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-800/80 to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-800/80 to-transparent z-10"></div>
      
      <!-- Scrolling Container -->
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-4 pb-4 animate-scroll">
          <div v-for="(coin, index) in deliveredCoins" :key="index" 
               class="flex-none w-32 aspect-square rounded-lg overflow-hidden bg-slate-700/50 ring-1 ring-white/5 group">
            <img :src="coin.image" :alt="coin.description" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300">
          </div>
        </div>
      </div>
    </div>
    
    </div>

    <!-- Testimonials TODO: Proper spacing instead of mb-16 -->
    <div class="mb-16 bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl ring-1 ring-white/5">
      <h3 class="text-xl font-medium text-white mb-8 text-center">What Military Leaders Say</h3>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="(testimonial, index) in testimonials" :key="index"
             class="bg-slate-700/30 rounded-lg p-6 ring-1 ring-white/5 hover:bg-slate-700/50 transition-colors duration-300">
          <div class="flex flex-col items-center text-center mb-4">
            <!-- Military Branch Icon -->
            <div class="w-16 h-16 rounded-full bg-slate-600/50 mb-4 ring-2 ring-orange-500/20">
              <img :src="testimonial.image" :alt="testimonial.name" class="w-full h-full object-cover rounded-full">
            </div>
            
            <div>
              <p class="text-white font-medium">{{ testimonial.rank }} {{ testimonial.name }}</p>
              <p class="text-sm text-slate-400">{{ testimonial.unit }}</p>
            </div>
          </div>

          <div class="flex justify-center text-orange-500 mb-4">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" 
                 :class="i <= testimonial.rating ? 'fill-current' : 'fill-slate-600'"
                 viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <blockquote class="text-sm text-slate-300 text-center mb-4">{{ testimonial.comment }}</blockquote>
          <p class="text-xs text-slate-500 text-center">{{ testimonial.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const deliveredCoins = [
  {
    image: "/tests/test_1.jpeg",
    description: "Military Challenge Coin 1"
  },
  {
    image: "/tests/test_2.jpeg",
    description: "Military Challenge Coin 2"
  },
  {
    image: "/tests/test_3.jpeg",
    description: "Military Challenge Coin 3"
  },
  {
    image: "/tests/test_4.jpeg",
    description: "Military Challenge Coin 4"
  },
  {
    image: "/tests/test_1.jpeg",
    description: "Military Challenge Coin 5"
  },
  {
    image: "/tests/test_2.jpeg",
    description: "Military Challenge Coin 6"
  }
]

const testimonials = [
  {
    rank: "COL",
    name: "Michael R.",
    unit: "101st Airborne Division",
    branch: "Army",
    image: "/tests/test_1.jpeg",
    rating: 5,
    comment: "Outstanding quality and attention to detail. The coins exceeded our expectations and were delivered ahead of schedule. Perfect for our unit's recognition ceremony.",
    date: "March 15, 2024"
  },
  {
    rank: "MCPO",
    name: "David S.",
    unit: "Naval Special Warfare",
    branch: "Navy",
    image: "/tests/test_2.jpeg",
    rating: 5,
    comment: "The craftsmanship is exceptional. These coins perfectly capture our team's spirit and heritage. The design team was incredibly responsive to our feedback.",
    date: "March 12, 2024"
  },
  {
    rank: "Lt Col",
    name: "Sarah T.",
    unit: "23rd Wing",
    branch: "Air Force",
    image: "/tests/test_3.jpeg",
    rating: 5,
    comment: "From design to delivery, the entire process was seamless. The coins are beautiful and our airmen are proud to carry them.",
    date: "March 8, 2024"
  },
  {
    rank: "SgtMaj",
    name: "James B.",
    unit: "2nd Marine Division",
    branch: "Marine Corps",
    image: "/tests/test_4.jpeg",
    rating: 5,
    comment: "These coins honor our Marines' dedication and service. The quality is unmatched and the customer service was outstanding.",
    date: "March 5, 2024"
  }
]
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-32rem - 4rem)); } /* Width of 8 items + gaps */
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

/* Hide scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style> 