<template>
  <!-- pt-24 was original -->
  <section class="relative overflow-hidden bg-slate-800 pt-16 -mt-0.5">
    <!-- subtle grid + gradient bg -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800 to-slate-900"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_23%,rgba(255,255,255,0.03)_24%,transparent_25%),linear-gradient(to_bottom,transparent_0,transparent_23%,rgba(255,255,255,0.03)_24%,transparent_25%)] bg-[size:48px_48px]"
      ></div>
    </div>

    <div class="relative mx-auto max-w-336 px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <!-- header -->
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium tracking-wide text-slate-200 ring-1 ring-white/10"
        >
          <span class="size-1.5 rounded-full bg-orange-500"></span>
          US Army Coins Blog
        </span>
        <h2
          class="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          Insights, stories, and real-world coin craftsmanship
        </h2>
        <p class="mt-4 text-slate-300 text-lg/8">
          From unit traditions to plating techniques — explore expert guidance
          to design and deliver military-grade challenge coins with confidence.
        </p>

        <!-- category pills -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            class="rounded-full bg-slate-700/60 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:bg-slate-700 hover:-translate-y-0.5"
          >
            All
          </button>
          <button
            class="rounded-full bg-slate-700/60 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:bg-slate-700 hover:-translate-y-0.5"
          >
            Design
          </button>
          <button
            class="rounded-full bg-slate-700/60 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:bg-slate-700 hover:-translate-y-0.5"
          >
            Plating
          </button>
          <button
            class="rounded-full bg-slate-700/60 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:bg-slate-700 hover:-translate-y-0.5"
          >
            Traditions
          </button>
          <button
            class="rounded-full bg-slate-700/60 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:bg-slate-700 hover:-translate-y-0.5"
          >
            Production
          </button>
        </div>
      </div>

      <!-- grid -->
      <div
        class="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="post in transformedPosts"
          :key="post.slug"
          class="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-700/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-700/60"
        >
          <div class="relative">
            <img
              :src="post.image"
              :alt="post.title"
              class="aspect-[16/10] w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"
            ></div>
            <!-- subtle badge -->
            <div class="absolute left-3 top-3">
              <span
                class="inline-flex items-center rounded-full bg-black/40 px-2 py-1 text-[11px] font-medium text-slate-200 ring-1 ring-white/10 backdrop-blur-sm"
              >
                {{ post.category }}
              </span>
            </div>
          </div>

          <div class="flex grow flex-col p-6">
            <div class="flex items-center gap-3 text-xs text-slate-300">
              <time :datetime="post.datetime">{{ post.date }}</time>
              <span class="text-slate-500">•</span>
              <span>{{ post.author.role }}</span>
            </div>

            <h3
              class="mt-3 text-lg/6 font-semibold text-white transition-colors group-hover:text-slate-200"
            >
              <NuxtLink :to="`/blog/${post.slug}`" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ post.title }}
              </NuxtLink>
            </h3>

            <p class="mt-3 line-clamp-3 text-sm/6 text-slate-300">
              {{ post.excerpt }}
            </p>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  :src="post.author.avatar"
                  :alt="post.author.name"
                  class="size-9 rounded-full ring-1 ring-white/10"
                />
                <div class="text-sm/5">
                  <p class="font-medium text-white">{{ post.author.name }}</p>
                  <p class="text-slate-300">{{ post.author.branchLabel }}</p>
                </div>
              </div>

              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:-translate-y-0.5"
              >
                Read
                <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
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
        </article>
      </div>

      <!-- CTA / trust row -->
      <div
        class="mx-auto mt-20 max-w-5xl rounded-2xl bg-slate-700/40 p-6 ring-1 ring-white/10 sm:p-8"
      >
        <div
          class="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm font-semibold tracking-wide text-orange-400">
              Designed in the USA
            </p>
            <h3 class="mt-2 text-xl font-semibold text-white">
              Ready to start your coin? Get a fast, expert quote.
            </h3>
            <p class="mt-1 text-slate-300">
              Upload your idea and our veteran design team will craft a stunning
              coin mockup.
            </p>
          </div>
          <NuxtLink
            to="/quote"
            class="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:-translate-y-0.5"
          >
            Build Your Quote
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = await queryCollection("blog")
  .order("date", "DESC")
  .all();

// Transform posts to match the expected format
const transformedPosts = posts.map((post) => ({
  slug: post.path.replace("/blog/", ""),
  title: post.title,
  excerpt: post.description,
  image: post.image,
  category: post.category,
  date: new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
  datetime: post.date,
  author: {
    name: post.author.name,
    role: post.author.role,
    avatar: post.author.avatar,
    branchLabel: post.author.bio,
  },
}));
</script>
