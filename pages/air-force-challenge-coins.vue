<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Air Force Challenge Coins"
      breadcrumb-text="Air Force Challenge Coins"
      primary-image="/images/coins/air-force-coin-render.png"
    />
    <QualityContentSection />
    <MilitaryFAQ 
      branch-name="Air Force"
      :custom-faqs="airForceFAQs"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'

// Air Force-specific FAQs
const airForceFAQs = [
  {
    question: "Can you create coins for Air Force squadrons and wings?",
    answer: "Yes! We specialize in squadron and wing challenge coins, including fighter squadrons, bomber wings, transport units, and support squadrons. Our coins feature accurate squadron patches, wing insignia, and aircraft silhouettes that represent the proud heritage of Air Force units."
  },
  {
    question: "Do you make coins for Air Force training milestones like pilot wings or technical school graduation?",
    answer: "Absolutely! We create coins for pilot training graduations, technical school completions, PME achievements, and career milestone events. These coins commemorate the dedication and skill required to earn Air Force specialties and leadership positions."
  }
]
</script>