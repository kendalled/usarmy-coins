<template>
  <div class="relative transform overflow-hidden rounded-2xl bg-slate-800 shadow-2xl transition-all max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Success Header -->
      <div class="p-4 sm:p-6 lg:p-8">
        <!-- Success Icon and Header -->
        <div class="text-center mb-6">
          <div class="mx-auto flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-500/10 mb-4 sm:mb-6">
            <svg class="h-6 w-6 sm:h-8 sm:w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">Quote Submitted Successfully!</h2>
          <p class="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Thank you for your interest in our custom challenge coins. We've received your quote request and will get back to you soon.
          </p>
        </div>

        <!-- Two Column Layout on Large Screens -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <!-- Left Column: What Happens Next -->
          <div class="bg-slate-700/50 rounded-xl p-4 sm:p-6 text-left">
            <h3 class="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center">What happens next?</h3>
            <div class="space-y-3 sm:space-y-4">
              <div class="flex items-start space-x-3">
                <div class="shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <p class="text-white font-medium text-sm sm:text-base">Design Review</p>
                  <p class="text-slate-400 text-xs sm:text-sm">Our design team will review your requirements and create initial concepts.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <p class="text-white font-medium text-sm sm:text-base">Free Proof Creation</p>
                  <p class="text-slate-400 text-xs sm:text-sm">We'll create a detailed digital proof of your custom coin design at no charge.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <p class="text-white font-medium text-sm sm:text-base">Personal Consultation</p>
                  <p class="text-slate-400 text-xs sm:text-sm">A design specialist will contact you within 24 hours to discuss your project.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Quote Summary -->
          <div class="bg-slate-700/30 rounded-xl p-4 sm:p-6 text-left">
            <h4 class="text-white font-medium mb-3 text-center text-sm sm:text-base">Your Quote Summary</h4>
            <div class="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <div class="text-slate-400">Size:</div>
              <div class="text-white">{{ submittedData.quoteData.size }}"</div>
              <div class="text-slate-400">Quantity:</div>
              <div class="text-white">{{ formatQuantity(submittedData.quoteData.quantity) }}</div>
              <div class="text-slate-400">Plating:</div>
              <div class="text-white">{{ submittedData.quoteData.plating }}</div>
              <div class="text-slate-400">Packaging:</div>
              <div class="text-white">{{ submittedData.quoteData.packaging }}</div>
            </div>
            <div class="mt-3 pt-3 border-t border-slate-600 flex justify-between items-center">
              <span class="text-slate-400">Estimated Total:</span>
              <span class="text-lg sm:text-xl font-bold text-orange-400">${{ submittedData.quoteData.estimatedTotal }}</span>
            </div>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div class="bg-slate-700/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <p class="text-slate-300 text-xs sm:text-sm mb-2 text-center">Questions? Contact us directly:</p>
          <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
            <a href="mailto:info@usarmycoins.com" class="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@usarmycoins.com</span>
            </a>
            <a href="tel:+1-555-0123" class="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(555) 012-3456</span>
            </a>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            @click="$emit('close')"
            class="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Continue Browsing
          </button>
          
          <button
            @click="createNewQuote"
            class="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            Create Another Quote
          </button>
        </div>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  submittedData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'newQuote'])

const formatQuantity = (quantity) => {
  if (quantity === "Other") return "Other"
  return quantity.toLocaleString()
}

const createNewQuote = () => {
  emit('newQuote')
}
</script>