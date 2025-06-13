<template>
  <div class="bg-white">
  <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
  <div v-show="mobileOpen" class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.
    -->
    <transition enter-active-class="transition-opacity ease-linear duration-300" 
                  enter-from-class="opacity-0" enter-to-class="opacity-100" 
                  leave-active-class="transition-opacity ease-linear duration-300" 
                  leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="mobileOpen" class="fixed inset-0 bg-black/25" aria-hidden="true"></div>
    </transition>
    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.
      -->
      <transition enter-active-class="transition ease-in-out duration-300 transform" 
                  enter-from-class="-translate-x-full" enter-to-class="translate-x-0" 
                  leave-active-class="transition ease-in-out duration-300 transform" 
                  leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
      <div v-show="mobileOpen" class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        <div class="flex px-4 pb-2 pt-5">
          <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Links -->
        <div class="mt-2">
          <div class="border-b border-gray-200">
            <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
              <!-- Selected: "border-yellow-600 text-yellow-600", Not Selected: "border-transparent text-gray-900" -->
              <button id="tabs-1-tab-1" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>
              <!-- Selected: "border-yellow-600 text-yellow-600", Not Selected: "border-transparent text-gray-900" -->
              <button id="tabs-1-tab-2" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-2" role="tab" type="button">Men</button>
            </div>
          </div>

          <!-- 'Women' tab panel, show/hide based on tab state. -->
          <div id="tabs-1-panel-1" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
            <div class="grid grid-cols-2 gap-x-4">
              <div class="group relative text-sm">
                <img src="/images/misc/navy-coin-example.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
              <div class="group relative text-sm">
                <img src="/images/misc/navy-seal-challenge-coin.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  Custom Design Gallery
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
            </div>
            <div>
              <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Dresses</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Denim</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Significant Other</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 'Men' tab panel, show/hide based on tab state. -->
          <div id="tabs-1-panel-2" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
            <div class="grid grid-cols-2 gap-x-4">
              <div class="group relative text-sm">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
              <div class="group relative text-sm">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  Artwork Tees
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
            </div>
            <div>
              <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-6 border-t border-gray-200 px-4 py-6">
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
          </div>
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
          </div>
        </div>

        <div class="space-y-6 border-t border-gray-200 px-4 py-6">
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
          </div>
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6">
          <a href="#" class="-m-2 flex items-center p-2">
            <img src="https://tailwindui.com/plus/img/flags/flag-united-states.svg" alt="" class="block h-auto w-5 shrink-0">
            <span class="ml-3 block text-base font-medium text-gray-900">USD</span>
            <span class="sr-only">, change currency</span>
          </a>
        </div>
      </div>
      </transition>
    </div>
  </div>

  <header class="relative z-50 bg-white">
    <p class="flex h-10 items-center justify-center bg-yellow-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center">
          <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
          <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <!-- Logo -->
          <div class="ml-4 flex lg:ml-0">
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/images/misc/us-army-coins-logo.png" alt="">
            </a>
          </div>

          <!-- Flyout menus -->
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-8">
              <div class="flex">
                <div class="relative flex">
                  <!-- Item active: "border-yellow-600 text-yellow-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                  <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false" @click="toggleMenu">Challenge Coins</button>
                </div>

                <!--
                  'Challenge Coins' flyout menu, show/hide based on flyout menu state
                -->
                <transition enter-active-class="transition ease-out duration-200" 
                  enter-from-class="opacity-0" enter-to-class="opacity-100" 
                  leave-active-class="transition ease-in duration-150" 
                  leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-show="menuOpen" class="absolute inset-x-0 top-full text-sm text-gray-500">
                  <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div class="group relative text-base sm:text-sm">
                            <img src="/images/misc/navy-coin-example.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                          <div class="group relative text-base sm:text-sm">
                            <img src="/images/misc/navy-seal-challenge-coin.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              Custom Design Gallery
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div v-for="category in categories">
                            <p :id="category.name" class="font-medium text-gray-900">{{ category.name }}</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li v-for="link in category.links" class="flex">
                                <a href="#" class="hover:text-gray-800" :title="link.title">{{ link.text }}</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800 font-medium text-yellow-600">Browse All</a>
                              </li>
                            </ul>
                          </div>
                          <!-- <div>
                            <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Watches</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Full Nelson</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Significant Other</a>
                              </li>
                            </ul>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </transition>
              </div>
              <div class="flex">
                <div class="relative flex">
                  <!-- Item active: "border-yellow-600 text-yellow-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                  <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Accessories</button>
                </div>

                <!--
                  'Men' flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <div class="hidden absolute inset-x-0 top-full text-sm text-gray-500">
                  <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div class="group relative text-base sm:text-sm">
                            <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                          <div class="group relative text-base sm:text-sm">
                            <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75">
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              Artwork Tees
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div>
                            <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Tops</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Pants</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sweaters</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">T-Shirts</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Jackets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Activewear</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Watches</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Full Nelson</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
            </div>
          </div>

          <div class="ml-auto flex items-center">
            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
              <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
            </div>

            <div class="hidden lg:ml-8 lg:flex">
              <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://tailwindui.com/plus/img/flags/flag-united-states.svg" alt="" class="block h-auto w-5 shrink-0">
                <span class="ml-3 block text-sm font-medium">USD</span>
                <span class="sr-only">, change currency</span>
              </a>
            </div>

            <!-- Search -->
            <div class="flex lg:ml-6">
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </a>
            </div>

            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <a href="#" class="group -m-2 flex items-center p-2">
                <svg class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span class="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <VideoHero />
