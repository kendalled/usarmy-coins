<template>
  <div>
    <ZeroNavbar />
    <SamplePricing />
    <PricingPage v-show="false" 
      :hero-title="heroTitle"
      :hero-subtitle="heroSubtitle"
      :tiers="pricingTiers"
      :comparison-categories="comparisonCategories"
      :faq-title="faqTitle"
      :faqs="faqs"
      :footer-logo="footerLogo"
      :company-name="companyName"
      :tagline="tagline"
      :social-links="socialLinks"
      :left-sections="leftSections"
      :right-sections="rightSections"
      :copyright="copyright"
      @frequency-change="handleFrequencyChange"
      @tier-selected="handleTierSelected"
    />
  </div>
</template>

<script setup>
import { h } from 'vue'

// SEO Meta
useHead({
  title: 'Challenge Coin Pricing | US Army Coins',
  meta: [
    { name: 'description', content: 'Transparent pricing for premium military challenge coins. Volume discounts up to 51% off. Free digital proofs, free shipping over $500, and made in USA.' }
  ]
})

// Social Media Icons
const FacebookIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true'
}, [
  h('path', {
    d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  })
])

const InstagramIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true'
}, [
  h('path', {
    d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
  })
])

const LinkedInIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true'
}, [
  h('path', {
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  })
])

// Data constants
const heroTitle = 'Transparent Pricing for Premium Challenge Coins'
const heroSubtitle = 'Premium military challenge coins with no hidden fees. Volume discounts up to 51% off. Every coin backed by our satisfaction guarantee and made in the USA.'

const pricingTiers = [
  {
    name: 'Small Size',
    description: 'Perfect for individual recognition.',
    monthlyPrice: 485,
    annualPrice: 235,
    features: [
      '1.50" - 1.75" diameter',
      'Perfect for individual recognition',
      'Free digital proofs',
      'Premium plating options',
      'Made in USA'
    ],
    featured: false
  },
  {
    name: 'Standard Size',
    description: 'Most popular military size.',
    monthlyPrice: 580,
    annualPrice: 288,
    features: [
      '2.0" - 2.5" diameter',
      'Most popular military size',
      'Perfect detail visibility',
      'Free shipping over $500',
      'Rush orders available',
      'Made in USA',
      'Free digital proofs',
      'Unlimited revisions'
    ],
    featured: true
  },
  {
    name: 'Large Size',
    description: 'Maximum artwork detail.',
    monthlyPrice: 829,
    annualPrice: 461,
    features: [
      '2.75" - 3.0" diameter',
      'Maximum artwork detail',
      'Premium presentation',
      'Free digital proofs',
      'Made in USA',
      'Custom shapes available'
    ],
    featured: false
  }
]

const comparisonCategories = [
  {
    name: 'Size & Specifications',
    features: [
      {
        name: 'Diameter Range',
        tiers: { 'Small Size': '1.50" - 1.75"', 'Standard Size': '2.0" - 2.5"', 'Large Size': '2.75" - 3.0"' }
      },
      {
        name: 'Minimum Order',
        tiers: { 'Small Size': '50 coins', 'Standard Size': '50 coins', 'Large Size': '50 coins' }
      },
      {
        name: 'Custom Shapes',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      },
      {
        name: 'Production Time',
        tiers: { 'Small Size': '10-14 days', 'Standard Size': '10-14 days', 'Large Size': '10-14 days' }
      }
    ]
  },
  {
    name: 'Design & Quality',
    features: [
      {
        name: 'Digital Proofs',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      },
      {
        name: 'Unlimited Revisions',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      },
      {
        name: 'Color Options',
        tiers: { 'Small Size': '3 options', 'Standard Size': '3 options', 'Large Size': '3 options' }
      },
      {
        name: 'Premium Plating',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      }
    ]
  },
  {
    name: 'Service & Support',
    features: [
      {
        name: 'Made in USA',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      },
      {
        name: 'Free Shipping',
        tiers: { 'Small Size': 'Over $500', 'Standard Size': 'Over $500', 'Large Size': 'Over $500' }
      },
      {
        name: 'Rush Orders',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      },
      {
        name: 'Satisfaction Guarantee',
        tiers: { 'Small Size': true, 'Standard Size': true, 'Large Size': true }
      }
    ]
  }
]

const faqTitle = 'Frequently Asked Questions'
const faqs = [
  {
    question: 'What materials are used in your challenge coins?',
    answer: 'Our challenge coins are crafted from high-quality metals including brass, copper, and zinc alloy. Each coin features durable enamel finishes and premium plating options including antique gold, silver, copper, and black metal finishes that maintain their appearance over time.'
  },
  {
    question: 'How long does it take to receive my challenge coins?',
    answer: 'Standard production time is 10-14 business days after artwork approval. We also offer rush production for 7-day delivery with additional fees. All orders include free shipping via FedEx Ground for orders over $500.'
  },
  {
    question: 'Can I see a proof before my coins are manufactured?',
    answer: 'Absolutely! We provide detailed digital proofs and offer unlimited revisions at no extra charge. We won\'t begin production until you\'re completely satisfied with the design. This ensures your coins meet your exact specifications and expectations.'
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'Our minimum order is 50 coins. We offer volume discounts starting at 100 coins with savings up to 51% on larger orders. The more you order, the better the per-unit price becomes.'
  },
  {
    question: 'Do you offer custom shapes and sizes?',
    answer: 'Yes! While our standard sizes range from 1.5" to 3.0" in diameter, we can create custom shapes and sizes to match your specific requirements. Custom shapes include dog tags, shields, badges, and virtually any design you can imagine.'
  },
  {
    question: 'Are your coins made in the USA?',
    answer: 'Yes, we proudly manufacture all our challenge coins in the United States using American craftsmanship and the highest quality materials. We believe in supporting American manufacturing while delivering superior products to our military personnel.'
  }
]

const footerLogo = '/images/logo-white.svg'
const companyName = 'US Army Coins'
const tagline = 'Premium military challenge coins made in the USA. Serving our troops with pride and precision since day one.'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon }
]

const leftSections = [
  {
    title: 'Services',
    links: [
      { name: 'Challenge Coins', href: '/' },
      { name: 'Custom Design', href: '/design' },
      { name: 'Rush Orders', href: '/rush' },
      { name: 'Bulk Orders', href: '/bulk' },
      { name: 'Free Quotes', href: '/quote' }
    ]
  },
  {
    title: 'Military Branches',
    links: [
      { name: 'Army Coins', href: '/army' },
      { name: 'Navy Coins', href: '/navy' },
      { name: 'Air Force Coins', href: '/air-force' },
      { name: 'Marines Coins', href: '/marines' },
      { name: 'Coast Guard Coins', href: '/coast-guard' }
    ]
  }
]

const rightSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/process' },
      { name: 'Quality Guarantee', href: '/quality' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Order Status', href: '/order-status' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Help Center', href: '/help' }
    ]
  }
]

const copyright = '© 2024 US Army Coins. All rights reserved. Proudly made in the USA.'

// Event Handlers
const handleFrequencyChange = (frequency) => {
  console.log('Frequency changed to:', frequency)
}

const handleTierSelected = (tier) => {
  console.log('Tier selected:', tier)
  navigateTo(`/quote?size=${tier}`)
}
</script>

<style scoped>
/* Any custom styles specific to this page */
</style>