<template>
  <header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 animate-fade-in transition-colors duration-300">
    <nav class="container mx-auto px-2 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-2 text-lg sm:text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
          <span class="text-blue-600 dark:text-blue-400 font-mono">&lt;/&gt;</span>
          <span>CodeSeed: Growing Into Greatness</span>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6 items-center">
          <li>
            <a
              href="#profil"
              @click="scrollToSection"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Profil
            </a>
          </li>
          <li>
            <a
              href="#pendidikan"
              @click="scrollToSection"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Pendidikan
            </a>
          </li>
          <li>
            <a
              href="#skill"
              @click="scrollToSection"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              @click="scrollToSection"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Proyek
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              @click="scrollToSection"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Kontak
            </a>
          </li>

          <!-- Dark Mode Toggle (Desktop) -->
          <li>
            <button
              @click="toggleDarkMode"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            >
              <!-- Sun Icon (Light Mode) -->
              <svg
                v-if="isDarkMode"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>

              <!-- Moon Icon (Dark Mode) -->
              <svg
                v-else
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
          </li>
        </ul>

        <div class="flex items-center space-x-3 md:hidden">
          <!-- Dark Mode Toggle (Mobile) -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <!-- Sun Icon (Light Mode) -->
            <svg
              v-if="isDarkMode"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>

            <!-- Moon Icon (Dark Mode) -->
            <svg
              v-else
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <!-- Mobile Menu Button (Hamburger) -->
          <button
            @click="toggleMobileMenu"
            class="flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative"
            aria-label="Toggle Menu"
          >
            <span
              :class="{'rotate-45': isMenuOpen, 'rotate-0 -translate-y-1': !isMenuOpen}"
              class="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 absolute"
            ></span>
            <span
              :class="{'opacity-0': isMenuOpen, 'opacity-100': !isMenuOpen}"
              class="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
            ></span>
            <span
              :class="{'-rotate-45': isMenuOpen, 'rotate-0 translate-y-1': !isMenuOpen}"
              class="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 absolute"
            ></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        :class="{'max-h-screen opacity-100': isMenuOpen, 'max-h-0 opacity-0': !isMenuOpen}"
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      >
        <ul class="pt-4 pb-2 space-y-2">
          <li>
            <a
              href="#profil"
              @click="scrollToSection"
              class="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            >
              Profil
            </a>
          </li>
          <li>
            <a
              href="#pendidikan"
              @click="scrollToSection"
              class="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            >
              Pendidikan
            </a>
          </li>
          <li>
            <a
              href="#skill"
              @click="scrollToSection"
              class="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              @click="scrollToSection"
              class="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            >
              Proyek
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              @click="scrollToSection"
              class="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            >
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineOptions({
  name: 'AppNavbar'
});

// Reactive state for mobile menu
const isMenuOpen = ref(false);

// Reactive state for dark mode
const isDarkMode = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close mobile menu
const closeMobileMenu = () => {
  isMenuOpen.value = false;
};

// Smooth scroll to section
const scrollToSection = (event) => {
  event.preventDefault();

  // Get the target section ID from href
  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Calculate offset for sticky navbar (80px)
    const offset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    // Smooth scroll to target
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    closeMobileMenu();
  } else {
    console.warn(`Element with ID "${targetId}" not found`);
  }
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  // Apply dark mode to HTML element
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
};

// Initialize dark mode from localStorage
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else if (savedDarkMode === 'false') {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  } else {
    // Default to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode.value = prefersDark;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }
});
</script>
