<template>
  <section
    id="kontak"
    ref="sectionRef"
    class="section py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
  >
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Mari Berkolaborasi
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Saya terbuka untuk diskusi proyek, kolaborasi, atau sekadar ngobrol tentang teknologi
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12 items-start relative">
        <!-- Contact Form -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Kirim Pesan
          </h3>

          <!-- Success Message -->
          <div v-if="isSubmitted" class="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-green-700 dark:text-green-300 font-medium">
                Pesan berhasil dikirim! Terima kasih atas pesan Anda.
              </p>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="submitError" class="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-red-600 dark:text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-red-700 dark:text-red-300 font-medium">{{ submitError }}</p>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Honeypot field for spam protection (hidden) -->
            <input type="text" name="_gotcha" style="display:none" />

            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nama Lengkap
              </label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                placeholder="nama@email.com"
              />
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subjek
              </label>
              <input
                v-model="form.subject"
                type="text"
                id="subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                placeholder="Topik pesan Anda"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pesan
              </label>
              <textarea
                v-model="form.message"
                id="message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex gap-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center justify-center"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
              </button>

              <button
                type="button"
                @click="resetForm"
                class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Reset
              </button>
            </div>
          </form>

          <!-- GitHub Contributions Widget -->
          <div class="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div class="mb-4">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <svg class="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Activity
              </h4>
            </div>

            <!-- Real GitHub Contribution Graph using GitHub README Stats -->
            <div class="space-y-4">
              <!-- Contribution Graph -->
                <div class="flex justify-center">
                <!-- Light mode -->
                <img
                  v-if="!isDarkMode"
                  src="https://streak-stats.demolab.com/?user=ATengkuuu&theme=transparent&hide_border=true&stroke=6366f1&ring=06b6d4&fire=ef4444&sideNums=374151&sideLabels=374151&dates=6b7280"
                  alt="GitHub Streak Stats"
                  class="max-w-full h-auto rounded-lg"
                  loading="lazy"
                />
                <!-- Dark mode - menggunakan theme yang kompatibel -->
                <img
                  v-else
                  src="https://streak-stats.demolab.com/?user=ATengkuuu&theme=dark&hide_border=true&stroke=a855f7&ring=06b6d4&fire=ef4444&sideNums=e5e7eb&sideLabels=d1d5db&dates=9ca3af&background=1f2937"
                  alt="GitHub Streak Stats"
                  class="max-w-full h-auto rounded-lg"
                  loading="lazy"
                  @error="handleImageError"
                />
              </div>

              <!-- Additional GitHub Stats -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex justify-center">
                  <!-- Light mode -->
                  <img
                    v-if="!isDarkMode"
                    src="https://github-readme-stats.vercel.app/api?username=ATengkuuu&show_icons=true&theme=transparent&hide_border=true&text_color=374151&icon_color=6366f1&title_color=1f2937"
                    alt="GitHub Stats"
                    class="max-w-full h-auto rounded-lg"
                    loading="lazy"
                    @error="handleImageError"
                  />
                  <!-- Dark mode -->
                  <img
                    v-else
                    src="https://github-readme-stats.vercel.app/api?username=ATengkuuu&show_icons=true&theme=dark&hide_border=true&text_color=e5e7eb&icon_color=a855f7&title_color=f9fafb&bg_color=1f2937"
                    alt="GitHub Stats"
                    class="max-w-full h-auto rounded-lg"
                    loading="lazy"
                    @error="handleImageError"
                  />
                </div>
                <div class="flex justify-center">
                  <!-- Light mode -->
                  <img
                    v-if="!isDarkMode"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ATengkuuu&layout=compact&theme=transparent&hide_border=true&text_color=374151&title_color=1f2937"
                    alt="Top Languages"
                    class="max-w-full h-auto rounded-lg"
                    loading="lazy"
                    @error="handleImageError"
                  />
                  <!-- Dark mode -->
                  <img
                    v-else
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ATengkuuu&layout=compact&theme=dark&hide_border=true&text_color=e5e7eb&title_color=f9fafb&bg_color=1f2937"
                    alt="Top Languages"
                    class="max-w-full h-auto rounded-lg"
                    loading="lazy"
                    @error="handleImageError"
                  />
                </div>
              </div>

              <!-- CTA to view full profile -->
              <div class="text-center pt-4 border-t border-gray-200 dark:border-gray-600">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Lihat aktivitas lengkap dan repositori saya
                </p>
                <a
                  href="https://github.com/ATengkuuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors space-x-2"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Visit GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Info dan Card -->
        <div class="space-y-8">
          <!-- Animated Card - Desktop Only -->
          <div
            v-if="isDesktop"
            ref="cardRef"
            class="transition-all duration-700 ease-out transform"
            :class="{
              'opacity-100 translate-y-0 scale-100': showCard,
              'opacity-0 translate-y-8 scale-95': !showCard
            }"
          >
            <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-1 rounded-2xl shadow-2xl">
              <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full h-96 relative overflow-hidden">
                <!-- Brand Badge -->
                <div class="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  CodeSeed: Growing Into Greatness
                </div>

                <!-- Profile Image -->
                <div class="flex justify-center mt-8 mb-6">
                  <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                    <img
                      src="https://avatars.githubusercontent.com/u/202240388?v=4"
                      alt="Agi Muhammad Tengku Aqamaddin"
                      class="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <!-- Name and Title -->
                <div class="text-center mb-6">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Agi Muhammad Tengku Aqamaddin
                  </h3>
                  <p class="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    FRONT-END ENGINEER
                  </p>
                </div>

                <!-- Inspirational Quote -->
                <div class="text-center mb-6 px-4">
                  <div class="relative">
                    <!-- Quote marks -->
                    <div class="absolute -top-2 -left-2 text-4xl text-blue-500 dark:text-blue-400 opacity-30 font-serif">"</div>
                    <blockquote class="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      Do not wait the time will never be 'just right'. Start where you stand, and work with whatever tools you may have.
                    </blockquote>
                    <cite class="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      — Napoleon Hill
                    </cite>
                    <div class="absolute -bottom-2 -right-2 text-4xl text-purple-500 dark:text-purple-400 opacity-30 font-serif">"</div>
                  </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
                <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
                <div class="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Sosial Media
            </h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <div class="flex items-center space-x-2">
                    <a
                      href="mailto:tengkuagi@gmail.com"
                      class="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      title="Klik untuk buka email client atau copy alamat email"
                    >
                      tengkuagi@gmail.com
                    </a>
                    <button
                      @click="copyEmail"
                      class="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="Copy email address"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <!-- Notification for copy success -->
                  <div
                    v-if="emailCopied"
                    class="mt-1 text-xs text-green-600 dark:text-green-400 font-medium animate-fade-in"
                  >
                    ✓ Email copied to clipboard!
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/ATengkuuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 dark:text-white font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    github.com/ATengkuuu
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.542"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">WhatsApp</p>
                  <a
                    href="https://wa.me/6289603349372"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 dark:text-white font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                  >
                    +62 896-0334-9372
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Instagram</p>
                  <a
                    href="https://instagram.com/a.tengkuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 dark:text-white font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    @a.tengkuu
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Discord</p>
                  <a
                    href="discord://discord.com/users/684634138640252957"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    @click="handleDiscordClick"
                  >
                    @atengkuu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Copyright -->
      <div class="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-400 mb-2">
            &copy; {{ new Date().getFullYear() }} Agi Muhammad Tengku Aqamaddin. All rights reserved.
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500">
            Dibuat dengan ❤️ menggunakan Vue.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'ContactSection'
});

