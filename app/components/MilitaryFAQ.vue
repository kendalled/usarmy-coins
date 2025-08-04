<template>
  <div class="bg-linear-to-br from-slate-800 via-slate-900 to-slate-800 py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-336">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Get answers to common questions about our military challenge coins and ordering process.
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto space-y-4">
        <div 
          v-for="(faq, index) in displayedFAQs" 
          :key="index"
          class="bg-slate-800/50 backdrop-blur-xs rounded-xl shadow-lg ring-1 ring-white/5 overflow-hidden"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
          >
            <span class="text-lg font-semibold text-white pr-4">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-orange-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFAQs.includes(index) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <div
            v-if="openFAQs.includes(index)"
            class="px-6 pb-5 text-slate-300 leading-relaxed"
          >
            <div v-html="faq.answer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  branchName: {
    type: String,
    default: 'Military'
  },
  customFAQs: {
    type: Array,
    default: () => []
  }
})

const openFAQs = ref([])

const toggleFAQ = (index) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

// Default FAQs that appear on all pages
const defaultFAQs = [
  {
    question: "What materials are used in your challenge coins?",
    answer: "Our challenge coins are crafted from high-quality metals including brass, copper, and zinc alloy. Each coin features durable enamel finishes and premium plating options including antique gold, silver, copper, and black metal finishes that maintain their appearance over time."
  },
  {
    question: "How long does it take to receive my challenge coins?",
    answer: "Standard production time is 10-14 business days after artwork approval. We also offer rush production for 7-day delivery with additional fees. All orders include free shipping via FedEx Ground for orders over $500."
  },
  {
    question: "Can I see a proof before my coins are manufactured?",
    answer: "Absolutely! We provide detailed digital proofs and offer unlimited revisions at no extra charge. We won't begin production until you're completely satisfied with the design. This ensures your coins meet your exact specifications and expectations."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order is 50 coins. We offer volume discounts starting at 100 coins with savings up to 51% on larger orders. The more you order, the better the per-unit price becomes."
  },
  {
    question: "Do you offer custom shapes and sizes?",
    answer: "Yes! While our standard sizes range from 1.5\" to 3.0\" in diameter, we can create custom shapes and sizes to match your specific requirements. Custom shapes include dog tags, shields, badges, and virtually any design you can imagine."
  },
  {
    question: "What information do I need to provide for my order?",
    answer: "Please provide your unit information, desired artwork or logo, coin size, quantity, plating preference, and any special text or motto. Our design team will work with you to create the perfect coin that represents your unit's pride and tradition."
  },
  {
    question: "What packaging options are available?",
    answer: "We offer several packaging options including free poly bags, premium velvet bags ($0.60 each), protective acrylic cases ($1.00 each), and elegant velvet presentation cases ($4.00 each). Choose the option that best fits your ceremony or presentation needs."
  }
]

// Computed property that combines default FAQs with custom branch-specific FAQs
const displayedFAQs = computed(() => {
  return [...props.customFAQs, ...defaultFAQs]
})
</script>