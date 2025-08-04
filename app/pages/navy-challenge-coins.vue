<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Navy Challenge Coins"
      breadcrumb-text="Navy Challenge Coins"
      primary-image="/images/coins/navy-coin-render.png"
    />
    
    <!-- Navy Specific Content Section -->
    <div class="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-336">
        <div class="max-w-6xl mx-auto">
          <!-- Hero Section -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
              <CoinIcon />
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Navy Challenge Coins
            </h2>
            <p class="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Celebrating over 245 years of naval excellence from the Continental Navy's birth in 1775 through today's global maritime operations with custom challenge coins that honor the tradition of "Honor, Courage, Commitment."
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
              <h3 class="text-2xl font-bold text-white mb-4">Naval Heritage</h3>
              <p class="text-slate-300 leading-relaxed">
                Steeped in maritime tradition from John Paul Jones to modern carrier operations, Navy challenge coins embody the core values of <strong>Honor, Courage, and Commitment</strong>. From Revolutionary War frigates to nuclear submarines, these coins commemorate naval excellence and the bond between shipmates.
              </p>
            </div>
            
            <!-- Design Elements Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Maritime Design</h3>
              <p class="text-slate-300 leading-relaxed">
                Featuring authentic Navy anchors, ship silhouettes, warfare pins, and rating badges. Traditional <strong>Navy blue and gold</strong> colors with ship hull numbers and commissioning dates. Three-dimensional compass roses, fouled anchors, and trident imagery capture seafaring heritage.
              </p>
            </div>
            
            <!-- Mission Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Fleet Operations</h3>
              <p class="text-slate-300 leading-relaxed">
                From <strong>Nimitz-class carriers to Virginia-class submarines</strong>, our coins feature specific vessel types and maritime operations. Perfect for ship commissioning, deployment cruises, crossing the line ceremonies, and chief petty officer initiations.
              </p>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="bg-linear-to-r from-slate-800/50 to-slate-900/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Navy Challenge Coin Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Ship Silhouettes</h4>
                <p class="text-slate-300 text-sm">Authentic vessel profiles and hull classifications</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Warfare Insignias</h4>
                <p class="text-slate-300 text-sm">Surface warfare, submarine, and aviation pins</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Rating Badges</h4>
              <p class="text-slate-300 text-sm">Specialty marks and enlisted classification</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Naval Traditions</h4>
                <p class="text-slate-300 text-sm">Crossing the line and shellback ceremonies</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Popular Uses Section -->
        <div class="bg-linear-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-orange-500/20">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Popular Navy Challenge Coin Uses</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Ship Commissioning</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Deployment Cruises</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Chief Initiation</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Boot Camp Graduation</span>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Crossing the Line</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Command Recognition</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Submarine Dolphins</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Naval Aviation Wings</span>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Retirement Ceremonies</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Fleet Week Events</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Port Visits</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">Sea Trials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <QualityContentSection />
    <MilitaryFAQ 
      branchName="Navy"
      :customFAQs="navyFAQs"
    />
    <FAQSchema 
      :faqs="allFAQs" 
      pageName="Navy Challenge Coins"
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
  title: 'Custom Navy Challenge Coins | US Army Coins - Ship & Submarine Coins Made in USA',
  description: 'Order custom Navy challenge coins featuring ship silhouettes, submarine dolphins, warfare pins, and rating badges. Premium quality naval tradition coins designed in USA.',
  ogTitle: 'Custom Navy Challenge Coins | US Army Coins - Ship & Submarine Coins Made in USA',
  ogDescription: 'Order custom Navy challenge coins featuring ship silhouettes, submarine dolphins, warfare pins, and rating badges. Premium quality naval tradition coins designed in USA.',
  ogImage: '/images/coins/navy-coin-render.png',
  ogUrl: 'https://usarmycoins.com/navy-challenge-coins',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Navy Challenge Coins | US Army Coins - Ship & Submarine Coins Made in USA',
  twitterDescription: 'Order custom Navy challenge coins featuring ship silhouettes, submarine dolphins, warfare pins, and rating badges. Premium quality naval tradition coins designed in USA.',
  twitterImage: '/images/coins/navy-coin-render.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://usarmycoins.com/navy-challenge-coins' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Custom Navy Challenge Coins",
        "description": "Premium custom Navy challenge coins featuring ship silhouettes, submarine dolphins, warfare pins, and rating badges. Premium quality naval tradition coins designed in USA.",
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

// Navy-specific FAQs
const navyFAQs = [
  {
    question: "Can you create coins for Navy ships and submarines?",
    answer: "Absolutely! We specialize in ship and submarine challenge coins, including hull numbers, commissioning dates, and deployment cruises. Our coins help preserve the proud traditions of naval vessels and honor the sailors who serve aboard them."
  },
  {
    question: "Do you make coins for Navy ceremonies like crossing the line or shellback initiations?",
    answer: "Yes! We create coins for time-honored Navy traditions including crossing the equator ceremonies, shellback initiations, chief pinning ceremonies, and retirement celebrations. These coins become treasured keepsakes that honor naval traditions and achievements."
  },
  {
    question: "Can you incorporate Navy warfare pins and rating badges into coin designs?",
    answer: "Yes! We frequently feature Navy warfare insignia including Surface Warfare (SWO), Submarine Warfare, and Naval Aviation pins, along with rating badges and specialty marks. Each design accurately represents the technical expertise and qualifications of Navy personnel, from Boatswain's Mate anchors to Electronics Technician lightning bolts."
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
const allFAQs = [...navyFAQs, ...defaultFAQs]
</script>