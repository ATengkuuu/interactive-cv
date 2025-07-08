<script setup>
defineOptions({ name: 'EducationSection' });
import SectionTitle from './SectionTitle.vue';

// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'Madrasah Aliyah Negeri Paser', major: 'MIPA' },
  { id: 3, period: '2017 - 2020', institution: 'Madrasah Tsanawiyah Negeri 3 Paser', major: 'Umum' }
];
</script>
<template>
  <section id="pendidikan" class="py-5 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <!-- Animated Section Title -->
      <div class="animate-fade-in">
        <SectionTitle title="Riwayat Pendidikan" />
      </div>

      <div class="relative">
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
