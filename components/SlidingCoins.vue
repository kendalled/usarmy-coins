<template>
  <div class="relative overflow-hidden bg-gray-100 dark:bg-gray-900 py-8">
    <!-- Gradient fade on both sides -->
    <div
      class="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"
    ></div>
    <div
      class="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"
    ></div>

    <!-- Sliding container -->
    <div class="flex space-x-6 animate-infinite-slide">
      <!-- Duplicate cards for seamless animation -->
      <div
        v-for="(card, index) in cards.concat(cards)"
        :key="index"
        class="shrink-0 w-80 bg-gray-800 text-white rounded-lg p-6 shadow-lg"
      >
        <div class="flex items-center justify-center mb-4">
          <img :src="card.image" alt="Card Image" class="w-16 h-16" />
        </div>
        <h3 class="text-lg font-bold mb-2">{{ card.title }}</h3>
        <p class="text-sm text-gray-300">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Army Coins",
    description: "Award soldiers with valor and prestige.",
    image: "/nav-marines.webp",
  },
  {
    title: "Coast Guard Coins",
    description: "Recognize those who protect our national waters.",
    image: "/nav-marines.webp",
  },
  {
    title: "Navy Coins",
    description: "Honor sailors for courage and commitment.",
    image: "/nav-marines.webp",
  },
  {
    title: "Marine Coins",
    description: "Recognize incredible strength and courage.",
    image: "/nav-marines.webp",
  },
  {
    title: "Coast Guard Coins",
    description: "Recognize those who protect our national waters.",
    image: "/nav-marines.webp",
  },
  {
    title: "Navy Coins",
    description: "Honor sailors for courage and commitment.",
    image: "/nav-marines.webp",
  },
  {
    title: "Marine Coins",
    description: "Recognize incredible strength and courage.",
    image: "/nav-marines.webp",
  },
];
</script>

<style scoped>
/* Seamless infinite sliding animation */
@keyframes infinite-slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-infinite-slide {
  display: flex;
  width: max-content;
  animation: infinite-slide 29s linear infinite;
}
</style>
