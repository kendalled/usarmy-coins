<template>
  <section class="relative overflow-hidden bg-slate-800 py-24 sm:py-32">
    <!-- Subtle background grid -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800 to-slate-900"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_23%,rgba(255,255,255,0.02)_24%,transparent_25%),linear-gradient(to_bottom,transparent_0,transparent_23%,rgba(255,255,255,0.02)_24%,transparent_25%)] bg-[size:48px_48px]"
      ></div>
    </div>

    <div class="relative mx-auto max-w-336 px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <span
          class="inline-flex items-center gap-2 rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium tracking-wide text-slate-200 ring-1 ring-white/10"
        >
          <span class="size-1.5 rounded-full bg-orange-500"></span>
          Simple Process
        </span>
        <h2
          class="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          From Quote to <span class="text-orange-500">Challenge Coins</span> in
          4 Easy Steps
        </h2>
        <p class="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          Our streamlined process ensures your custom military challenge coins
          are delivered fast with professional quality every time.
        </p>
      </div>

      <!-- Steps -->
      <div class="mx-auto max-w-5xl">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <!-- Step 1 -->
          <div
            class="group relative flex flex-col lg:flex-row items-start gap-6"
          >
            <!-- Step number and connector -->
            <div class="relative flex-shrink-0">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg ring-4 ring-orange-500/20"
              >
                <span class="text-xl font-bold text-white">1</span>
              </div>
              <!-- Connector line (hidden on last step) -->
              <div
                class="absolute top-16 left-8 hidden h-24 w-px bg-gradient-to-b from-orange-500/50 to-transparent lg:block lg:top-16 lg:left-8 lg:h-32"
              ></div>
            </div>

            <!-- Content -->
            <div class="min-w-0 flex-1 lg:mt-2">
              <div class="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-white mb-3">
                    Submit Your Design Request
                  </h3>
                  <p class="text-slate-300 leading-relaxed mb-4">
                    Upload your artwork, logo, or design ideas through our
                    simple quote form. Our veteran design team reviews every
                    submission within 24 hours.
                  </p>
                  <ul class="space-y-2 text-sm text-slate-400">
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Free design consultation
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Multiple file formats accepted
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      24-hour response time
                    </li>
                  </ul>
                </div>
                <!-- Image placeholder -->
                <div class="mt-6 lg:mt-0 lg:w-48 flex-shrink-0">
                  <div
                    class="aspect-square rounded-xl bg-slate-700/60 ring-1 ring-white/10 flex items-center justify-center"
                  >
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-slate-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p class="text-xs text-slate-400">Upload Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div
            class="group relative flex flex-col lg:flex-row items-start gap-6"
          >
            <div class="relative flex-shrink-0">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg ring-4 ring-orange-500/20"
              >
                <span class="text-xl font-bold text-white">2</span>
              </div>
              <div
                class="absolute top-16 left-8 hidden h-24 w-px bg-gradient-to-b from-orange-500/50 to-transparent lg:block lg:top-16 lg:left-8 lg:h-32"
              ></div>
            </div>

            <div class="min-w-0 flex-1 lg:mt-2">
              <div class="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-white mb-3">
                    Review & Approve Proof
                  </h3>
                  <p class="text-slate-300 leading-relaxed mb-4">
                    Receive a detailed digital proof of your coin design with
                    accurate colors, dimensions, and specifications. Make
                    unlimited revisions until perfect.
                  </p>
                  <ul class="space-y-2 text-sm text-slate-400">
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      High-resolution digital proof
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Unlimited revisions
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Military regulation compliance
                    </li>
                  </ul>
                </div>
                <div class="mt-6 lg:mt-0 lg:w-48 flex-shrink-0">
                  <div
                    class="aspect-square rounded-xl bg-slate-700/60 ring-1 ring-white/10 flex items-center justify-center"
                  >
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-slate-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p class="text-xs text-slate-400">Approve Proof</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div
            class="group relative flex flex-col lg:flex-row items-start gap-6"
          >
            <div class="relative flex-shrink-0">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg ring-4 ring-orange-500/20"
              >
                <span class="text-xl font-bold text-white">3</span>
              </div>
              <div
                class="absolute top-16 left-8 hidden h-24 w-px bg-gradient-to-b from-orange-500/50 to-transparent lg:block lg:top-16 lg:left-8 lg:h-32"
              ></div>
            </div>

            <div class="min-w-0 flex-1 lg:mt-2">
              <div class="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-white mb-3">
                    Professional Production
                  </h3>
                  <p class="text-slate-300 leading-relaxed mb-4">
                    Your coins enter production using military-grade materials
                    and time-tested manufacturing techniques. Track progress
                    with real-time updates.
                  </p>
                  <ul class="space-y-2 text-sm text-slate-400">
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      15-20 day production time
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Military-grade materials
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Real-time progress updates
                    </li>
                  </ul>
                </div>
                <div class="mt-6 lg:mt-0 lg:w-48 flex-shrink-0">
                  <div
                    class="aspect-square rounded-xl bg-slate-700/60 ring-1 ring-white/10 flex items-center justify-center"
                  >
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-slate-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p class="text-xs text-slate-400">Manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div
            class="group relative flex flex-col lg:flex-row items-start gap-6"
          >
            <div class="relative flex-shrink-0">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg ring-4 ring-orange-500/20"
              >
                <span class="text-xl font-bold text-white">4</span>
              </div>
            </div>

            <div class="min-w-0 flex-1 lg:mt-2">
              <div class="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-white mb-3">
                    Fast & Secure Delivery
                  </h3>
                  <p class="text-slate-300 leading-relaxed mb-4">
                    Your finished coins are carefully packaged and shipped
                    directly to your door with full tracking and insurance for
                    complete peace of mind.
                  </p>
                  <ul class="space-y-2 text-sm text-slate-400">
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Free shipping on orders 100+
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Full tracking & insurance
                    </li>
                    <li class="flex items-center gap-2">
                      <svg
                        class="h-4 w-4 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Protective packaging
                    </li>
                  </ul>
                </div>
                <div class="mt-6 lg:mt-0 lg:w-48 flex-shrink-0">
                  <div
                    class="aspect-square rounded-xl bg-slate-700/60 ring-1 ring-white/10 flex items-center justify-center"
                  >
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-slate-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                      <p class="text-xs text-slate-400">Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center">
          <div
            class="mx-auto max-w-2xl rounded-2xl bg-slate-700/40 p-8 ring-1 ring-white/10"
          >
            <h3 class="text-2xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p class="text-slate-300 mb-6">
              Join thousands of military units who trust us with their challenge
              coin needs. Get your free quote today.
            </p>
            <NuxtLink
              to="/quote"
              class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Your Quote
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path
                  fill-rule="evenodd"
                  d="M10.22 3.22a.75.75 0 011.06 0l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06L14.94 10 10.22 5.28a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component is purely presentational, no script needed
</script>
