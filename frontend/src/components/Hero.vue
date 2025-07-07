<template>
  <section id="profil" class="min-h-screen bg-black flex items-center justify-center px-6 py-20 relative overflow-hidden">
    <!-- Hero content container -->
    <div class="text-center relative z-10">
      <!-- First line: AFRIZAL -->
      <div class="relative mb-4 md:mb-8">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none animate-fade-in" 
            style="animation-delay: 200ms;">
          {{ firstLine }}
        </h1>
      </div>
      
      <!-- Second line: MUBARIZ with photo -->
      <div class="relative mb-4 md:mb-8 flex items-center justify-center">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none animate-fade-in flex items-center" 
            style="animation-delay: 400ms;">
          <!-- First part of second line -->
          <span class="mr-4 md:mr-8">{{ secondLinePart1 }}</span>
          
          <!-- Profile photo in the middle -->
          <div class="relative mx-4 md:mx-8 animate-fade-in" style="animation-delay: 600ms;">
            <img 
              :src="profilePhoto" 
              :alt="profileAlt"
              class="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-2xl"
            >
          </div>
          
          <!-- Second part of second line -->
          <span class="ml-4 md:ml-8">{{ secondLinePart2 }}</span>
        </h1>
      </div>
      
      <!-- Third line: FOUJI -->
      <div class="relative">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none animate-fade-in" 
            style="animation-delay: 800ms;">
          {{ thirdLine }}
        </h1>
      </div>
    </div>
    
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-3 rounded-full"></div>
    </div>
  </section>
</template>

<script setup>
defineOptions({ 
  name: "HeroSection" 
});

// Props for customization
// Example usage:
// <Hero 
//   first-line="JOHN"
//   second-line-part1="DO"  
//   second-line-part2="E"
//   third-line="SMITH"
//   profile-photo="path/to/photo.jpg"
//   profile-alt="John Doe Profile"
// />
defineProps({
  firstLine: {
    type: String,
    default: 'AFRIZAL'
  },
  secondLinePart1: {
    type: String,
    default: 'MU'
  },
  secondLinePart2: {
    type: String,
    default: 'BARIZ'
  },
  thirdLine: {
    type: String,
    default: 'FOUJI'
  },
  profilePhoto: {
    type: String,
    default: 'https://via.placeholder.com/400'
  },
  profileAlt: {
    type: String,
    default: 'Profile Photo'
  }
});
</script>
