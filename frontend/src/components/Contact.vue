<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'ContactSection'
});

const emailCopied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('tengkuagi@gmail.com');
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = 'tengkuagi@gmail.com';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  }
};
</script>
<template>
  <footer id="kontak" class="py-20 bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300">
    <div class="container mx-auto px-6 text-center">
      <!-- Custom styled title for dark background -->
      <div class="mb-12 text-center">
        <h2 class="text-4xl font-bold text-white transition-colors duration-300">Hubungi Saya</h2>
        <div class="w-24 h-1 bg-blue-400 dark:bg-blue-300 mx-auto mt-4 rounded transition-colors duration-300"></div>
      </div>

      <p class="text-xl text-gray-300 dark:text-gray-400 mb-8 transition-colors duration-300">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
        href="mailto:tengkuagi@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Agi,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
        class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block mb-12"
        title="Klik untuk mengirim email"
      >
        Kirim Email
      </a>

      <!-- Alternative: Copy email address -->
      <div class="mb-8">
        <p class="text-gray-300 dark:text-gray-400 text-sm mb-2 transition-colors duration-300">Atau salin email ini:</p>
        <button
          @click="copyEmail"
          class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300"
          title="Klik untuk menyalin email"
        >
          {{ emailCopied ? 'Email disalin! ✓' : 'tengkuagi@gmail.com' }}
        </button>
      </div>

      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/ATengkuuu"
          target="_blank"
          class="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>

        <a
          href="#"
          target="_blank"
          class="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https://wa.me/6289603349372"
          target="_blank"
          class="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
        >
          WhatsApp
        </a>

        <a
          href="https://instagram.com/a.tengkuu"
          target="_blank"
          class="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>
      </div>

      <p class="text-gray-500 dark:text-gray-400 transition-colors duration-300">
        &copy; {{ new Date().getFullYear() }} Agi Tengku. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>
