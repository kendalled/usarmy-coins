<template>
    <div class="min-h-screen bg-gray-900">
        <ZeroNavbar />
        <!-- Hero Section -->
        <QuoteHero />
        <!-- Quote Form Section -->
        <QuoteFormSection />
        <!-- Testimonials Section -->
        <MixedTestimonials />
        <!-- Quality Content Section -->
        <QualityContentSection />
        <!-- Footer -->
        <SiteFooter />
    </div>
</template>

<script setup>
import QuoteHero from "~/components/QuoteHero.vue";
import QuoteFormSection from "~/components/QuoteFormSection.vue";
import MixedTestimonials from "~/components/MixedTestimonials.vue";
import QualityContentSection from "~/components/QualityContentSection.vue";

// SEO Meta
useHead({
    title: "Get Your Free Military Challenge Coin Quote | US Army Coins",
    meta: [
        {
            name: "description",
            content:
                "Get a free quote for custom military challenge coins. Professional design, premium quality, and fast turnaround for all branches of service. Made in USA with 100% satisfaction guarantee.",
        },
        {
            name: "keywords",
            content:
                "military challenge coins quote, custom challenge coins, army coins, navy coins, air force coins, marine coins, coast guard coins, space force coins",
        },
        {
            property: "og:title",
            content: "Get Your Free Military Challenge Coin Quote",
        },
        {
            property: "og:description",
            content:
                "Custom military challenge coins for all branches. Get your free quote with digital proof. Made in USA, 10-14 day delivery.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content: "Free Military Challenge Coin Quote",
        },
        {
            name: "twitter:description",
            content:
                "Custom challenge coins for all military branches. Professional quality, fast turnaround.",
        },
    ],
});
</script>
