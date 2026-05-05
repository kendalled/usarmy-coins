<template>
  <div>
    <ZeroNavbar />
    <main class="relative overflow-hidden bg-slate-800">
    <!-- subtle background grid -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800 to-slate-900"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_23%,rgba(255,255,255,0.02)_24%,transparent_25%),linear-gradient(to_bottom,transparent_0,transparent_23%,rgba(255,255,255,0.02)_24%,transparent_25%)] bg-[size:48px_48px]"
      ></div>
    </div>

    <!-- HERO -->
    <section class="relative pt-32 sm:pt-40">
      <div class="mx-auto max-w-336 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <div class="flex items-center justify-center gap-x-4 text-sm">
            <span
              class="rounded-full bg-slate-700/60 px-3 py-1 text-slate-200 ring-1 ring-white/10"
            >
              {{ data.category }}
            </span>
            <time :datetime="data.date" class="text-slate-400">
              {{ new Date(data.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              }) }}
            </time>
          </div>

          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {{ data.title }}
          </h1>

          <p
            class="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-300"
          >
            {{ data.description }}
          </p>

          <div class="mt-8 flex items-center justify-center gap-4">
            <img
              :src="data.author.avatar"
              :alt="data.author.name"
              class="size-12 rounded-full ring-2 ring-white/10"
            />
            <div class="text-left">
              <p class="font-semibold text-white">{{ data.author.name }}</p>
              <p class="text-sm text-slate-400">{{ data.author.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURE IMAGE -->
    <div class="relative mt-16">
      <div class="mx-auto max-w-336 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-5xl">
          <img
            :src="data.image"
            :alt="data.title"
            class="aspect-[16/10] w-full rounded-2xl object-cover ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>

    <!-- ARTICLE BODY -->
    <article
      class="relative mx-auto mt-16 max-w-336 px-4 sm:px-6 lg:px-8 pb-24"
    >
      <div class="mx-auto max-w-3xl">
        <ContentRenderer
          :value="data"
          class="prose prose-invert prose-lg max-w-none blog-content"
        />
      </div>

      <!-- AUTHOR CARD -->
      <aside class="mx-auto mt-20 max-w-3xl">
        <div
          class="rounded-2xl bg-slate-700/40 p-6 ring-1 ring-white/10 sm:p-8"
        >
          <div class="flex items-start gap-6">
            <img
              :src="data.author.avatar"
              :alt="data.author.name"
              class="size-16 shrink-0 rounded-full ring-1 ring-white/10"
            />
            <div>
              <p class="text-lg font-semibold text-white">
                {{ data.author.name }}
              </p>
              <p class="mt-1 text-sm text-slate-300">{{ data.author.bio }}</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- CTA -->
      <aside class="mx-auto mt-16 max-w-3xl">
        <div
          class="rounded-2xl bg-slate-700/40 p-6 ring-1 ring-white/10 sm:p-8"
        >
          <h3 class="text-xl font-semibold text-white">
            Ready to design your own coin?
          </h3>
          <p class="mt-2 text-slate-300">
            Our veteran design team will turn your idea into a stunning
            mock-up—fast.
          </p>
          <NuxtLink
            to="/quote"
            class="mt-4 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:-translate-y-0.5"
          >
            Build Your Quote
          </NuxtLink>
        </div>
      </aside>
    </article>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
// Fetch the blog post from Nuxt Content
const route = useRoute();
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug;

// Fetch by path
const data = await queryCollection("blog")
  .path(`/blog/${slug}`)
  .first();
if (!data) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  });
}

// SEO
useSeoMeta({
  title: data.title,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  ogImage: data.image,
  twitterCard: "summary_large_image",
});
</script>
