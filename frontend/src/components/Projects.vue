<script setup>
defineOptions({ name: 'PortfolioProjects' });

import SectionTitle from './SectionTitle.vue';

const projects = [
  {
    title: 'Website Toko Online',
    image: 'https://via.placeholder.com/500x300?text=Proyek+1',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];
</script>
<template>
  <section id="proyek" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
        >
          <img
            :src="project.image"
            :alt="`Gambar ${project.title}`"
            class="w-full h-56 object-cover"
          >

          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              {{ project.description }}
            </p>

            <div class="mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full transition-colors duration-300"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors duration-300"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
