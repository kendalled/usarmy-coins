<template>
  <div>
    <!-- FAQ Schema for Search Engines -->
  </div>
</template>

<script setup>
import { useHead } from '#app'

const props = defineProps({
  faqs: {
    type: Array,
    required: true
  },
  pageName: {
    type: String,
    default: 'Challenge Coins'
  }
})

// Generate FAQ structured data for SEO
const generateFAQSchema = () => {
  const faqItems = props.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for schema
    }
  }))

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems
  }
}

// Add structured data to head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateFAQSchema())
    }
  ]
})
</script>