// Form data
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Form states
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submitError = ref('');

// Card animation states
const showCard = ref(false);
const cardRef = ref(null);
const sectionRef = ref(null);
const isDesktop = ref(window.innerWidth >= 1024);
const emailCopied = ref(false);

// Dark mode detection for GitHub stats
const isDarkMode = ref(false);

// Intersection Observer
let observer = null;

// Check if device is desktop
const checkDevice = () => {
  isDesktop.value = window.innerWidth >= 1024; // lg breakpoint
};

// Check dark mode
const checkDarkMode = () => {
  // Check if dark class is present on html element
  isDarkMode.value = document.documentElement.classList.contains('dark');
};

// Setup intersection observer
const setupIntersectionObserver = () => {
  if (!sectionRef.value) return;

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && isDesktop.value) {
        showCard.value = true;
      } else {
        showCard.value = false;
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  observer.observe(sectionRef.value);
};

// Form submission handler
const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitError.value = '';

  try {
    // Validate form
    if (!form.value.name.trim() || !form.value.email.trim() || !form.value.subject.trim() || !form.value.message.trim()) {
      throw new Error('Semua field harus diisi');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.value.email)) {
      throw new Error('Format email tidak valid');
    }

    // Send to Formspree
    const response = await fetch('https://formspree.io/f/mjkrqdro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        _replyto: form.value.email,
        _subject: `Portfolio Contact: ${form.value.subject}`,
        _gotcha: '', // Honeypot field for spam protection
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Gagal mengirim pesan. Silakan coba lagi.');
    }

    // Show success message
    isSubmitted.value = true;

    // Reset form after showing success message
    setTimeout(() => {
      resetForm();
    }, 3000);

  } catch (error) {
    console.error('Form submission error:', error);
    submitError.value = error.message || 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.';
  } finally {
    isSubmitting.value = false;
  }
};

