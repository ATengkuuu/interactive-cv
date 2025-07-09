<template>
  <section id="profil" class="bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-5 md:py-16 lg:py-10 md:min-h-0">
      <!-- Centered Layout: First Name Line - Photo - Second Name Line - Description - Button -->
      <div class="flex flex-col items-center text-center">

        <!-- First Line of Name -->
        <div class="animate-fade-in">
          <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
            Halo Guys, I'm
          </h1>
        </div>

        <!-- Tilted Photo Profile in Center -->
        <div class="animate-slide-in-up flex justify-center -mt-2">
          <div
            ref="tiltContainer"
            class="relative cursor-pointer w-36 h-40 sm:w-44 sm:h-48 md:w-52 md:h-56 lg:w-60 lg:h-64"
            style="perspective: 800px;"
            @mousemove="handleMouseMove"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <!-- Background Text Name -->
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
              <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-500 dark:text-gray-500 opacity-40 leading-tight text-center select-none transition-colors duration-300 whitespace-nowrap">
                <div class="tracking-wider">{{ personalInfo?.name?.toUpperCase() || 'AGI MUHAMMAD' }}</div>
                <div class="tracking-wider">{{ personalInfo?.name?.split(' ').slice(-2).join(' ').toUpperCase() || 'TENGKU AQAMADDIN' }}</div>
              </div>
            </div>

            <div
              ref="tiltImage"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              style="transform-style: preserve-3d;"
            >
              <img
                :src="personalInfo?.avatar || 'https://avatars.githubusercontent.com/u/202240388?v=4'"
                :alt="`Foto Profil ${personalInfo?.name || 'Agi Muhammad Tengku Aqamaddin'}`"
                class="absolute top-0 left-0 w-full h-full rounded-xl object-cover shadow-2xl border-2 sm:border-4 border-white dark:border-gray-700 transition-colors duration-300"
                style="transform: translateZ(0);"
              >
              <!-- Decorative square background -->
              <div class="absolute -z-10 top-1 left-1 sm:top-2 sm:left-2 w-full h-full rounded-xl bg-blue-100 dark:bg-blue-900 opacity-40 transition-colors duration-300"></div>
            </div>

            <!-- Tooltip -->
            <div
              ref="tooltip"
              class="pointer-events-none absolute rounded bg-white dark:bg-gray-800 px-3 py-1 text-xs text-gray-800 dark:text-gray-200 opacity-0 z-30 hidden sm:block shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
            >
              Saya Tengku
            </div>
          </div>
        </div>

        <!-- Second Line of Name -->


        <!-- I'M with Rotating Text -->
        <div class="animate-fade-in -mt-4">
          <div class="flex items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <h2 class="text-gray-800 dark:text-white transition-colors duration-300">
              I'm
            </h2>
            <div class="relative">
              <span
                ref="rotatingText"
                class="text-blue-600 dark:text-blue-400 transition-all duration-700 ease-in-out block"
              >
                {{ currentRole }}
              </span>
            </div>
          </div>
        </div>

        <!-- About Button -->
        <div class="animate-fade-in mt-4 sm:mt-2">
          <button
            @click="toggleAbout"
            class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
          >
            {{ isAboutOpen ? 'Tutup' : 'Tentang Saya' }}
          </button>
        </div>
      </div>
    </div>

    <!-- About Me Expandable Section -->
    <div
      ref="aboutSection"
      v-show="isAboutOpen"
      class="transition-all duration-700 ease-in-out mt-4"
      :class="{
        'opacity-100 translate-y-0': isAboutOpen,
        'opacity-0 translate-y-8': !isAboutOpen
      }"
    >
      <div class="container mx-auto px-4 sm:px-6 pb-20">
        <div class="max-w-4xl mx-auto">
          <!-- About Me Content -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
            <h2
              class="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center transition-all duration-700 ease-in-out"
              :class="{
                'opacity-100 translate-y-0': isAboutOpen,
                'opacity-0 translate-y-4': !isAboutOpen
              }"
            >
              Tentang Saya
            </h2>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Personal Info -->
              <div
                class="space-y-4 transition-all duration-700 ease-in-out"
                :class="{
                  'opacity-100 translate-x-0': isAboutOpen,
                  'opacity-0 -translate-x-8': !isAboutOpen
                }"
              >
                <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Informasi Personal
                </h3>
                <div class="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span class="font-medium">Nama:</span> {{ personalInfo?.name || 'Agi Muhammad Tengku Aqamaddin' }}</p>
                  <p><span class="font-medium">Umur:</span> {{ personalInfo?.age || '21 Tahun' }}</p>
                  <p><span class="font-medium">Lokasi:</span> {{ personalInfo?.location || 'Yogyakarta, Indonesia' }}</p>
                  <p><span class="font-medium">Status:</span> {{ personalInfo?.title || 'Mahasiswa Aktif' }}</p>
                  <p><span class="font-medium">Email:</span> {{ personalInfo?.contact?.email || 'tengkuagi@gmail.com' }}</p>
                </div>
              </div>

              <!-- About Description -->
              <div
                class="space-y-4 transition-all duration-700 ease-in-out"
                :class="{
                  'opacity-100 translate-x-0': isAboutOpen,
                  'opacity-0 translate-x-8': !isAboutOpen
                }"
              >
                <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Tentang Saya
                </h3>
                <div class="text-gray-600 dark:text-gray-300 space-y-3">
                  <p v-for="(desc, index) in (personalInfo?.about?.description || defaultDescription)" :key="index">
                    {{ desc }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Interests/Hobbies -->
            <div
              class="mt-8 transition-all duration-500 ease-in-out"
              :class="{
                'opacity-100 translate-y-0': isAboutOpen,
                'opacity-0 translate-y-4': !isAboutOpen
              }"
            >
              <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Minat & Hobi
              </h3>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="interest in (personalInfo?.about?.interests || defaultInterests)"
                  :key="interest"
                  class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
                  :class="getInterestColorClass(interest)"
                >
                  {{ interest }}
                </span>
              </div>
            </div>

            <!-- Quick Stats -->
            <div
              class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ease-in-out"
              :class="{
                'opacity-100 translate-y-0': isAboutOpen,
                'opacity-0 translate-y-6': !isAboutOpen
              }"
            >
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Tahun Coding</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-green-600 dark:text-green-400">3+</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Project Selesai</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">6+</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Teknologi Dikuasai</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <div class="text-2xl font-bold text-red-600 dark:text-red-400">24/7</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Ready to Code</div>
              </div>
            </div>

            <!-- Download CV Button -->
            <div
              class="mt-8 text-center transition-all duration-700 ease-in-out"
              :class="{
                'opacity-100 translate-y-0': isAboutOpen,
                'opacity-0 translate-y-4': !isAboutOpen
              }"
            >`
              <button
                @click="downloadCV"
                :disabled="isDownloading"
                class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center gap-3"
              >
                <!-- Loading Spinner -->
                <div
                  v-if="isDownloading"
                  class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                ></div>

                <!-- Download Icon -->
                <svg
                  v-else
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>

                <span>{{ isDownloading ? 'Mengunduh...' : 'Unduh CV' }}</span>
              </button>

              <!-- Download Feedback -->
              <div
                v-if="downloadFeedback"
                class="mt-3 inline-block px-4 py-2 rounded-lg text-sm transition-all duration-300"
                :class="{
                  'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300': downloadSuccess,
                  'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300': !downloadSuccess
                }"
              >
                {{ downloadFeedback }}
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

// Personal info from API
const personalInfo = ref(null)
const personalLoading = ref(true)

// Default fallback data
const defaultDescription = [
  'Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka. Serta sedang menekuni dunia pengembangan web dan mobile application.',
  'Meskipun masih dalam tahap belajar, saya memiliki ketertarikan besar pada UI/UX Design, Frontend, dan Backend Development.',
  'Saya senang mencoba teknologi baru, membangun project kecil, dan terus mengasah kemampuan programming saya.',
  'Terbuka untuk kolaborasi, belajar dari pengalaman, dan berkontribusi dalam pengembangan aplikasi yang bermanfaat.'
]

const defaultInterests = [
  '💻 Programming',
  '🎨 UI/UX Design',
  '📚 Continuous Learning',
  '🔍 Problem Solving',
  '🌐 Web Development',
  '📱 Mobile Development'
]

// Fetch personal info from backend API
const fetchPersonalInfo = async () => {
  try {
    personalLoading.value = true
    const response = await fetch('http://localhost:5000/api/personal')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success && result.data) {
      personalInfo.value = result.data
    } else {
      throw new Error('Invalid response format')
    }
  } catch (err) {
    console.error('Failed to fetch personal info:', err)

    // Fallback data if API fails
    personalInfo.value = {
      name: 'Agi Muhammad Tengku Aqamaddin',
      title: 'Front-End Engineer',
      location: 'Yogyakarta, Indonesia',
      age: '21 Tahun',
      avatar: 'https://avatars.githubusercontent.com/u/202240388?v=4',
      about: {
        description: defaultDescription,
        interests: defaultInterests
      },
      contact: {
        email: 'tengkuagi@gmail.com'
      }
    }
  } finally {
    personalLoading.value = false
  }
}

// Get color class for interests
const getInterestColorClass = (interest) => {
  const colors = [
    'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
  ]

  const index = Math.abs(interest.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length
  return colors[index]
}

// 3D Tilt effect refs
const tiltContainer = ref(null);
const tiltImage = ref(null);
const tooltip = ref(null);

// Rotating text refs and data
const rotatingText = ref(null);
const currentRole = ref('Students');
const roles = ['Students', 'Creators', 'Thinkers', 'Problem-Solvers'];
let roleIndex = 0;
let rotatingInterval = null;

const toggleAbout = () => {
  isAboutOpen.value = !isAboutOpen.value;
};

// Download CV function
const downloadCV = async () => {
  if (isDownloading.value) return;

  try {
    isDownloading.value = true;
    downloadFeedback.value = '';

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv/CV-Agi-Muhammad-Tengku-Aqamaddin.pdf';
    link.download = 'CV-Agi-Muhammad-Tengku-Aqamaddin.pdf';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate download delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success feedback
    downloadSuccess.value = true;
    downloadFeedback.value = 'CV berhasil diunduh!';

    // Clear feedback after 3 seconds
    setTimeout(() => {
      downloadFeedback.value = '';
    }, 3000);

  } catch (error) {
    // Show error feedback
    downloadSuccess.value = false;
    downloadFeedback.value = 'Gagal mengunduh CV. Silakan coba lagi.';

    console.error('Download error:', error);

    // Clear feedback after 4 seconds
    setTimeout(() => {
      downloadFeedback.value = '';
    }, 4000);
  } finally {
    isDownloading.value = false;
  }
};

// Rotating text function
const startRotatingText = () => {
  rotatingInterval = setInterval(() => {
    if (rotatingText.value) {
      // Fade out (slower)
      rotatingText.value.style.opacity = '0';
      rotatingText.value.style.transform = 'translateY(-10px)';

      setTimeout(() => {
        // Change text
        roleIndex = (roleIndex + 1) % roles.length;
        currentRole.value = roles[roleIndex];

        // Fade in (slower)
        if (rotatingText.value) {
          rotatingText.value.style.opacity = '1';
          rotatingText.value.style.transform = 'translateY(0px)';
        }
      }, 600); // Increased from 250ms to 600ms for smoother transition
    }
  }, 3500); // Increased from 2000ms to 3500ms for slower rotation
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

// 3D Tilt effect functions
const handleMouseMove = (e) => {
  if (!tiltContainer.value || !tiltImage.value) return;

  const rect = tiltContainer.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / centerY * -15; // Reduced from -25 to -15
  const rotateY = (x - centerX) / centerX * 15; // Reduced from 25 to 15

  // Add subtle scale effect (reduced)
  tiltImage.value.style.transform = `
    translate(-50%, -50%)
    perspective(800px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateZ(20px)
    scale(1.02)
  `;

  // Update tooltip position
  if (tooltip.value) {
    tooltip.value.style.left = `${x + 20}px`;
    tooltip.value.style.top = `${y - 30}px`;
  }
};

const handleMouseEnter = () => {
  if (!tiltContainer.value || !tiltImage.value) return;

  tiltImage.value.style.transition = 'transform 0.2s ease-out'; // Slower transition

  // Show tooltip with smooth animation
  if (tooltip.value) {
    tooltip.value.style.opacity = '1';
    tooltip.value.style.transform = 'translateY(-5px)';
  }
};

const handleMouseLeave = () => {
  if (!tiltContainer.value || !tiltImage.value) return;

  tiltImage.value.style.transition = 'transform 0.8s ease-out'; // Slower return transition
  tiltImage.value.style.transform = 'translate(-50%, -50%) perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';

  // Hide tooltip with smooth animation
  if (tooltip.value) {
    tooltip.value.style.opacity = '0';
    tooltip.value.style.transform = 'translateY(0px)';
  }
};

// Setup scroll listener and rotating text
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Start rotating text after a delay to let animations settle
  setTimeout(() => {
    startRotatingText();
  }, 1000);

  // Fetch personal info on component mount
  fetchPersonalInfo();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  // Clear rotating text interval
  if (rotatingInterval) {
    clearInterval(rotatingInterval);
  }
});

// Download CV states
const isDownloading = ref(false)
const downloadFeedback = ref('')
const downloadSuccess = ref(false)
</script>
