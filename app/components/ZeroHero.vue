<template>
  <div>
  <!-- Enhanced Hero Section with Background Video -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
  <div class="absolute inset-0 z-0">
    <video 
      autoplay 
      loop 
      muted 
      class="absolute min-w-full min-h-full object-cover"
    >
      <source src="/mil-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute inset-0 bg-black/70"></div>
  </div>
  
  <div class="container mx-auto px-6 relative z-10 py-20 max-w-336">
    <div class="flex flex-col lg:flex-row items-center">
      <div class="lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
        <div class="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full mb-6 uppercase">
          Trusted for over 20 years
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Military & Army Coins to Honor Our Nation's Heroes
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-orange-50">
          With over two decades of experience, we've proudly crafted premium challenge coins for all branches of the military. From the Army and Navy to the Marines, Air Force, Coast Guard, and Space Force—we serve those who serve our nation.
        </p>
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            Get Your Free Quote
          </a>
          <a href="#" class="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            View Our Work
          </a>
        </div>
      </div>
      
      <div class="lg:w-2/5">
        <div class="relative">
          <div class="absolute -inset-4 bg-orange-600/20 rounded-full blur-xl"></div>
          <div class="bg-gray-900/80 backdrop-blur-xs border border-gray-700 p-8 rounded-2xl relative">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Delivered in Under 14 Days</h3>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-orange-50">Serving <strong>all military branches</strong> with custom designs</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-orange-50">Over <strong>500,000 coins</strong> delivered to military personnel</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-orange-50">Same-day <strong>design proofs</strong> from our expert team</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-orange-50"><strong>100% satisfaction</strong> guarantee on all orders</span>
              </li>
            </ul>
            
            <div class="mt-8 flex items-center justify-between">
              <div class="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Customer" class="w-10 h-10 rounded-full border-2 border-gray-800" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Customer" class="w-10 h-10 rounded-full border-2 border-gray-800" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Customer" class="w-10 h-10 rounded-full border-2 border-gray-800" />
                <div class="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs font-bold">
                  +2K
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="ml-2 text-sm font-medium text-orange-50">5.0 (2,384 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Military Branches Icons -->
    <div class="mt-16 pt-8 border-t border-white/10">
      <p class="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider text-white">Proudly Serving All Military Branches</p>
      <div class="flex flex-wrap justify-center gap-8 md:gap-12">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-2">
            <!-- Army: Star -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10 12 2" />
            </svg>
          </div>
          <span class="text-sm font-medium text-orange-50">Army</span>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-2">
            <!-- Navy: Anchor -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v10m0 0c-3 0-5-2-5-5m5 5c3 0 5-2 5-5m-5 5v4m-4 0h8" />
            </svg>
          </div>
          <span class="text-sm font-medium text-orange-50">Navy</span>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-2">
            <!-- Marines: Globe and Anchor -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="14" r="6" />
              <path d="M12 8V2m0 0l2 2m-2-2l-2 2" />
              <path d="M12 20v2" />
              <path d="M16 18l2 2" />
              <path d="M8 18l-2 2" />
              <path d="M12 14l4-4m-4 4l-4-4" />
            </svg>
          </div>
          <span class="text-sm font-medium text-orange-50">Marines</span>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-2">
            <!-- Air Force: Wings -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M2 12l7 3 3-9 3 9 7-3-10 10z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-orange-50">Air Force</span>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-2">
            <!-- Coast Guard: Shield with Anchor -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M12 2l7 4v6c0 5.25-3.75 10-7 10s-7-4.75-7-10V6l7-4z" />
              <path d="M12 8v4" />
              <path d="M9 12h6" />
              <circle cx="12" cy="10" r="1" />
            </svg>
          </div>
          <span class="text-sm font-medium text-orange-50">Coast Guard</span>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-2">
            <!-- Space Force: Delta/rocket/star -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M12 2l5 19-5-4-5 4z" />
              <circle cx="12" cy="12" r="1.5" />
            </svg>
          </div>
          <span class="text-sm font-medium text-orange-50">Space Force</span>
        </div>
      </div>
    </div>
  </div>
</section>
  
<Process />
</div>
</template>

<script>
export default {
  name: 'ZeroHero',
}
</script>