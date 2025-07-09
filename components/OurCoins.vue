<template>
  <section id="our-coins" class="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-16">
    <div class="container mx-auto px-4 md:px-6">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 text-center mb-12 md:mb-16">
        Discover Our <span class="text-orange-500">Masterfully Crafted Coins</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        <a v-for="(coin, index) in coinTypes" :key="index" 
           :href="coin.route"
           class="group block bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-600/10 transform hover:-translate-y-1 transition-all duration-200 ease-in-out flex flex-col items-center text-center h-full hover:ring-1 hover:ring-orange-500/30">
          <div class="relative mb-6 w-40 h-40 md:w-48 md:h-48">
            <img :src="coin.image" :alt="coin.name" 
                 class="w-full h-full object-contain rounded-full border-4 border-slate-700 group-hover:border-orange-500 transition-all duration-200" />
            <div class="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity duration-200"></div>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold text-slate-100 group-hover:text-orange-400 mb-2 transition-colors duration-200">{{ coin.name }}</h3>
          <p class="text-slate-300 text-sm leading-relaxed flex-grow">{{ coin.description }}</p>
          <span class="mt-6 inline-block bg-orange-600 group-hover:bg-orange-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-200 ease-in-out text-sm">
            Learn More
          </span>
        </a>
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
          image: '/images/coins/navy-coin-render.png',
          route: '/navy-challenge-coins'
        },
        {
          name: 'Army Coins',
          description: 'High-quality custom coins for the U.S. Army, perfect for recognition and unit pride.',
          image: '/images/coins/army-coin-render.png',
          route: '/army-challenge-coins'
        },
        {
          name: 'Air Force Coins',
          description: 'Precision-crafted coins for the U.S. Air Force, celebrating excellence in the skies and beyond.',
          image: '/images/coins/air-force-coin-render.png',
          route: '/air-force-challenge-coins'
        },
        {
          name: 'Marine Corps Coins',
          description: 'Custom coins that embody the honor, courage, and commitment of the U.S. Marine Corps.',
          image: '/images/coins/marine-corps-coin-render.png',
          route: '/marine-corps-challenge-coins'
        },
        {
          name: 'Coast Guard Coins',
          description: 'Distinctive coins for the U.S. Coast Guard, symbolizing dedication to maritime safety and security.',
          image: '/images/coins/coast-guard-coin-render.png',
          route: '/coast-guard-challenge-coins'
        },
        {
          name: 'Space Force Coins',
          description: 'Modern and innovative coins for the U.S. Space Force, representing the final frontier.',
          image: '/images/coins/space-force-coin-render.png',
          route: '/space-force-challenge-coins'
        },
        {
          name: 'Commemorative Coins',
          description: 'Special edition coins for anniversaries, events, or to honor specific missions and individuals.',
          image: '/images/coins/army-coin-render.png',
          route: '/commemorative-challenge-coins'
        },
        {
          name: 'Custom Shape Coins',
          description: 'Unique, die-cut coins in any shape you can imagine, for a truly standout piece.',
          image: '/images/coins/army-coin-render.png',
          route: '/custom-shape-challenge-coins'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Make sure the link inherits text decoration */
a {
  text-decoration: none;
}

/* Subtle glow on image hover */
.group:hover .object-contain {
  box-shadow: 0 0 6px 1px rgba(249, 115, 22, 0.15);
  transition: all 0.2s ease-in-out;
}
</style>
