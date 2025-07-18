<template>
  <div class="bg-white">
    <main>
      <form class="group/tiers isolate overflow-hidden">
        <PricingHeroGrid 
          :title="heroTitle"
          :subtitle="heroSubtitle"
          :frequency="frequency"
          :tiers="tiers"
          @frequency-change="handleFrequencyChange"
          @tier-selected="handleTierSelected"
        />
        
        <FeatureComparison 
          :tiers="tiers"
          :comparison-categories="comparisonCategories"
        />
      </form>
      
      <FAQ 
        :title="faqTitle"
        :faqs="faqs"
      />
    </main>
    
    <PricingFooter 
      :logo="footerLogo"
      :company-name="companyName"
      :tagline="tagline"
      :social-links="socialLinks"
      :left-sections="leftSections"
      :right-sections="rightSections"
      :copyright="copyright"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const frequency = ref('monthly')

const props = defineProps({
  heroTitle: {
    type: String,
    default: 'Pricing that grows with you'
  },
  heroSubtitle: {
    type: String,
    default: 'Choose an affordable plan that\'s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.'
  },
  tiers: {
    type: Array,
    default: () => [
      {
        name: 'Starter',
        description: 'Everything you need to get started.',
        monthlyPrice: 19,
        annualPrice: 199,
        features: [
          'Custom domains',
          'Edge content delivery',
          'Advanced analytics'
        ],
        featured: false
      },
      {
        name: 'Scale',
        description: 'Added flexibility at scale.',
        monthlyPrice: 99,
        annualPrice: 999,
        features: [
          'Custom domains',
          'Edge content delivery',
          'Advanced analytics',
          'Quarterly workshops',
          'Single sign-on (SSO)',
          'Priority phone support'
        ],
        featured: true
      },
      {
        name: 'Growth',
        description: 'All the extras for your growing team.',
        monthlyPrice: 49,
        annualPrice: 499,
        features: [
          'Custom domains',
          'Edge content delivery',
          'Advanced analytics',
          'Quarterly workshops'
        ],
        featured: false
      }
    ]
  },
  comparisonCategories: {
    type: Array,
    default: () => [
      {
        name: 'Features',
        features: [
          {
            name: 'Edge content delivery',
            tiers: { 'Starter': true, 'Scale': true, 'Growth': true }
          },
          {
            name: 'Custom domains',
            tiers: { 'Starter': '1', 'Scale': 'Unlimited', 'Growth': '3' }
          },
          {
            name: 'Team members',
            tiers: { 'Starter': '3', 'Scale': 'Unlimited', 'Growth': '20' }
          },
          {
            name: 'Single sign-on (SSO)',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': false }
          }
        ]
      },
      {
        name: 'Reporting',
        features: [
          {
            name: 'Advanced analytics',
            tiers: { 'Starter': true, 'Scale': true, 'Growth': true }
          },
          {
            name: 'Basic reports',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': true }
          },
          {
            name: 'Professional reports',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': false }
          },
          {
            name: 'Custom report builder',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': false }
          }
        ]
      },
      {
        name: 'Support',
        features: [
          {
            name: '24/7 online support',
            tiers: { 'Starter': true, 'Scale': true, 'Growth': true }
          },
          {
            name: 'Quarterly workshops',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': true }
          },
          {
            name: 'Priority phone support',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': false }
          },
          {
            name: '1:1 onboarding tour',
            tiers: { 'Starter': false, 'Scale': true, 'Growth': false }
          }
        ]
      }
    ]
  },
  faqTitle: {
    type: String,
    default: 'Frequently asked questions'
  },
  faqs: {
    type: Array,
    default: () => [
      {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      },
      {
        question: "How do you make holy water?",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus."
      },
      {
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
      },
      {
        question: "Why do you never see elephants hiding in trees?",
        answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      },
      {
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer: "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error."
      },
      {
        question: "Why did the invisible man turn down the job offer?",
        answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius."
      }
    ]
  },
  footerLogo: {
    type: String,
    default: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
  },
  companyName: {
    type: String,
    default: 'Company name'
  },
  tagline: {
    type: String,
    default: 'Making the world a better place through constructing elegant hierarchies.'
  },
  socialLinks: {
    type: Array,
    default: () => []
  },
  leftSections: {
    type: Array,
    default: () => []
  },
  rightSections: {
    type: Array,
    default: () => []
  },
  copyright: {
    type: String,
    default: '© 2024 Your Company, Inc. All rights reserved.'
  }
})

const emit = defineEmits(['frequency-change', 'tier-selected'])

const handleFrequencyChange = (newFrequency) => {
  frequency.value = newFrequency
  emit('frequency-change', newFrequency)
}

const handleTierSelected = (tier) => {
  emit('tier-selected', tier)
}
</script>