<script setup>
defineOptions({ name: 'PortfolioProjects' });

import SectionTitle from './SectionTitle.vue';

const projects = [
  {
    id: 1,
    title: 'Aplikasi Mental Health Sobat',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
    description: 'Platform kesehatan mental yang membantu pengguna untuk konsultasi dengan psikolog, tracking mood harian, dan akses ke artikel-artikel kesehatan mental. Dilengkapi dengan fitur chat real-time dan reminder untuk self-care.',
    tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
    status: 'coming-soon'
  },
  {
    id: 2,
    title: 'Website Barbershop CutsProject',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=300&fit=crop',
    description: 'Website modern untuk barbershop dengan sistem booking online, galeri potong rambut, profil barber, dan manajemen jadwal. Dilengkapi dengan fitur pembayaran digital dan review pelanggan.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    link: '#',
    status: 'on-progress'
  }
];

// Error handling untuk images
const handleImageError = (event) => {
  console.log('Image failed to load:', event.target.src);
  // Fallback ke data URL image sederhana
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNjY2Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPvCfk4YgUHJvamVjdCBJbWFnZTwvdGV4dD4KPHN2Zz4=';
};
</script>
<template>
  <section id="proyek" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Image Container with fallback -->
          <div class="relative w-full h-56 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <img
              :src="project.image"
              :alt="`Screenshot ${project.title}`"
              class="w-full h-full object-cover"
              @error="handleImageError"
              loading="lazy"
            >

            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span
                v-if="project.status === 'coming-soon'"
                class="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                🚀 Coming Soon
              </span>
              <span
                v-else-if="project.status === 'on-progress'"
                class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                🔨 On Progress
              </span>
            </div>

            <!-- Default placeholder jika image belum load -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
              <div class="text-center opacity-50">
                <div class="text-4xl mb-2">🚀</div>
                <div class="text-sm font-semibold">Loading...</div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              {{ project.description }}
            </p>

            <div class="mb-4">
              <div v-if="project.tech.length > 0" class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-2.5 py-1 rounded-full transition-colors duration-300"
                >
                  {{ tech }}
                </span>
              </div>
              <div v-else class="text-gray-500 dark:text-gray-400 text-sm italic">
                Tech stack coming soon...
              </div>
            </div>

            <div class="flex space-x-3">
              <button
                v-if="project.status === 'coming-soon'"
                class="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-lg font-semibold cursor-not-allowed"
                disabled
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                Coming Soon
              </button>

              <button
                v-else-if="project.status === 'on-progress'"
                class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold cursor-not-allowed"
                disabled
              >
                <svg class="w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                </svg>
                On Progress
              </button>

              <a
                v-else
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Lihat Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Image loading states */
.relative img {
  transition: opacity 0.3s ease-in-out;
}

.relative img[src] {
  opacity: 1;
}

/* Default placeholder hidden when image loads */
.relative:has(img[src]) .absolute {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Card hover effects */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive improvements */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
