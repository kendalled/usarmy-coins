<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Space Force Challenge Coins"
      breadcrumb-text="Space Force Challenge Coins"
      primary-image="/images/coins/space-force-coin-render.png"
    />
    
    <!-- Space Force Specific Content Section -->
    <div class="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-336">
        <div class="max-w-6xl mx-auto">
          <!-- Hero Section -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
              <CoinIcon />
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Force Challenge Coins
            </h2>
            <p class="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Celebrating America's newest military branch since 2019 with custom challenge coins that honor the Guardians who protect our nation's interests in the final frontier with the motto "Semper Supra" - Always Above.
            </p>
          </div>
          
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <!-- Heritage Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Guardian Spirit</h3>
              <p class="text-slate-300 leading-relaxed">
                Born from the Air Force Space Command heritage, Space Force challenge coins embody the emerging culture of America's newest service branch. With core values of <strong>Character, Connection, Commitment, and Courage</strong>, these coins represent the pioneering spirit of Guardians protecting the high ground of space.
              </p>
            </div>
            
            <!-- Design Elements Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Space Age Design</h3>
              <p class="text-slate-300 leading-relaxed">
                Featuring futuristic Space Force delta symbols, satellite imagery, orbital mechanics, and constellation patterns. Modern <strong>dark blue and silver</strong> color schemes with metallic accents representing space operations. Rocket trajectories and GPS satellite networks showcase technological superiority.
              </p>
            </div>
            
            <!-- Mission Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Final Frontier</h3>
              <p class="text-slate-300 leading-relaxed">
                From <strong>GPS satellites to missile warning systems</strong>, our coins feature space-based assets and operations. Perfect for delta activations, training graduations, cyber warfare recognitions, and space operations mission commemoratives.
              </p>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="bg-linear-to-r from-slate-800/50 to-slate-900/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Space Force Challenge Coin Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Delta Insignia</h4>
                <p class="text-slate-300 text-sm">Authentic Space Force unit delta symbols</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Satellite Systems</h4>
                <p class="text-slate-300 text-sm">GPS and communication satellite imagery</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Orbital Mechanics</h4>
                <p class="text-slate-300 text-sm">Space trajectories and mission paths</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Cyber Operations</h4>
                <p class="text-slate-300 text-sm">Space-based cyber warfare capabilities</p>
              </div>
            </div>
          </div>
          
          <!-- Popular Uses Section -->
          <div class="bg-linear-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Popular Space Force Challenge Coin Uses</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Delta Activations</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Training Graduations</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Space Systems Operations</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Satellite Launch Support</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Guardian Transition</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Cyber Operations</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Space Surveillance</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">GPS Operations</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Retirement Ceremonies</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Promotion Recognition</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Missile Warning Systems</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Innovation Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <QualityContentSection />
    <MilitaryFAQ 
      branchName="Space Force"
      :customFAQs="spaceForceFAQs"
    />
    <FAQSchema 
      :faqs="allFAQs" 
      pageName="Space Force Challenge Coins"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'
import FAQSchema from '~/components/FAQSchema.vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Custom Space Force Challenge Coins | US Army Coins - Semper Supra Guardian Made in USA',
  description: 'Order custom Space Force challenge coins featuring delta insignia, satellite systems, and space operations imagery. Premium quality Semper Supra Guardian coins designed in USA.',
  ogTitle: 'Custom Space Force Challenge Coins | US Army Coins - Semper Supra Guardian Made in USA',
  ogDescription: 'Order custom Space Force challenge coins featuring delta insignia, satellite systems, and space operations imagery. Premium quality Semper Supra Guardian coins designed in USA.',
  ogImage: '/images/coins/space-force-coin-render.png',
  ogUrl: 'https://usarmycoins.com/space-force-challenge-coins',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Space Force Challenge Coins | US Army Coins - Semper Supra Guardian Made in USA',
  twitterDescription: 'Order custom Space Force challenge coins featuring delta insignia, satellite systems, and space operations imagery. Premium quality Semper Supra Guardian coins designed in USA.',
  twitterImage: '/images/coins/space-force-coin-render.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://usarmycoins.com/space-force-challenge-coins' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Custom Space Force Challenge Coins",
        "description": "Premium custom Space Force challenge coins featuring delta insignia, satellite systems, and space operations imagery. Premium quality Semper Supra Guardian coins designed in USA.",
        "brand": {
          "@type": "Brand",
          "name": "US Army Coins"
        },
        "category": "Military Challenge Coins",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "seller": {
            "@type": "Organization",
            "name": "US Army Coins"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      })
    }
  ]
})

// Space Force-specific FAQs
const spaceForceFAQs = [
  {
    question: "Can you create coins for Space Force units and deltas?",
    answer: "Yes! We specialize in Space Force delta coins, squadron coins, and unit coins that honor America's newest military branch. Our coins can feature delta insignia, squadron patches, and space-themed designs that represent the Space Force's mission to secure our nation's interests in space."
  },
  {
    question: "Do you make coins for Space Force training and operational milestones?",
    answer: "Absolutely! We create coins for Space Force training graduations, operational achievements, and career milestones. These coins commemorate the dedication required to serve in the final frontier and honor the Guardian spirit of the Space Force."
  },
  {
    question: "Can you incorporate Space Force satellite systems and cyber operations into coin designs?",
    answer: "Yes! We frequently feature Space Force mission elements including GPS satellite constellations, missile warning systems, space surveillance networks, and cyber operations symbology. Each design reflects the high-tech nature of space operations and the critical role Guardians play in protecting space-based assets that enable modern military and civilian communications, navigation, and surveillance capabilities."
  }
]

// Default FAQs from MilitaryFAQ component
const defaultFAQs = [
  {
    question: "What materials are used in your challenge coins?",
    answer: "Our challenge coins are crafted from high-quality metals including brass, copper, and zinc alloy. Each coin features durable enamel finishes and premium plating options including antique gold, silver, copper, and black metal finishes that maintain their appearance over time."
  },
  {
    question: "How long does it take to receive my challenge coins?",
    answer: "Standard production time is 10-14 business days after artwork approval. We also offer rush production for 7-day delivery with additional fees. All orders include free shipping via FedEx Ground for orders over $500."
  },
  {
    question: "Can I see a proof before my coins are manufactured?",
    answer: "Absolutely! We provide detailed digital proofs and offer unlimited revisions at no extra charge. We won't begin production until you're completely satisfied with the design. This ensures your coins meet your exact specifications and expectations."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order is 50 coins. We offer volume discounts starting at 100 coins with savings up to 51% on larger orders. The more you order, the better the per-unit price becomes."
  },
  {
    question: "Do you offer custom shapes and sizes?",
    answer: "Yes! While our standard sizes range from 1.5\" to 3.0\" in diameter, we can create custom shapes and sizes to match your specific requirements. Custom shapes include dog tags, shields, badges, and virtually any design you can imagine."
  },
  {
    question: "What information do I need to provide for my order?",
    answer: "Please provide your unit information, desired artwork or logo, coin size, quantity, plating preference, and any special text or motto. Our design team will work with you to create the perfect coin that represents your unit's pride and tradition."
  },
  {
    question: "What packaging options are available?",
    answer: "We offer several packaging options including free poly bags, premium velvet bags ($0.60 each), protective acrylic cases ($1.00 each), and elegant velvet presentation cases ($4.00 each). Choose the option that best fits your ceremony or presentation needs."
  }
]

// Combine all FAQs for schema
const allFAQs = [...spaceForceFAQs, ...defaultFAQs]
</script>