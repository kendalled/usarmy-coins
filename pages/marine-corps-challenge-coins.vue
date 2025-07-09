<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Marine Corps Challenge Coins"
      breadcrumb-text="Marine Corps Challenge Coins"
      primary-image="/images/coins/marine-corps-coin-render.png"
    />
    <QualityContentSection />
    <MilitaryFAQ 
      branch-name="Marine Corps"
      :custom-faqs="marineCorpsFAQs"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'

// Marine Corps-specific FAQs
const marineCorpsFAQs = [
  {
    question: "Can you create coins for Marine Corps units and deployments?",
    answer: "Oorah! We specialize in Marine Corps unit coins for infantry battalions, aviation squadrons, logistics units, and MEUs. Our coins honor the Eagle, Globe, and Anchor and can include unit designations, deployment locations, and the Marine Corps values of Honor, Courage, and Commitment."
  },
  {
    question: "Do you make coins for Marine Corps milestones like earning the Eagle, Globe, and Anchor?",
    answer: "Absolutely! We create coins for Marine Corps boot camp graduation, MOS school completion, promotion ceremonies, and career achievements. These coins celebrate the transformation from recruit to Marine and honor the proud traditions of the Corps."
  }
]
</script>