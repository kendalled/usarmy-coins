<template>
  <div class="relative isolate bg-gray-900 pt-24 pb-32 sm:pt-32 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-orange-500 to-orange-600" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-15 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-orange-500 to-orange-600 xl:mr-[calc(50%-12rem)] xl:ml-0" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header Section -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base/7 font-semibold text-orange-500 uppercase tracking-wider">Testimonials</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Trusted by Military Personnel <span class="text-orange-500">Worldwide</span>
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Over 500,000 coins delivered to satisfied customers across all military branches
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        
        <!-- Featured Testimonial -->
        <figure class="rounded-2xl bg-gray-800/50 backdrop-blur-sm shadow-xl ring-1 ring-orange-500/20 border border-gray-700/50 sm:col-span-2 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-6 text-lg font-semibold tracking-tight text-white sm:p-12 sm:text-xl/8">
            <p>"The quality of our unit's challenge coins exceeded all expectations. The attention to detail and craftsmanship truly honors our service. Every Marine in our battalion was proud to carry these coins."</p>
          </blockquote>
          <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-700/50 px-6 py-4 sm:flex-nowrap">
            <img class="size-12 flex-none rounded-full ring-2 ring-orange-500/30 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Colonel Sarah Martinez">
            <div class="flex-auto">
              <div class="font-semibold text-white">Colonel Sarah Martinez</div>
              <div class="text-orange-400">2nd Marine Division</div>
              <div class="text-gray-400 text-sm">25 years of service</div>
            </div>
            <div class="flex items-center gap-1">
              <svg class="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-orange-400 font-medium">5.0</span>
            </div>
          </figcaption>
        </figure>

        <!-- Left Column Testimonials -->
        <div class="space-y-8 xl:contents xl:space-y-0">
          <div class="space-y-8 xl:row-span-2">
            <figure class="rounded-2xl bg-gray-800/30 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-700/50 border border-gray-700/30">
              <blockquote class="text-gray-200">
                <p>"Fast turnaround and exceptional quality. Our Air Force squadron coins look absolutely professional and the team was incredibly responsive to our custom design requests."</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full ring-2 ring-orange-500/20 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Captain James Wilson">
                <div>
                  <div class="font-semibold text-white">Captain James Wilson</div>
                  <div class="text-orange-400 text-sm">355th Fighter Squadron</div>
                </div>
              </figcaption>
            </figure>

            <figure class="rounded-2xl bg-gray-800/30 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-700/50 border border-gray-700/30">
              <blockquote class="text-gray-200">
                <p>"The craftsmanship is outstanding. These coins represent our unit's pride and heritage perfectly. Highly recommend for any military organization."</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full ring-2 ring-orange-500/20 object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="Sergeant First Class Maria Rodriguez">
                <div>
                  <div class="font-semibold text-white">SFC Maria Rodriguez</div>
                  <div class="text-orange-400 text-sm">82nd Airborne Division</div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div class="space-y-8 xl:row-start-1">
            <figure class="rounded-2xl bg-gray-800/30 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-700/50 border border-gray-700/30">
              <blockquote class="text-gray-200">
                <p>"Delivered exactly on time for our ceremony. The quality exceeded our expectations and the design process was seamless from start to finish."</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full ring-2 ring-orange-500/20 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Commander Lisa Thompson">
                <div>
                  <div class="font-semibold text-white">Commander Lisa Thompson</div>
                  <div class="text-orange-400 text-sm">USS Enterprise</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Right Column Testimonials -->
        <div class="space-y-8 xl:contents xl:space-y-0">
          <div class="space-y-8 xl:row-start-1">
            <figure class="rounded-2xl bg-gray-800/30 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-700/50 border border-gray-700/30">
              <blockquote class="text-gray-200">
                <p>"Professional service from design to delivery. Our Coast Guard unit couldn't be happier with the final product. The attention to detail is remarkable."</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full ring-2 ring-orange-500/20 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lieutenant Commander David Chen">
                <div>
                  <div class="font-semibold text-white">LCDR David Chen</div>
                  <div class="text-orange-400 text-sm">Coast Guard Station</div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div class="space-y-8 xl:row-span-2">
            <figure class="rounded-2xl bg-gray-800/30 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-700/50 border border-gray-700/30">
              <blockquote class="text-gray-200">
                <p>"These challenge coins perfectly capture our unit's spirit and mission. The team understood our vision and delivered beyond our expectations. Semper Fi!"</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full ring-2 ring-orange-500/20 object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="Gunnery Sergeant Michael Torres">
                <div>
                  <div class="font-semibold text-white">GySgt Michael Torres</div>
                  <div class="text-orange-400 text-sm">1st Marine Regiment</div>
                </div>
              </figcaption>
            </figure>

            <figure class="rounded-2xl bg-gray-800/30 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-700/50 border border-gray-700/30">
              <blockquote class="text-gray-200">
                <p>"Exceptional quality and service. Our Space Force unit's coins look incredible and the team was professional throughout the entire process."</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="size-10 rounded-full ring-2 ring-orange-500/20 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Captain Jennifer Park">
                <div>
                  <div class="font-semibold text-white">Captain Jennifer Park</div>
                  <div class="text-orange-400 text-sm">Space Operations Command</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-500">500K+</div>
          <div class="text-sm text-gray-400 mt-1">Coins Delivered</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-500">98%</div>
          <div class="text-sm text-gray-400 mt-1">Customer Satisfaction</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-500">14 Days</div>
          <div class="text-sm text-gray-400 mt-1">Average Delivery</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-500">20+ Years</div>
          <div class="text-sm text-gray-400 mt-1">Experience</div>
        </div>
      </div>
    </div>
  </div>
</template>