<script setup>
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
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b bg-white/90 border-black/5 backdrop-blur-xl
           dark:bg-background/80 dark:border-white/5 transition-colors duration-500"
  >
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
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

      <div class="flex items-center gap-3">
        <!-- toggle light/dark -->
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

        <a
          href="#contact"
          class="hidden sm:inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow-soft hover:brightness-110 transition"
        >
          Let’s Talk
        </a>
      </div>
    </nav>
  </header>
</template>
