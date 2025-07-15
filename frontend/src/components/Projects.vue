<template>
  <section id="proyek" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center min-h-[400px]">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400">Memuat data proyek...</p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="flex justify-center items-center min-h-[400px]">
        <div class="text-center">
          <div class="text-red-500 text-5xl mb-4">⚠️</div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Gagal memuat data proyek</p>
          <button
            @click="fetchProjects"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div v-else class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Image Container -->
          <div class="relative w-full h-56 flex items-center justify-center">
            <img
              :src="project.image_url"
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
              >🚀 Coming Soon</span>
              <span
                v-else-if="project.status === 'on-progress'"
                class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >🔨 On Progress</span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>

            <div class="mb-4">
              <div v-if="project.tech_stack && project.tech_stack.length > 0" class="flex flex-wrap gap-2">
                <span
                  v-for="tech in parseTechStack(project.tech_stack)"
                  :key="tech"
                  class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-2.5 py-1 rounded-full"
                >{{ tech }}</span>
              </div>
              <div v-else class="text-gray-500 dark:text-gray-400 text-sm italic">Tech stack coming soon...</div>
            </div>

            <div class="flex space-x-3">
              <button
                v-if="project.status === 'coming-soon'"
                class="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-lg font-semibold cursor-not-allowed"
                disabled
              >
                🚀 Coming Soon
              </button>
              <button
                v-else-if="project.status === 'on-progress'"
                class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold cursor-not-allowed"
                disabled
              >
                🔨 On Progress
              </button>
              <a
                v-else
                :href="project.live_url || project.github_url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                🔗 Lihat Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

defineOptions({ name: 'PortfolioProjects' })

const projects = ref([])
const isLoading = ref(true)
const error = ref(null)

const API_URL = `${import.meta.env.VITE_API_URL}/api/projects`

const fetchProjects = async () => {
  try {
    isLoading.value = true
    const result = await axios.get(API_URL)
    if (result.data.success && result.data.data) {
      projects.value = result.data.data
      console.log('✅ Data projects:', projects.value)
    } else {
      throw new Error('Invalid response format')
    }
  } catch (err) {
    console.error('Gagal mengambil data proyek:', err)
    error.value = err.message
    projects.value = []
  } finally {
    isLoading.value = false
  }
}

const parseTechStack = (stack) => {
  if (!stack) return []
  return stack.split(',').map(s => s.trim())
}


onMounted(() => {
  fetchProjects()
})

const handleImageError = (event) => {
  console.warn('Image failed to load:', event.target.src)
  event.target.src = 'https://via.placeholder.com/600x400?text=No+Image'
}
</script>

<style scoped>
/* Hover effects & layout */
.hover\:-translate-y-1:hover { transform: translateY(-4px); }
.hover\:shadow-xl:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }

/* Responsive grid */
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