</div>
</template>

<script setup>
// Define the reactive state
const menuOpen = ref(false);
const mobileOpen = ref(false);
// Method to toggle the value
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};
const categories = [
  {
    name: "Coin Types",
    links: [
      { text: "Polished Gold", href: "#polished-gold", title: "Custom Polished Gold Challenge Coins" },
      { text: "Polished Silver", href: "#polished-silver", title: "Custom Polished Silver Challenge Coins" },
      { text: "Polished Copper", href: "#polished-copper", title: "Custom Polished Copper Challenge Coins" },
      { text: "Polished Nickel", href: "#polished-nickel", title: "Custom Polished Nickel Challenge Coins" },
      { text: "Black Metal", href: "#black-metal", title: "Custom Black Metal Challenge Coins" },
      { text: "Antique Gold", href: "#antique-gold", title: "Custom Antique Gold Challenge Coins" },
      { text: "Antique Silver", href: "#antique-silver", title: "Custom Antique Silver Challenge Coins" },
      { text: "Antique Copper", href: "#antique-copper", title: "Custom Antique Copper Challenge Coins" },
      { text: "Dual Plated", href: "#dual-plated", title: "Custom Dual Plated Challenge Coins" },
      { text: "Color Coated", href: "#color-coated", title: "Custom Color Coated Challenge Coins" }
    ]
  },
  {
    name: "Military Branches",
    links: [
      { text: "Army", href: "#army", title: "Custom Army Challenge Coins" },
      { text: "Navy", href: "#navy", title: "Custom Navy Challenge Coins" },
      { text: "Air Force", href: "#air-force", title: "Custom Air Force Challenge Coins" },
      { text: "Marines", href: "#marines", title: "Custom Marines Challenge Coins" },
      { text: "Coast Guard", href: "#coast-guard", title: "Custom Coast Guard Challenge Coins" },
      { text: "Space Force", href: "#space-force", title: "Custom Space Force Challenge Coins" }
    ]
  },
  {
    name: "Accessories",
    links: [
      { text: "Poly Bag", href: "#poly-bag", title: "Custom Poly Bag Challenge Coin" },
      { text: "Acrylic Case", href: "#acrylic-case", title: "Custom Acrylic Case Challenge Coin" },
      { text: "Velvet Bag", href: "#velvet-bag", title: "Custom Velvet Bag Challenge Coin" },
      { text: "Velvet Case", href: "#velvet-case", title: "Custom Velvet Case Challenge Coin" }
    ]
  }
]
</script>
