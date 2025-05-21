<template>
  <section id="our-story" class="py-16 md:py-20 bg-slate-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-slate-50 text-center">
        Our Story: <span class="text-orange-500">Two Decades of Coin Craftsmanship</span>
      </h2>

      <div class="space-y-16 md:space-y-24">
        <!-- Row 1: Image Left, Text Right -->
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="md:w-1/2">
            <img src="https://placehold.co/600x400/2d3748/e2e8f0?text=Our+Commitment" alt="Our Commitment to Quality" class="rounded-lg shadow-xl w-full h-auto object-cover border border-transparent hover:border-orange-500/50 hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl" />
          </div>
          <div class="md:w-1/2 text-center md:text-left">
            <h3 class="text-2xl font-semibold mb-4 text-slate-100">A Legacy of Service and Quality</h3>
            <p class="text-lg text-slate-300 leading-relaxed">
              At US Army Coins, we're more than just a business; we're a small, dedicated team with a big passion for honoring military service. For <span class="font-semibold text-orange-400">over 20 years</span>, we've been committed to designing and delivering top-quality custom challenge coins that tell a story and preserve legacies.
            </p>
          </div>
        </div>

        <!-- Row 2: Text Left, Image Right -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div class="md:w-1/2">
            <img src="https://placehold.co/600x400/1a202c/cbd5e0?text=Customer+Savings" alt="Passing Savings to Customers" class="rounded-lg shadow-xl w-full h-auto object-cover border border-transparent hover:border-orange-500/50 hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl" />
          </div>
          <div class="md:w-1/2 text-center md:text-left">
            <h3 class="text-2xl font-semibold mb-4 text-slate-100">Small Business, Big Value</h3>
            <p class="text-lg text-slate-300 leading-relaxed">
              We believe that exceptional quality shouldn't come with an exorbitant price tag. That's why we've deliberately <span class="font-semibold text-orange-400">kept our business small and agile</span>. This allows us to minimize overhead and, most importantly, <span class="font-semibold text-orange-400">pass those significant savings directly on to you</span>. You get premium, custom-designed coins without the premium markup.
            </p>
          </div>
        </div>

        <!-- Row 3: Image Left, Text Right (Optional additional content) -->
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="md:w-1/2">
            <img src="https://placehold.co/600x400/2d3748/e2e8f0?text=Proudly+Serving" alt="Serving Those Who Serve" class="rounded-lg shadow-xl w-full h-auto object-cover border border-transparent hover:border-orange-500/50 hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl" />
          </div>
          <div class="md:w-1/2 text-center md:text-left">
            <h3 class="text-2xl font-semibold mb-4 text-slate-100">Our Core Focus</h3>
            <p class="text-lg text-slate-300 leading-relaxed">
              Our focus has always been on <span class="font-semibold text-orange-400">quality, craftsmanship, and customer satisfaction</span>. We're proud to serve those who serve, ensuring every coin reflects the honor and dedication it represents.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StorySection'
}
</script>

<style scoped>
/* Scoped styles can be added here if Tailwind classes are not sufficient */
</style>
