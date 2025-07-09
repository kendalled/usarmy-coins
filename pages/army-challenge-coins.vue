<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Army Challenge Coins"
      breadcrumb-text="Army Challenge Coins"
      primary-image="/images/coins/army-coin-render.png"
    />
    <QualityContentSection />
    <MilitaryFAQ 
      branch-name="Army"
      :custom-faqs="armyFAQs"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'

// Army-specific FAQs
const armyFAQs = [
  {
    question: "Can you include Army unit crests and insignia on my coins?",
    answer: "Yes! We specialize in accurately reproducing Army unit crests, distinctive unit insignia (DUI), and regimental crests. Our design team is familiar with AR 670-1 regulations and works to ensure your coins meet Army standards while honoring your unit's heritage."
  },
  {
    question: "Do you create coins for Army ceremonies and promotions?",
    answer: "Absolutely! We create coins for NCO inductions, promotion ceremonies, change of command events, deployments, and retirement celebrations. Many Army units use our coins to recognize exceptional service, unit achievements, and milestone events in a soldier's career."
  }
]
</script>