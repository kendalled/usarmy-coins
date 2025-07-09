<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Navy Challenge Coins"
      breadcrumb-text="Navy Challenge Coins"
      primary-image="/images/coins/navy-coin-render.png"
    />
    <QualityContentSection />
    <MilitaryFAQ 
      branch-name="Navy"
      :custom-faqs="navyFAQs"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'

// Navy-specific FAQs
const navyFAQs = [
  {
    question: "Can you create coins for Navy ships and submarines?",
    answer: "Absolutely! We specialize in ship and submarine challenge coins, including hull numbers, commissioning dates, and deployment cruises. Our coins help preserve the proud traditions of naval vessels and honor the sailors who serve aboard them."
  },
  {
    question: "Do you make coins for Navy ceremonies like crossing the line or shellback initiations?",
    answer: "Yes! We create coins for time-honored Navy traditions including crossing the equator ceremonies, shellback initiations, chief pinning ceremonies, and retirement celebrations. These coins become treasured keepsakes that honor naval traditions and achievements."
  }
]
</script>