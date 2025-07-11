<template>
  <section id="skill" class="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center min-h-[400px]">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400">Memuat data skills...</p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="flex justify-center items-center min-h-[400px]">
        <div class="text-center">
          <div class="text-red-500 text-5xl mb-4">⚠️</div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Gagal memuat data skills</p>
          <button
            @click="fetchSkills"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>

      <!-- Skills Content -->
      <div v-else ref="skillContainer" class="flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative">
        <!-- Connection Lines SVG -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Left column connections -->
          <g v-for="(skill, index) in leftSkills" :key="`left-line-${index}`">
            <path
              :id="`path-left-${index}`"
              :d="skill.path"
              :stroke="getSkillColor(skill.iconColor)"
              stroke-width="2"
              fill="none"
              :class="`connection-line connection-line-ambient transition-all duration-300 ${highlightedSkill === index ? 'highlighted' : ''}`"
              stroke-linecap="round"
            />
            <!-- Traveling dot animation when highlighted -->
            <circle
              v-if="highlightedSkill === index && skill.path"
              r="5"
              :fill="getSkillColor(skill.iconColor)"
              class="traveling-dot"
            >
              <animateMotion
                :dur="`${1.8}s`"
                repeatCount="indefinite"
                :path="skill.path"
              />
            </circle>
            <!-- Trailing energy dots -->
            <circle
              v-if="highlightedSkill === index && skill.path"
              r="3"
              :fill="getSkillColor(skill.iconColor)"
              class="traveling-dot-trail"
              opacity="0.7"
            >
              <animateMotion
                :dur="`${1.8}s`"
                repeatCount="indefinite"
                :path="skill.path"
                begin="0.3s"
              />
            </circle>
            <circle
              v-if="highlightedSkill === index && skill.path"
              r="2"
              :fill="getSkillColor(skill.iconColor)"
              class="traveling-dot-trail"
              opacity="0.5"
            >
              <animateMotion
                :dur="`${1.8}s`"
                repeatCount="indefinite"
                :path="skill.path"
                begin="0.6s"
              />
            </circle>
          </g>

          <!-- Right column connections -->
          <g v-for="(skill, index) in rightSkills" :key="`right-line-${index}`">
            <path
              :id="`path-right-${index}`"
              :d="skill.path"
              :stroke="getSkillColor(skill.iconColor)"
              stroke-width="2"
              fill="none"
              :class="`connection-line connection-line-ambient transition-all duration-300 ${highlightedSkill === (index + 5) ? 'highlighted' : ''}`"
              stroke-linecap="round"
            />
            <!-- Traveling dot animation when highlighted -->
            <circle
              v-if="highlightedSkill === (index + 5) && skill.path"
              r="5"
              :fill="getSkillColor(skill.iconColor)"
              class="traveling-dot"
            >
              <animateMotion
                :dur="`${1.8}s`"
                repeatCount="indefinite"
                :path="skill.path"
              />
            </circle>
            <!-- Trailing energy dots -->
            <circle
              v-if="highlightedSkill === (index + 5) && skill.path"
              r="3"
              :fill="getSkillColor(skill.iconColor)"
              class="traveling-dot-trail"
              opacity="0.7"
            >
              <animateMotion
                :dur="`${1.8}s`"
                repeatCount="indefinite"
                :path="skill.path"
                begin="0.3s"
              />
            </circle>
            <circle
              v-if="highlightedSkill === (index + 5) && skill.path"
              r="2"
              :fill="getSkillColor(skill.iconColor)"
              class="traveling-dot-trail"
              opacity="0.5"
            >
              <animateMotion
                :dur="`${1.8}s`"
                repeatCount="indefinite"
                :path="skill.path"
                begin="0.6s"
              />
            </circle>
          </g>

          <!-- Ambient energy dots when no interaction -->
          <g v-for="dot in ambientDots" :key="dot.id">
            <circle
              r="3"
              :fill="dot.color"
              class="ambient-energy-dot"
              :style="{ '--dot-color': dot.color }"
            >
              <animateMotion
                :dur="`${dot.duration}s`"
                repeatCount="1"
                :path="dot.path"
                fill="freeze"
              />
            </circle>
          </g>
        </svg>

        <!-- Left Skills Column -->
        <div ref="leftColumn" class="absolute left-2 sm:left-4 md:left-8 lg:left-16 xl:left-24 top-1/2 transform -translate-y-1/2 space-y-2 sm:space-y-4 md:space-y-6 z-10">
          <div
            v-for="(skill, index) in leftSkills"
            :key="skill.name"
            :ref="el => { if (el) skillElements[index] = el }"
            class="group cursor-pointer flex flex-col items-center text-center"
            @mouseenter="highlightSkill(index)"
            @mouseleave="unhighlightSkill"
          >
            <!-- Skill Icon Container -->
            <div
              :class="`
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl shadow-lg
                flex items-center justify-center transform transition-all duration-300
                hover:scale-110 hover:shadow-xl border-2 mb-1 sm:mb-2 skill-icon
                ${highlightedSkill === index ? 'border-blue-500 scale-110 shadow-blue-200' : 'border-gray-200 dark:border-gray-600'}
              `"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                loading="lazy"
                @error="(e) => handleIconError(e, skill.name)"
              />
            </div>

            <!-- Skill Info -->
            <div class="text-center">
              <h3 class="text-xs sm:text-sm md:text-base font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
              <p class="text-xs text-blue-600 dark:text-blue-400 mt-0.5 sm:mt-1">{{ skill.level }}</p>
            </div>
          </div>
        </div>

        <!-- Central Skills Hub -->
        <div ref="hubElement" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl skills-hub z-20">
          Skills
        </div>

        <!-- Right Skills Column -->
        <div ref="rightColumn" class="absolute right-2 sm:right-4 md:right-8 lg:right-16 xl:right-24 top-1/2 transform -translate-y-1/2 space-y-2 sm:space-y-4 md:space-y-6 z-10">
          <div
            v-for="(skill, index) in rightSkills"
            :key="skill.name"
            :ref="el => { if (el) skillElements[index + 5] = el }"
            class="group cursor-pointer flex flex-col items-center text-center"
            @mouseenter="highlightSkill(index + 5)"
            @mouseleave="unhighlightSkill"
          >
            <!-- Skill Icon Container -->
            <div
              :class="`
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl shadow-lg
                flex items-center justify-center transform transition-all duration-300
                hover:scale-110 hover:shadow-xl border-2 mb-1 sm:mb-2 skill-icon
                ${highlightedSkill === (index + 5) ? 'border-blue-500 scale-110 shadow-blue-200' : 'border-gray-200 dark:border-gray-600'}
              `"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                loading="lazy"
                @error="(e) => handleIconError(e, skill.name)"
              />
            </div>

            <!-- Skill Info -->
            <div class="text-center">
              <h3 class="text-xs sm:text-sm md:text-base font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
              <p class="text-xs text-blue-600 dark:text-blue-400 mt-0.5 sm:mt-1">{{ skill.level }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

defineOptions({ name: 'RadialSkillsSection' })

const highlightedSkill = ref(null)
const skillContainer = ref(null)
const hubElement = ref(null)
const skillElements = ref([])
const leftColumn = ref(null)
const rightColumn = ref(null)

const ambientDots = ref([])
const ambientInterval = ref(null)

const skillsData = ref([])
const isLoading = ref(true)
const error = ref(null)

const API_URL = `${import.meta.env.VITE_API_URL}/api/skills`

const fetchSkills = async () => {
  try {
    isLoading.value = true
    const result = await axios.get(API_URL)
    if (result.data.success && result.data.data) {
      skillsData.value = result.data.data
    } else {
      throw new Error('Invalid response format')
    }
  } catch (err) {
    console.error('Gagal mengambil data skill:', err)
    error.value = err.message
    skillsData.value = []
  } finally {
    isLoading.value = false
  }
}

const skillsWithIcons = ref([])

// Split skills into left and right columns
const leftSkills = ref([])
const rightSkills = ref([])

// Update skills data when fetched
const updateSkillsData = () => {
  if (skillsData.value.length > 0) {
    skillsWithIcons.value = skillsData.value
    leftSkills.value = skillsData.value.slice(0, 5)
    rightSkills.value = skillsData.value.slice(5, 10)
  }
}

// Icon error handling
const handleIconError = (event, skillName) => {
  console.warn(`Failed to load icon for ${skillName}`)
  // You could add fallback logic here if needed
  event.target.style.display = 'none'
}

// Preload icons for better performance
const preloadIcons = () => {
  skillsData.value.forEach(skill => {
    const img = new Image()
    img.src = skill.icon
  })
}

const highlightSkill = (index) => {
  highlightedSkill.value = index
  stopAmbientDots()
}

const unhighlightSkill = () => {
  highlightedSkill.value = null
  startAmbientDots()
}

// Ambient animations functions
const createAmbientDot = () => {
  const availableSkills = []

  // Collect all skills that have valid paths
  leftSkills.value.forEach((skill, index) => {
    if (skill.path) {
      availableSkills.push({ ...skill, index, type: 'left' })
    }
  })

  rightSkills.value.forEach((skill, index) => {
    if (skill.path) {
      availableSkills.push({ ...skill, index: index + 5, type: 'right' })
    }
  })

  if (availableSkills.length === 0) return

  // Pick a random skill
  const randomSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)]

  // Create dot with unique ID
  const dotId = `ambient-dot-${Date.now()}-${Math.random()}`
  const newDot = {
    id: dotId,
    path: randomSkill.path,
    color: getSkillColor(randomSkill.iconColor),
    duration: 3 + Math.random() * 2 // Random duration between 3-5s
  }

  ambientDots.value.push(newDot)

  // Remove dot after animation completes
  setTimeout(() => {
    ambientDots.value = ambientDots.value.filter(dot => dot.id !== dotId)
  }, newDot.duration * 1000)
}

const startAmbientDots = () => {
  if (ambientInterval.value) return

  // Create first dot after a short delay
  setTimeout(() => {
    if (highlightedSkill.value === null) {
      createAmbientDot()
    }
  }, 2000)

  // Then create dots at random intervals
  ambientInterval.value = setInterval(() => {
    if (highlightedSkill.value === null) {
      createAmbientDot()
    }
  }, 3000 + Math.random() * 4000) // Random interval between 3-7 seconds
}

const stopAmbientDots = () => {
  if (ambientInterval.value) {
    clearInterval(ambientInterval.value)
    ambientInterval.value = null
  }
  // Clear existing dots
  ambientDots.value = []
}

const updatePaths = () => {
  if (!hubElement.value || !skillContainer.value || !skillElements.value.length) return

  const containerRect = skillContainer.value.getBoundingClientRect()
  const hubRect = hubElement.value.getBoundingClientRect()
  const hubCenterX = hubRect.left + hubRect.width / 2 - containerRect.left
  const hubCenterY = hubRect.top + hubRect.height / 2 - containerRect.top

  // Check if we're on mobile
  const isMobile = window.innerWidth < 640

  skillElements.value.forEach((skillEl, index) => {
    if (!skillEl) return
    const skillRect = skillEl.getBoundingClientRect()

    // Get the icon container inside the skill element
    const iconContainer = skillEl.querySelector('.skill-icon')
    let skillCenterX, skillCenterY

    if (iconContainer) {
      // Use icon container center for more precise positioning
      const iconRect = iconContainer.getBoundingClientRect()
      skillCenterX = iconRect.left + iconRect.width / 2 - containerRect.left
      skillCenterY = iconRect.top + iconRect.height / 2 - containerRect.top
    } else {
      // Fallback to skill element center
      skillCenterX = skillRect.left + skillRect.width / 2 - containerRect.left
      skillCenterY = skillRect.top + skillRect.height / 2 - containerRect.top
    }

    let path
    if (isMobile) {
      // Curved lines for mobile but more compact - from icon center to hub center
      const controlX1 = skillCenterX + (hubCenterX - skillCenterX) * 0.3;
      const controlY1 = skillCenterY + (hubCenterY - skillCenterY) * 0.1;
      const controlX2 = hubCenterX - (hubCenterX - skillCenterX) * 0.3;
      const controlY2 = hubCenterY - (hubCenterY - skillCenterY) * 0.1;
      path = `M ${skillCenterX} ${skillCenterY} C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${hubCenterX} ${hubCenterY}`
    } else {
      // More elaborate curves for desktop - smooth curve from icon center to hub center
      const controlX = skillCenterX + (hubCenterX - skillCenterX) * 0.5;
      const controlY = skillCenterY + (hubCenterY - skillCenterY) * 0.2; // Slight curve
      const controlX2 = hubCenterX - (hubCenterX - skillCenterX) * 0.3;
      const controlY2 = hubCenterY - (hubCenterY - skillCenterY) * 0.2;
      path = `M ${skillCenterX} ${skillCenterY} C ${controlX} ${controlY} ${controlX2} ${controlY2} ${hubCenterX} ${hubCenterY}`
    }

    if (index < 5) {
      if (leftSkills.value[index]) {
        leftSkills.value[index].path = path
      }
    } else {
      if (rightSkills.value[index - 5]) {
        rightSkills.value[index - 5].path = path
      }
    }
  })
}

onMounted(async () => {
  // Fetch skills data from API
  await fetchSkills()

  // Update skills data structure
  updateSkillsData()

  // Preload icons for better performance
  preloadIcons()

  // Listen for animation end on the right column (which finishes last)
  if (rightColumn.value) {
    rightColumn.value.addEventListener('animationend', () => {
      // Small delay to ensure all animations are complete
      setTimeout(() => {
        updatePaths()
        window.addEventListener('resize', updatePaths)
      }, 50)
    }, { once: true })
  }

  // Fallback in case animations don't trigger
  setTimeout(() => {
    if (!window.getComputedStyle) return
    updatePaths()
    if (!window.getEventListeners || !window.getEventListeners(window).resize) {
      window.addEventListener('resize', updatePaths)
    }

    // Start ambient animations after paths are ready
    setTimeout(() => {
      startAmbientDots()
    }, 1000)
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePaths)
  stopAmbientDots()
})

// Function to get skill color for line
const getSkillColor = (iconColor) => {
  if (!iconColor) return '#3b82f6'

  const colorMap = {
    'text-green-500': '#10b981',
    'text-yellow-500': '#f59e0b',
    'text-blue-500': '#3b82f6',
    'text-blue-400': '#60a5fa',
    'text-green-600': '#059669',
    'text-blue-600': '#2563eb',
    'text-orange-500': '#f97316',
    'text-red-500': '#ef4444',
    'text-cyan-500': '#06b6d4',
    'text-blue-700': '#1d4ed8'
  }

  return colorMap[iconColor] || '#3b82f6'
}
</script>

<style scoped>
/* Custom animations */
@keyframes pulse-skill {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes drawLine {
  0% {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes lineGlow {
  0%, 100% {
    stroke-opacity: 0.8;
    filter: drop-shadow(0 0 3px currentColor);
  }
  50% {
    stroke-opacity: 1;
    filter: drop-shadow(0 0 8px currentColor);
  }
}

.connection-line {
  stroke-opacity: 0.6;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInLine 0.8s ease-out 0.5s forwards;
}

.connection-line-ambient {
  animation:
    fadeInLine 0.8s ease-out 0.5s forwards,
    ambientLineGlow 8s ease-in-out infinite 2s,
    ambientLinePulse 6s ease-in-out infinite 3s;
}

/* Staggered animation delays for more natural effect */
.connection-line-ambient:nth-child(1) {
  animation:
    fadeInLine 0.8s ease-out 0.5s forwards,
    ambientLineGlow 8s ease-in-out infinite 2s,
    ambientLinePulse 6s ease-in-out infinite 3s;
}

.connection-line-ambient:nth-child(2) {
  animation:
    fadeInLine 0.8s ease-out 0.7s forwards,
    ambientLineGlow 8s ease-in-out infinite 3.5s,
    ambientLinePulse 6s ease-in-out infinite 4.5s;
}

.connection-line-ambient:nth-child(3) {
  animation:
    fadeInLine 0.8s ease-out 0.9s forwards,
    ambientLineGlow 8s ease-in-out infinite 5s,
    ambientLinePulse 6s ease-in-out infinite 6s;
}

.connection-line-ambient:nth-child(4) {
  animation:
    fadeInLine 0.8s ease-out 1.1s forwards,
    ambientLineGlow 8s ease-in-out infinite 6.5s,
    ambientLinePulse 6s ease-in-out infinite 7.5s;
}

.connection-line-ambient:nth-child(5) {
  animation:
    fadeInLine 0.8s ease-out 1.3s forwards,
    ambientLineGlow 8s ease-in-out infinite 8s,
    ambientLinePulse 6s ease-in-out infinite 9s;
}

@keyframes fadeInLine {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes ambientLineGlow {
  0%, 100% {
    stroke-opacity: 0.4;
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    stroke-opacity: 0.6;
    filter: drop-shadow(0 0 2px currentColor);
  }
  50% {
    stroke-opacity: 0.8;
    filter: drop-shadow(0 0 4px currentColor);
  }
  75% {
    stroke-opacity: 0.6;
    filter: drop-shadow(0 0 2px currentColor);
  }
}

@keyframes ambientLinePulse {
  0%, 100% {
    stroke-width: 2;
    stroke-opacity: 0.6;
  }
  50% {
    stroke-width: 2.5;
    stroke-opacity: 0.9;
  }
}

.connection-line.highlighted {
  stroke-opacity: 1;
  stroke-width: 3;
  animation: lineGlow 2s ease-in-out infinite !important;
}

/* Ambient energy dots */
.ambient-energy-dot {
  filter: drop-shadow(0 0 6px var(--dot-color))
          drop-shadow(0 0 3px var(--dot-color))
          drop-shadow(0 0 1px var(--dot-color));
  animation: ambientGlow 2s ease-in-out infinite alternate;
  opacity: 0.8;
}

@keyframes ambientGlow {
  0% {
    filter: drop-shadow(0 0 4px var(--dot-color))
            drop-shadow(0 0 2px var(--dot-color));
    transform: scale(0.8);
  }
  100% {
    filter: drop-shadow(0 0 8px var(--dot-color))
            drop-shadow(0 0 4px var(--dot-color))
            drop-shadow(0 0 2px var(--dot-color));
    transform: scale(1.2);
  }
}

/* Traveling dots for interaction */
.traveling-dot {
  filter: drop-shadow(0 0 10px currentColor)
          drop-shadow(0 0 5px currentColor)
          drop-shadow(0 0 2px currentColor);
  animation: energyPulse 1s ease-in-out infinite alternate;
}

.traveling-dot-trail {
  filter: drop-shadow(0 0 6px currentColor)
          drop-shadow(0 0 3px currentColor);
  animation: energyPulse 1.2s ease-in-out infinite alternate;
}

@keyframes energyPulse {
  0% {
    transform: scale(0.9);
    filter: drop-shadow(0 0 6px currentColor)
            drop-shadow(0 0 3px currentColor)
            drop-shadow(0 0 1px currentColor);
  }
  100% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 12px currentColor)
            drop-shadow(0 0 6px currentColor)
            drop-shadow(0 0 3px currentColor);
  }
}

/* Enhanced skill icon interaction */
.group:hover .skill-icon {
  animation: skillBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes skillBounce {
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.15) rotate(5deg); }
  100% { transform: scale(1.1) rotate(0deg); }
}

/* Ripple effect on skill hover */
.skill-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.3);
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  pointer-events: none;
}

.group:hover .skill-icon::before {
  width: 120%;
  height: 120%;
  opacity: 0;
}

.skill-icon {
  position: relative;
  overflow: hidden;
}

.group:hover .animate-pulse-skill {
  animation: pulse-skill 2s infinite;
}

/* Add floating animation to central hub */
.skills-hub {
  animation: float 3s ease-in-out infinite;
}

/* Left and right columns animation */
.z-10:first-of-type {
  animation: slideInLeft 0.8s ease-out;
}

.z-10:last-of-type {
  animation: slideInRight 0.8s ease-out;
}

/* Skill Icon Styling */
.skill-icon img {
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.skill-icon:hover img {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* Dark mode icon adjustments */
.dark .skill-icon img {
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1));
}

.dark .skill-icon:hover img {
  filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2));
}

/* Icon loading and error states */
.skill-icon img[alt]:empty::before {
  content: attr(alt);
  font-size: 0.75rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .absolute.left-2 {
    left: 0.25rem;
  }

  .absolute.right-2 {
    right: 0.25rem;
  }

  .connection-line {
    stroke-width: 1.5;
  }

  .skills-hub {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 640px) {
  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }

  #skill .min-h-\[400px\] {
    min-height: 350px;
  }

  .connection-line {
    stroke-width: 1;
    stroke-opacity: 0.5;
  }

  .connection-line.highlighted {
    stroke-width: 2;
  }
}

@media (max-width: 480px) {
  .skills-hub {
    font-size: 0.75rem;
    padding: 0.375rem 0.625rem;
  }

  .absolute.left-2 {
    left: 0.125rem;
  }

  .absolute.right-2 {
    right: 0.125rem;
  }
}
</style>
