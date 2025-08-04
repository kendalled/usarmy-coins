<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Commemorative Challenge Coins"
      breadcrumb-text="Commemorative Challenge Coins"
      primary-image="/images/coins/army-coin-render.png"
    />
    
    <!-- Commemorative Specific Content Section -->
    <div class="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-336">
        <div class="max-w-6xl mx-auto">
          <!-- Hero Section -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
              <CoinIcon />
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Commemorative Challenge Coins
            </h2>
            <p class="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Preserve meaningful moments, honor achievements, and celebrate milestones with custom commemorative challenge coins that capture the significance of special events, anniversaries, and memorable occasions.
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
              <h3 class="text-2xl font-bold text-white mb-4">Meaningful Moments</h3>
              <p class="text-slate-300 leading-relaxed">
                From historic anniversaries to personal achievements, commemorative challenge coins transform significant events into lasting treasures. Whether celebrating <strong>company milestones, retirement ceremonies, or special recognitions</strong>, these coins serve as tangible reminders of important moments in time.
              </p>
            </div>
            
            <!-- Design Elements Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Custom Storytelling</h3>
              <p class="text-slate-300 leading-relaxed">
                Each commemorative coin tells a unique story through personalized design elements including <strong>dates, names, logos, and special imagery</strong>. Premium finishes, edge text, and dual-sided designs allow for comprehensive storytelling and maximum visual impact.
              </p>
            </div>
            
            <!-- Mission Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Lasting Legacy</h3>
              <p class="text-slate-300 leading-relaxed">
                Built to endure with <strong>museum-quality materials and craftsmanship</strong>, commemorative coins become family heirlooms and organizational treasures. Perfect for anniversary celebrations, memorial services, and recognition ceremonies that deserve permanent remembrance.
              </p>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="bg-linear-to-r from-slate-800/50 to-slate-900/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Commemorative Challenge Coin Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Date & Timeline</h4>
                <p class="text-slate-300 text-sm">Precise dates, anniversaries, and milestone years</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Custom Imagery</h4>
                <p class="text-slate-300 text-sm">Logos, portraits, and symbolic representations</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Premium Finishes</h4>
                <p class="text-slate-300 text-sm">Antique, polished, and specialty metal options</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Dual-Sided Design</h4>
                <p class="text-slate-300 text-sm">Maximum storytelling with front and back artwork</p>
              </div>
            </div>
          </div>
          
          <!-- Popular Uses Section -->
          <div class="bg-linear-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Popular Commemorative Challenge Coin Uses</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Anniversary Celebrations</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Retirement Ceremonies</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Memorial Services</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Historic Milestones</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Company Achievements</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Special Events</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Graduation Ceremonies</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Award Presentations</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Fundraising Events</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Legacy Projects</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Community Recognition</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Family Heirlooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <QualityContentSection />
    <MilitaryFAQ 
      branchName="Commemorative"
      :customFAQs="commemorativeFAQs"
    />
    <FAQSchema 
      :faqs="allFAQs" 
      pageName="Commemorative Challenge Coins"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'
import FAQSchema from '~/components/FAQSchema.vue'

// Commemorative-specific FAQs
const commemorativeFAQs = [
  {
    question: "What types of events work best for commemorative challenge coins?",
    answer: "Commemorative coins are perfect for milestone anniversaries, retirement ceremonies, memorial services, company achievements, graduation events, and historic celebrations. They work exceptionally well for any occasion where you want to create a lasting memento that captures the significance and emotional value of the moment."
  },
  {
    question: "Can you include specific dates, names, and custom artwork on commemorative coins?",
    answer: "Yes! Commemorative coins are designed for maximum personalization including precise dates, individual names, company logos, portraits, and custom artwork. We can incorporate meaningful imagery, timeline elements, and dual-sided designs to tell your complete story with museum-quality detail and craftsmanship."
  },
  {
    question: "What makes commemorative coins different from regular challenge coins?",
    answer: "Commemorative coins focus on preserving specific moments in time with enhanced storytelling elements, premium finishes, and lasting quality. They often feature more detailed artwork, significant dates, multiple design elements, and are crafted with archival materials to serve as permanent keepsakes and family heirlooms rather than operational tokens."
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
const allFAQs = [...commemorativeFAQs, ...defaultFAQs]
</script>