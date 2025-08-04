<script setup>
useSeoMeta({
  title: 'Custom Military Challenge Coins | US Army Coins - Premium Quality Designed in USA',
  description: 'Order custom military challenge coins for all branches. Premium quality, designed in USA with free design consultation. Army, Navy, Air Force, Marines, Coast Guard & Space Force.',
  ogTitle: 'Custom Military Challenge Coins | US Army Coins - Premium Quality Designed in USA',
  ogDescription: 'Order custom military challenge coins for all branches. Premium quality, designed in USA with free design consultation. Army, Navy, Air Force, Marines, Coast Guard & Space Force.',
  ogImage: '/images/coins/army-challenge-coin-main.jpg',
  ogUrl: 'https://usarmycoins.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Military Challenge Coins | US Army Coins - Premium Quality Designed in USA',
  twitterDescription: 'Order custom military challenge coins for all branches. Premium quality, designed in USA with free design consultation. Army, Navy, Air Force, Marines, Coast Guard & Space Force.',
  twitterImage: '/images/coins/army-challenge-coin-main.jpg'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://usarmycoins.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "US Army Coins",
        "url": "https://usarmycoins.com",
        "logo": "https://usarmycoins.com/images/logo.png",
        "description": "Premium custom military challenge coins for all branches of the US military. Designed in USA with free design consultation.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "makesOffer": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Custom Military Challenge Coins",
            "description": "Premium custom challenge coins for Army, Navy, Air Force, Marines, Coast Guard, and Space Force",
            "category": "Military Coins",
            "brand": {
              "@type": "Brand",
              "name": "US Army Coins"
            }
          }
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <ZeroNavbar />
    <AnimatedHero />
    <OurCoins />
    <Process />
    <ZeroTestimonial />
    <ContentSection />
    <StorySection />
    <SiteFooter />
  </div>
</template>

<style scoped>
  html, body {
    scroll-behavior: smooth;
  }
</style>