<template>
  <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
    <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
      {{ title }}
    </h2>
    <dl class="mt-20 divide-y divide-gray-900/10">
      <div 
        v-for="faq in faqs" 
        :key="faq.question"
        class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
      >
        <dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
          {{ faq.question }}
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="text-base/7 text-gray-600">
            {{ faq.answer }}
          </p>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Frequently asked questions'
  },
  faqs: {
    type: Array,
    required: true
  }
})
</script>