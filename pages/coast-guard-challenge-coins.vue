<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Coast Guard Challenge Coins"
      breadcrumb-text="Coast Guard Challenge Coins"
      primary-image="/images/coins/coast-guard-coin-render.png"
    />
    <QualityContentSection />
    <MilitaryFAQ 
      branch-name="Coast Guard"
      :custom-faqs="coastGuardFAQs"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'

// Coast Guard-specific FAQs
const coastGuardFAQs = [
  {
    question: "Can you create coins for Coast Guard cutters and stations?",
    answer: "Absolutely! We specialize in Coast Guard cutter coins, station coins, and unit coins that honor the service's mission of maritime safety and security. Our coins can feature cutter hull numbers, station locations, and the Coast Guard's core values of Honor, Respect, and Devotion to Duty."
  },
  {
    question: "Do you make coins for Coast Guard achievements like rescue operations or maritime law enforcement?",
    answer: "Yes! We create coins for Coast Guard rescue operations, drug interdiction missions, maritime law enforcement achievements, and meritorious service recognition. These coins honor the brave men and women who serve as guardians of our nation's waters."
  }
]
</script>