// Reset form function
const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitted.value = false;
  submitError.value = '';
};

// Copy email to clipboard
const copyEmail = async () => {
  const email = 'tengkuagi@gmail.com';

  try {
    await navigator.clipboard.writeText(email);
    emailCopied.value = true;

    // Hide notification after 2 seconds
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      emailCopied.value = true;

      setTimeout(() => {
        emailCopied.value = false;
      }, 2000);
    } catch {
      console.error('Could not copy email address');
    }

    document.body.removeChild(textArea);
  }
};

// Handle Discord click with app fallback
const handleDiscordClick = (event) => {
  event.preventDefault();

  const discordAppUrl = 'discord://discord.com/users/684634138640252957';
  const discordWebUrl = 'https://discordapp.com/users/684634138640252957';

  // Try to open Discord app first
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = discordAppUrl;
  document.body.appendChild(iframe);

  // Fallback to web after a short delay if app doesn't open
  setTimeout(() => {
    document.body.removeChild(iframe);
    window.open(discordWebUrl, '_blank', 'noopener,noreferrer');
  }, 1000);

  // For mobile devices, try direct protocol first
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = discordAppUrl;
    // Fallback for mobile
    setTimeout(() => {
      window.open(discordWebUrl, '_blank', 'noopener,noreferrer');
    }, 2000);
  }
};

// Handle GitHub image errors
const handleImageError = (event) => {
  console.log('GitHub widget failed to load:', event.target.src);
  // Hide the image if it fails to load
  event.target.style.display = 'none';
};

// Lifecycle hooks
onMounted(() => {
  checkDevice();
  checkDarkMode(); // Check initial dark mode state
  setupIntersectionObserver();

  window.addEventListener('resize', checkDevice);

  // Watch for dark mode changes
  const darkModeObserver = new MutationObserver(() => {
    checkDarkMode();
  });

  darkModeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });

  // Store observer for cleanup
  window._darkModeObserver = darkModeObserver;
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  window.removeEventListener('resize', checkDevice);

  // Clean up dark mode observer
  if (window._darkModeObserver) {
    window._darkModeObserver.disconnect();
    delete window._darkModeObserver;
  }
});
</script>

<style scoped>
.section {
  scroll-margin-top: 5rem;
}

/* Custom animations for the card */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-in {
  0% { opacity: 0; transform: translateY(-5px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Focus styles */
input:focus, textarea:focus, button:focus {
  outline: none;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Dark mode scrollbar */
.dark textarea::-webkit-scrollbar-track {
  background: #374151;
}

.dark textarea::-webkit-scrollbar-thumb {
  background: #6B7280;
}

.dark textarea::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}
</style>
