<template>
  <div class="min-h-screen bg-gray-900">
    <ZeroNavbar />
    <TestQuote 
      page-title="Army Challenge Coins"
      breadcrumb-text="Army Challenge Coins"
      primary-image="/images/coins/army-coin-render.png"
    />
    
    <!-- Army Specific Content Section -->
    <div class="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-336">
        <div class="max-w-6xl mx-auto">
          <!-- Hero Section -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
              <CoinIcon />
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Army Challenge Coins
            </h2>
            <p class="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Honoring nearly 250 years of service from the Continental Army's formation in 1775 through today's modern ground forces with custom challenge coins that celebrate the warrior ethos.
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
              <h3 class="text-2xl font-bold text-white mb-4">Distinguished Tradition</h3>
              <p class="text-slate-300 leading-relaxed">
                America's oldest military service with the longest tradition of challenge coins. Embodying the seven Army values: <strong>Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, and Personal Courage</strong>. From Revolutionary War to modern conflicts, these coins symbolize unit pride and camaraderie.
              </p>
            </div>
            
            <!-- Design Elements Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 012-2h4a2 2 0 012 2v4"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Authentic Heraldry</h3>
              <p class="text-slate-300 leading-relaxed">
                Featuring Army stars, unit crests, distinctive unit insignia (DUI), and branch insignia. Traditional <strong>black and gold</strong> Army colors with unit-specific accents. AR 670-1 compliant designs with campaign ribbons and battle streamers.
              </p>
            </div>
            
            <!-- Mission Card -->
            <div class="bg-linear-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 backdrop-blur-xs border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Ground Combat Excellence</h3>
              <p class="text-slate-300 leading-relaxed">
                From <strong>Infantry crossed rifles to M1 Abrams tanks</strong>, our coins feature authentic combat arms imagery. Perfect for NCO inductions, command coins, deployment commemoratives, and MOS training graduations.
              </p>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="bg-linear-to-r from-slate-800/50 to-slate-900/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Army Challenge Coin Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Unit Crests & DUI</h4>
                <p class="text-slate-300 text-sm">Distinctive unit insignia and regimental crests</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">AR 670-1 Compliant</h4>
                <p class="text-slate-300 text-sm">Official Army regulation heraldic standards</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Military Durability</h4>
                <p class="text-slate-300 text-sm">Field conditions and long-term display ready</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                </div>
                <h4 class="text-white font-semibold mb-2">Branch Insignia</h4>
                <p class="text-slate-300 text-sm">MOS symbols and campaign ribbons</p>
              </div>
            </div>
          </div>
          
          <!-- Popular Uses Section -->
          <div class="bg-linear-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Popular Army Challenge Coin Uses</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">NCO Induction Ceremonies</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Command Coins</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Deployment Commemoratives</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">MOS Training Graduations</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Unit Recognition Awards</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Change of Command Events</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Combat Action Recognition</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Reserve & Guard Units</span>
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
                  <span class="text-slate-300">Army Birthday Events</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-slate-300">Special Operations Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <QualityContentSection />
    <MilitaryFAQ 
      branchName="Army"
      :customFAQs="armyFAQs"
    />
    <FAQSchema 
      :faqs="allFAQs" 
      pageName="Army Challenge Coins"
    />
    <SiteFooter />
  </div>
</template>

<script setup>
import QualityContentSection from '~/components/QualityContentSection.vue'
import MilitaryFAQ from '~/components/MilitaryFAQ.vue'
import FAQSchema from '~/components/FAQSchema.vue'

// Army-specific FAQs
const armyFAQs = [
  {
    question: "Can you include Army unit crests and insignia on my coins?",
    answer: "Yes! We specialize in accurately reproducing Army unit crests, distinctive unit insignia (DUI), and regimental crests. Our design team is familiar with AR 670-1 regulations and works to ensure your coins meet Army standards while honoring your unit's heritage."
  },
  {
    question: "Can you incorporate specific Army branch insignia like Infantry, Armor, or Artillery?",
    answer: "Yes! We regularly feature Army branch insignia including Infantry crossed rifles, Armor tank tracks, Artillery crossed cannons, Medical caduceus, Signal crossed flags, and all other branch symbols. Each insignia is rendered with authentic detail according to Army heraldic standards."
  },
  {
    question: "Do you make coins for Army Special Operations units like Rangers, Special Forces, and Airborne?",
    answer: "Absolutely! We create coins for elite Army units including 75th Ranger Regiment, Special Forces Groups, 82nd Airborne Division, 101st Airborne Division, and other specialized units. These coins feature authentic tabs, wings, and unit-specific imagery with appropriate operational security considerations."
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
    question: "Are your coins made in the USA?",
    answer: "Yes, we proudly manufacture all our challenge coins in the United States using American craftsmanship and the highest quality materials. We believe in supporting American manufacturing while delivering superior products to our military personnel."
  },
  {
    question: "What packaging options are available?",
    answer: "We offer several packaging options including free poly bags, premium velvet bags ($0.60 each), protective acrylic cases ($1.00 each), and elegant velvet presentation cases ($4.00 each). Choose the option that best fits your ceremony or presentation needs."
  }
]

// Combine all FAQs for schema
const allFAQs = [...armyFAQs, ...defaultFAQs]
</script>