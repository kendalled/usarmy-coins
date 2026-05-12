<template>
  <!-- Trust Bar / Engagement Banner -->
  <div class="relative z-10 hidden lg:block">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-336 py-2">
      <div class="flex items-center justify-between">
        <!-- Trust Metrics -->
        <div class="flex items-center space-x-6 text-sm">
          <div class="flex items-center text-slate-200">
            <svg
              class="w-4 h-4 text-orange-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span
              ><span class="font-semibold text-white">{{ orderCount }}</span>
              orders this month</span
            >
          </div>
          <div class="flex items-center text-slate-200">
            <svg
              class="w-4 h-4 text-orange-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              ><span class="font-semibold text-white">100%</span> Designed in
              USA</span
            >
          </div>
        </div>

        <!-- Live Order Alert -->
        <div class="text-sm text-slate-200 h-5 flex items-center">
          <span
            v-if="latestOrder"
            class="inline-flex items-center animate-fade-in-out"
          >
            <span
              class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
            ></span>
            <span class="hidden xl:inline">{{ latestOrder }}</span>
            <span class="xl:hidden">{{ shortenedOrder }}</span>
          </span>
        </div>

        <!-- Production Timer -->
        <div class="text-sm">
          <span class="text-orange-400">Order in next </span>
          <span class="font-mono text-white">{{ productionTimer }}</span>
          <span class="text-slate-200">
            for delivery by {{ deliveryDate }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Trust metrics
const orderCount = ref(847);
const latestOrder = ref(null);
const productionTimer = ref("23:45:12");
// Keep SSR output stable, then update to user's local date + 14 days on mount.
const deliveryDate = ref("calculating...");

// Simulated latest orders
const recentOrders = [
  "CPT. Mike R. from Fort Bragg ordered 200 coins",
  "SSG. Sarah T. from Camp Pendleton ordered 100 coins",
  "LTC. James B. from Fort Hood ordered 300 coins",
];

// Computed property to shorten order text for lg screens
const shortenedOrder = computed(() => {
  if (!latestOrder.value) return "";

  // Format: 'CPT. Mike R., Fort Bragg - 200 pcs.'
  return latestOrder.value
    .replace(" from Fort Bragg ordered ", ", Fort Bragg - ")
    .replace(" from Camp Pendleton ordered ", ", Camp Pendleton - ")
    .replace(" from Fort Hood ordered ", ", Fort Hood - ")
    .replace(" coins", " pcs.");
});

// Use deterministic order rotation instead of random
let orderIndex = 0;
let orderInterval = null;
let timerInterval = null;

const showNextOrder = () => {
  latestOrder.value = recentOrders[orderIndex % recentOrders.length];
  orderIndex++;
  setTimeout(() => {
    latestOrder.value = null;
  }, 5000);
};

onMounted(() => {
  const updateDeliveryDate = () => {
    const now = new Date();
    const plus14 = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
    deliveryDate.value = plus14.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  updateDeliveryDate();

  // Start with deterministic order rotation after a delay to prevent hydration issues
  setTimeout(() => {
    orderInterval = setInterval(showNextOrder, 15000);
  }, 1000);
  
  // Initialize timer with client-only updates to prevent hydration mismatch
  const updateTimer = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59);

    const diff = end - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    productionTimer.value = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Only update timer on client after small delay to prevent hydration mismatch
  setTimeout(() => {
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
  }, 500);
});

onUnmounted(() => {
  // Clear intervals
  if (orderInterval) clearInterval(orderInterval);
  if (timerInterval) clearInterval(timerInterval);
});
</script>

<style scoped>
.animate-fade-in-out {
  animation: fadeInOut 5s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
