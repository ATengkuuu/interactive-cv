<template>
  <section id="profil" class="bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col md:flex-row items-center min-h-screen md:min-h-0">
      <div class="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-slide-in-left leading-tight transition-colors duration-300" style="animation-delay: 200ms;">
          Halo Guys, Saya <span class="text-blue-600 dark:text-blue-400 block sm:inline">Agi Muhammad Tengku Aqamaddin</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 animate-slide-in-left max-w-lg mx-auto md:mx-0 transition-colors duration-300" style="animation-delay: 400ms;">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <button
          @click="toggleAbout"
          class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block animate-slide-in-left shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style="animation-delay: 600ms;"
        >
          {{ isAboutOpen ? 'Tutup' : 'Tentang Saya' }}
        </button>
      </div>

      <div class="w-full md:w-1/2 flex justify-center animate-slide-in-right">
        <div class="relative">
          <img
            src="https://avatars.githubusercontent.com/u/202240388?v=4"
            alt="Foto Profil Agi Muhammad Tengku Aqamaddin"
            class="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-700 transition-colors duration-300"
          >
          <!-- Decorative circle background -->
          <div class="absolute -z-10 top-4 left-4 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-blue-100 dark:bg-blue-900 opacity-50 transition-colors duration-300"></div>
        </div>
      </div>
    </div>

    <!-- About Me Expandable Section -->
    <div
      ref="aboutSection"
      :class="{
        'max-h-screen opacity-100 pb-20': isAboutOpen,
        'max-h-0 opacity-0 pb-0': !isAboutOpen
      }"
      class="overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <!-- About Me Content -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Tentang Saya
            </h2>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Personal Info -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Informasi Personal
                </h3>
                <div class="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span class="font-medium">Nama:</span> Agi Muhammad Tengku Aqamaddin</p>
                  <p><span class="font-medium">Umur:</span> 21 Tahun</p>
                  <p><span class="font-medium">Lokasi:</span> Yogyakarta, Indonesia</p>
                  <p><span class="font-medium">Status:</span> Mahasiswa Aktif</p>
                  <p><span class="font-medium">Email:</span> tengkuagi@gmail.com</p>
                </div>
              </div>

              <!-- About Description -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Tentang Saya
                </h3>
                <div class="text-gray-600 dark:text-gray-300 space-y-3">
                  <p>
                    Saya adalah mahasiswa Teknik Informatika yang sedang menekuni dunia pengembangan web dan mobile application.
                  </p>
                  <p>
                    Meskipun masih dalam tahap belajar, saya memiliki ketertarikan besar pada UI/UX Design, Frontend, dan Backend Development.
                  </p>
                  <p>
                    Saya senang mencoba teknologi baru, membangun project kecil, dan terus mengasah kemampuan programming saya.
                  </p>
                  <p>
                    Terbuka untuk kolaborasi, belajar dari pengalaman, dan berkontribusi dalam pengembangan aplikasi yang bermanfaat.
                  </p>
                </div>
              </div>
            </div>

            <!-- Interests/Hobbies -->
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Minat & Hobi
              </h3>
              <div class="flex flex-wrap gap-3">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                  💻 Programming
                </span>
                <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                  🎨 UI/UX Design
                </span>
                <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                  📱 Mobile Development
                </span>
                <span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                  🌐 Web Development
                </span>
                <span class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                  📚 Continuous Learning
                </span>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Tahun Coding</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-green-600 dark:text-green-400">3+</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Project Selesai</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Teknologi Dikuasai</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-red-600 dark:text-red-400">24/7</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Ready to Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'HeroSection'
});

const isAboutOpen = ref(false);
const aboutSection = ref(null);

const toggleAbout = () => {
  isAboutOpen.value = !isAboutOpen.value;
};

// Function to handle scroll
const handleScroll = () => {
  if (!aboutSection.value) return;

  const aboutRect = aboutSection.value.getBoundingClientRect();

  // If the about section is completely above the viewport (scrolled past)
  if (aboutRect.bottom < 0) {
    isAboutOpen.value = false;
  }
};

// Setup scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
