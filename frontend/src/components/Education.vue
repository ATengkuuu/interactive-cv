<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

defineOptions({ name: 'EducationSection' });

// Education data from API
const educationHistory = ref([])
const isLoading = ref(true)
const error = ref(null)

const API_URL = `${import.meta.env.VITE_API_URL}/api/education`

// Fetch education from backend API
const fetchEducation = async () => {
  try {
    isLoading.value = true
    const result = await axios.get(API_URL)
    if (result.data.success && result.data.data) {
      educationHistory.value = result.data.data
    } else {
      throw new Error('Invalid response format')
    }
  } catch (err) {
    console.error('Gagal mengambil data pendidikan:', err)
    error.value = err.message
    educationHistory.value = []
  } finally {
    isLoading.value = false
  }
}

// Load education when component mounts
onMounted(() => {
  fetchEducation()
})
</script>
<template>
  <section id="pendidikan" class="py-5 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <!-- Animated Section Title -->
      <div class="animate-fade-in">
        <SectionTitle title="Riwayat Pendidikan" />
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center min-h-[300px]">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400">Memuat riwayat pendidikan...</p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="flex justify-center items-center min-h-[300px]">
        <div class="text-center">
          <div class="text-red-500 text-5xl mb-4">⚠️</div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Gagal memuat data pendidikan</p>
          <button
            @click="fetchEducation"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>

      <!-- Education Timeline -->
      <div v-else class="relative">
        <!-- Animated Timeline Line -->
        <div
          class="absolute h-full border-r-2 border-gray-300 dark:border-gray-600 transition-colors duration-300 animate-fade-in"
          style="left: 50%;"
        ></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
          :class="index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                {{ edu.period }}
              </p>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                {{ edu.institution }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {{ edu.major }}
              </p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full z-10 transition-colors duration-300"></div>
            </div>
          </div>

          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full z-10 transition-colors duration-300"></div>
            </div>

            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                {{ edu.period }}
              </p>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                {{ edu.institution }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {{ edu.major }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
