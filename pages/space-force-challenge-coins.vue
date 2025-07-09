<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Space Force Challenge Coins"
      breadcrumb-text="Space Force Challenge Coins"
      primary-image="/images/coins/space-force-coin-render.png"
    />
    <QualityContentSection />
    <MilitaryFAQ 
      branch-name="Space Force"
      :custom-faqs="spaceForceFAQs"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'

// Space Force-specific FAQs
const spaceForceFAQs = [
  {
    question: "Can you create coins for Space Force units and deltas?",
    answer: "Yes! We specialize in Space Force delta coins, squadron coins, and unit coins that honor America's newest military branch. Our coins can feature delta insignia, squadron patches, and space-themed designs that represent the Space Force's mission to secure our nation's interests in space."
  },
  {
    question: "Do you make coins for Space Force training and operational milestones?",
    answer: "Absolutely! We create coins for Space Force training graduations, operational achievements, and career milestones. These coins commemorate the dedication required to serve in the final frontier and honor the Guardian spirit of the Space Force."
  }
]
</script>