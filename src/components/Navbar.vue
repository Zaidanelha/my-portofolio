<script setup>
import { ref } from 'vue'

const props = defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['toggle-theme'])

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleNavClick = () => {
  isOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b bg-white/90 border-black/5 backdrop-blur-xl
           dark:bg-background/80 dark:border-white/5 transition-colors duration-500"
  >
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
      <!-- Brand -->
      <a href="#home" class="flex items-center gap-2">
        <div
          class="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 to-sky-500 flex items-center justify-center shadow-lg"
        >
          <span class="text-xs font-bold text-white">ZE</span>
        </div>
        <span class="text-sm font-medium text-slate-900 dark:text-slate-100">
          Muhammad Zaidan Elha Rasyad
        </span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden sm:flex items-center gap-6 text-xs font-medium">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-2">
        <!-- Toggle light/dark -->
        <button
          type="button"
          @click="emit('toggle-theme')"
          class="relative flex items-center w-12 h-6 rounded-full transition-colors
                 bg-slate-200 dark:bg-slate-700"
        >
          <span
            class="absolute left-1 text-[10px]"
            :class="props.isDark ? 'text-slate-400' : 'text-yellow-500'"
          >
            ☀
          </span>
          <span
            class="absolute right-1 text-[10px]"
            :class="props.isDark ? 'text-sky-300' : 'text-slate-400'"
          >
            ☾
          </span>
          <span
            class="absolute h-5 w-5 rounded-full bg-white shadow transform transition-transform"
            :class="props.isDark ? 'translate-x-6' : 'translate-x-1'"
          ></span>
        </button>

        <!-- Desktop CTA -->
        <a
          href="#contact"
          class="hidden sm:inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow-soft hover:brightness-110 transition"
        >
          Let’s Talk
        </a>

        <!-- Mobile hamburger (baru, lebih cakep) -->
        <button
          type="button"
          class="inline-flex items-center justify-center sm:hidden w-9 h-9 rounded-full
                 bg-white/90 border border-black/5 shadow-sm
                 dark:bg-white/5 dark:border-white/10"
          @click="toggleMenu"
        >
          <span class="sr-only">Toggle navigation</span>

          <!-- 3 garis -->
          <div v-if="!isOpen" class="space-y-[3px]">
            <span
              class="block h-[2px] w-4 rounded-full bg-slate-700 dark:bg-slate-100"
            ></span>
            <span
              class="block h-[2px] w-4 rounded-full bg-slate-700 dark:bg-slate-100"
            ></span>
            <span
              class="block h-[2px] w-4 rounded-full bg-slate-700 dark:bg-slate-100"
            ></span>
          </div>

          <!-- Icon X -->
          <div v-else class="relative h-4 w-4">
            <span
              class="absolute left-0 right-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-45 rounded-full bg-slate-700 dark:bg-slate-100"
            ></span>
            <span
              class="absolute left-0 right-0 top-1/2 h-[2px] w-4 -translate-y-1/2 -rotate-45 rounded-full bg-slate-700 dark:bg-slate-100"
            ></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="sm:hidden border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-background/95 backdrop-blur-md"
    >
      <div class="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="handleNavClick"
          class="py-1 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          {{ item.label }}
        </a>

        <a
          href="#contact"
          @click="handleNavClick"
          class="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-soft hover:brightness-110 transition"
        >
          Let’s Talk
        </a>
      </div>
    </div>
  </header>
</template>
