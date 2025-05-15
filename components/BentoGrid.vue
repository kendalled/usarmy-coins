<template>
  <div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-base/7 font-semibold text-orange-400">Our Process</h2>
    <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Streamlined Process, Exceptional Results</p>
    <!-- was: grid-rows-2 to add more rows -->
    <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
      
      <!-- Step 1-->
      <div class="flex p-px lg:col-span-2">
        <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
          <img class="h-80 object-cover object-left w-full" src="/step-1.webp" alt="">
          <div class="p-10">
            <h3 class="text-sm/4 font-semibold text-gray-400">Releases</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-white">Push to deploy</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.</p>
          </div>
        </div>
      </div>
      
      <!-- Step 2 -->
      <div class="flex p-px lg:col-span-2">
        <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem]">
          <img class="h-80 object-cover object-left w-full" src="/step-2.webp" alt="">
          <div class="p-10">
            <h3 class="text-sm/4 font-semibold text-gray-400">Releases</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-white">Push to deploy</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.</p>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="flex p-px lg:col-span-2">
        <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
          <img class="h-80 object-cover w-full" src="/step-3.webp" alt="">
          <div class="p-10">
            <h3 class="text-sm/4 font-semibold text-gray-400">Security</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-white">Advanced access control</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
          </div>
        </div>
      </div>
      <div class="flex p-px lg:col-span-4 lg:hidden">
        <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
          <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png" alt="">
          <div class="p-10">
            <h3 class="text-sm/4 font-semibold text-gray-400">Performance</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-white">Lightning-fast builds</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum vulputate.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>