<template>
  <header class="sticky inset-0 z-50 border-b border-slate-100/40 bg-white/80 backdrop-blur-lg">
    <!-- was px-12 -->
    <nav class="mx-auto flex max-w-[84rem] gap-8 px-6 transition-all duration-200 ease-in-out lg:px-5 py-4">
        <div class="relative flex items-center">
            <a href="/">
              <img src="/ArmyLogoButton.png" class="w-24 h-auto" loading="lazy" style="color:transparent" width="32" height="32">
            </a>
        </div>
        <ul class="hidden items-center justify-center gap-6 md:flex">
            <li class="pt-1.5 text-sm font-medium text-slate-700">
                <a href="#">Pricing</a>
            </li>
            <li class="pt-1.5 text-sm font-medium text-slate-700">
                <a href="#">Units & Departments</a>
            </li>
            <li class="pt-1.5 text-sm font-medium text-slate-700">
                <a href="#">Products</a>
            </li>
            <li class="pt-1.5 text-sm font-medium text-slate-700">
                <a href="#">Blog</a>
            </li>
            <li class="pt-1.5 text-sm font-medium text-slate-700">
                <a href="#">Gallery</a>
            </li>
        </ul>
        <div class="flex-grow"></div>
        <div class="hidden items-center justify-center gap-6 md:flex">
            <a href="#" class="font-dm text-sm font-medium text-slate-700">Sign in</a>
            <a href="#" class="rounded-md bg-gradient-to-br from-orange-600 to-orange-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-orange-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">Get a Free Quote</a>
        </div>
        <div class="relative flex items-center justify-center md:hidden">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-auto text-slate-900"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
        </div>
    </nav>
  </header>
</template>
