<!-- forked from: https://codepen.io/cuonoj/pen/JjPmMaB src="https://videos.pexels.com/video-files/7467573/7467573-hd_1920_1080_30fps.mp4"-->
<template>
<section class="relative h-screen flex flex-col items-center justify-center text-center text-white z-40">
  
  <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video class="min-w-full min-h-full absolute object-cover"
          src="https://videos.pexels.com/video-files/7467577/7467577-hd_1920_1080_30fps.mp4"
          type="video/mp4" autoplay muted loop></video>
  </div>
  <div class="video-content space-y-2 z-10">
      <!-- <h1 class="font-light text-6xl">full Hero Video</h1>
      <h3 class="font-light text-3xl">with TailwindCSS</h3>
      <section class="text-gray-600 body-font"> -->
  <div class="container max-w-[84rem] mx-auto flex px-5 py-24 -mt-32 md:flex-row flex-col items-center">
      <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-3xl mb-4 font-black text-white">Military & Army Coins to Honor Our Nation's Heroes
          </h1>
          <p class="mb-8 text-gray-50 leading-relaxed">Custom military challenge coins are a lasting symbol of honor, loyalty, and camaraderie. At US Army Coins, we specialize in creating high-quality, custom designs that pay tribute to the brave men and women who serve our country. Whether you're commemorating a deployment, recognizing outstanding service, or celebrating a unit's achievements, our coins capture the spirit of excellence and pride.</p>
          <div class="flex justify-center">
              <button class="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg font-medium">Get a Quote</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg font-medium">Learn More</button>
          </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded-lg" alt="hero" src="/challenge-coin-collection.jpg">
      </div>
  </div>
  </div>
</section>

</template>

<style>
  .video-docker video {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  .video-docker::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1;
  }
</style>