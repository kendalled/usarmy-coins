<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="bg-white">
 <NavAndHero />

  <main>
    <CategorySection />

    <!-- Featured section -->
    <section aria-labelledby="social-impact-heading" class="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
      <div class="relative overflow-hidden rounded-lg">
        <div class="absolute inset-0">
          <img src="/challenge-coin-collection.jpg" alt="" class="size-full object-cover">
        </div>
        <div class="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 id="social-impact-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span class="block sm:inline">Custom coins</span>
              <span class="block sm:inline"> for every branch</span>
            </h2>
            <p class="mt-3 text-xl text-white">Since 1999, we have produced custom coins for our first responders, soldiers, and countless others. From complimentary art proofs to industry-leading pricing, you know you are making the right choice when you order with us.</p>
            <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Designs</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Collection section -->
    <section aria-labelledby="collection-heading" class="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
      <h2 id="collection-heading" class="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
      <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

      <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <a href="#" class="group block">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg" alt="Brown leather key ring with brass metal loops and rivets on wood table." class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]">
          <h3 class="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
          <p class="mt-2 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
        </a>
        <a href="#" class="group block">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg" alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard." class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]">
          <h3 class="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
          <p class="mt-2 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will look great.</p>
        </a>
        <a href="#" class="group block">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg" alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad." class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]">
          <h3 class="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
          <p class="mt-2 text-sm text-gray-500">Be more productive than enterprise project managers with a single piece of paper.</p>
        </a>
      </div>
    </section>

    <!-- Featured section -->
    <section aria-labelledby="comfort-heading" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="relative overflow-hidden rounded-lg">
        <div class="absolute inset-0">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-02.jpg" alt="" class="size-full object-cover">
        </div>
        <div class="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 id="comfort-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
            <p class="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
            <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Focus</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer aria-labelledby="footer-heading" class="bg-gray-900">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 class="text-sm font-medium text-white">Shop</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Bags</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Tees</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Objects</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Home Goods</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Accessories</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Who we are</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Sustainability</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Press</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Careers</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Terms &amp; Conditions</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 class="text-sm font-medium text-white">Account</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Manage Account</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Returns &amp; Exchanges</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Redeem a Gift Card</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white">Connect</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Contact Us</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 md:mt-16 xl:mt-0">
          <h3 class="text-sm font-medium text-white">Sign up for our newsletter</h3>
          <p class="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
          <form class="mt-2 flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" type="text" autocomplete="email" required class="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
            <div class="ml-4 shrink-0">
              <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900">Sign up</button>
            </div>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 py-10">
        <p class="text-sm text-gray-400">Copyright &copy; 2025 US Army Coins, LLC.</p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  methods: {
    toggleTab (tabClicked) {
      // Toggling the value of the passed tab
      this[tabClicked] = !this[tabClicked];
      console.log(`${tabClicked} is now`, this[tabClicked]);
    }
  }
}
</script>