<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <main>
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
</template>
