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
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 group"
            >
              <!-- Profile Icon -->
              <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="pointer-events-none">Profil</span>
              <!-- Underline animation -->
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#pendidikan"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 group"
            >
              <!-- Education Icon -->
              <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span class="pointer-events-none">Pendidikan</span>
              <!-- Underline animation -->
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#skill"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 group"
            >
              <!-- Skills Icon -->
              <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span class="pointer-events-none">Skill</span>
              <!-- Underline animation -->
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 group"
            >
              <!-- Projects Icon -->
              <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span class="pointer-events-none">Proyek</span>
              <!-- Underline animation -->
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 group"
            >
              <!-- Contact Icon -->
              <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="pointer-events-none">Kontak</span>
              <!-- Underline animation -->
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full pointer-events-none"></div>
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
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-3 py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-300 group"
            >
              <!-- Profile Icon -->
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="pointer-events-none">Profil</span>
              <!-- Side line animation for mobile -->
              <div class="absolute left-0 top-0 w-1 h-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:h-full rounded-r pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#pendidikan"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-3 py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-300 group"
            >
              <!-- Education Icon -->
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span class="pointer-events-none">Pendidikan</span>
              <!-- Side line animation for mobile -->
              <div class="absolute left-0 top-0 w-1 h-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:h-full rounded-r pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#skill"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-3 py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-300 group"
            >
              <!-- Skills Icon -->
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span class="pointer-events-none">Skill</span>
              <!-- Side line animation for mobile -->
              <div class="absolute left-0 top-0 w-1 h-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:h-full rounded-r pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-3 py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-300 group"
            >
              <!-- Projects Icon -->
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span class="pointer-events-none">Proyek</span>
              <!-- Side line animation for mobile -->
              <div class="absolute left-0 top-0 w-1 h-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:h-full rounded-r pointer-events-none"></div>
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              @click.prevent="scrollToSection"
              class="relative flex items-center gap-3 py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-300 group"
            >
              <!-- Contact Icon -->
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="pointer-events-none">Kontak</span>
              <!-- Side line animation for mobile -->
              <div class="absolute left-0 top-0 w-1 h-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:h-full rounded-r pointer-events-none"></div>
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

// Scrolling state to prevent multiple rapid clicks
const isScrolling = ref(false);

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
  event.stopPropagation();

  // Prevent multiple rapid clicks
  if (isScrolling.value) {
    return;
  }

  isScrolling.value = true;

  // Get the target section ID from href - handle both direct clicks and nested elements
  let targetId;
  const href = event.target.getAttribute('href') || event.currentTarget.getAttribute('href');

  if (href) {
    targetId = href.substring(1);
  } else {
    // Fallback: look for href in parent elements
    const linkElement = event.target.closest('a[href]');
    if (linkElement) {
      targetId = linkElement.getAttribute('href').substring(1);
    }
  }

  if (!targetId) {
    console.warn('No target ID found');
    isScrolling.value = false;
    return;
  }

  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Close mobile menu immediately for better UX
    closeMobileMenu();

    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      // Calculate responsive offset for sticky navbar
      const isMobile = window.innerWidth < 768; // md breakpoint
      let offset;

      // Different offsets for mobile vs desktop
      if (isMobile) {
        // Mobile: navbar height + mobile menu collapsed + extra padding
        offset = 100; // Increased for mobile to account for navbar height
      } else {
        // Desktop: standard navbar height
        offset = 80;
      }

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Smooth scroll to target
      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      });

      // Reset scrolling state after animation completes
      setTimeout(() => {
        isScrolling.value = false;
      }, 800); // Reduced timeout for better responsiveness
    });
  } else {
    console.warn(`Element with ID "${targetId}" not found`);
    isScrolling.value = false;
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
