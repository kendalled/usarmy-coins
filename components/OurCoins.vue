<template>
  <section id="our-coins" class="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="container mx-auto px-4 md:px-6">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 text-center mb-12 md:mb-16">
        Discover Our <span class="text-orange-500">Masterfully Crafted Coins</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        <div v-for="(coin, index) in coinTypes" :key="index" 
             class="group bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-orange-600/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col items-center text-center">
          <div class="relative mb-6 w-40 h-40 md:w-48 md:h-48">
            <img :src="coin.image" :alt="coin.name" 
                 class="w-full h-full object-contain rounded-full border-4 border-slate-700 group-hover:border-orange-500 transition-colors duration-300" />
            <div class="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold text-slate-100 group-hover:text-orange-400 mb-2 transition-colors duration-300">{{ coin.name }}</h3>
          <p class="text-slate-300 text-sm leading-relaxed flex-grow">{{ coin.description }}</p>
          <a href="#get-a-quote" class="mt-6 inline-block bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-sm">
            Learn More
          </a>
        </div>
      </div>

      <div class="text-center mt-16 md:mt-20">
        <a href="#get-a-quote" 
           class="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
          Design Your Custom Coin Today!
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurCoins',
  data() {
    return {
      coinTypes: [
        {
          name: 'Navy Coins',
          description: 'Elegant and durable challenge coins for the U.S. Navy, designed to honor service and achievements.',
          image: '/branches/navy-coin-render.png'
        },
        {
          name: 'Army Coins',
          description: 'High-quality custom coins for the U.S. Army, perfect for recognition and unit pride.',
          image: '/branches/army-coin-render.png'
        },
        {
          name: 'Air Force Coins',
          description: 'Precision-crafted coins for the U.S. Air Force, celebrating excellence in the skies and beyond.',
          image: '/branches/air-force-coin-render.png'
        },
        {
          name: 'Marine Corps Coins',
          description: 'Custom coins that embody the honor, courage, and commitment of the U.S. Marine Corps.',
          image: '/branches/marine-corps-coin-render.png'
        },
        {
          name: 'Coast Guard Coins',
          description: 'Distinctive coins for the U.S. Coast Guard, symbolizing dedication to maritime safety and security.',
          image: '/branches/coast-guard-coin-render.png'
        },
        {
          name: 'Space Force Coins',
          description: 'Modern and innovative coins for the U.S. Space Force, representing the final frontier.',
          image: '/branches/space-force-coin-render.png'
        },
        {
          name: 'Commemorative Coins',
          description: 'Special edition coins for anniversaries, events, or to honor specific missions and individuals.',
          image: '/branches/army-coin-render.png'
        },
        {
          name: 'Custom Shape Coins',
          description: 'Unique, die-cut coins in any shape you can imagine, for a truly standout piece.',
          image: '/branches/army-coin-render.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any specific scoped styles here if needed */
.group:hover .object-contain {
  box-shadow: 0 0 8px 1px rgba(249, 115, 22, 0.20); /* More subtle orange-500 glow */
  transition: box-shadow 0.3s ease-in-out;
}
</style>
