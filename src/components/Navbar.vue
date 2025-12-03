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
    class="sticky top-0 z-30 border-b bg-white/80 backdrop-blur-xl border-black/5 dark:bg-background/80 dark:border-white/5 transition-colors duration-500"
  >
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
      <a href="#home" class="flex items-center gap-2">
        <div
          class="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 to-sky-500 flex items-center justify-center shadow-lg"
        >
          <span class="text-xs font-bold text-white">ZE</span>
        </div>
        <span class="text-sm font-medium">
          Muhammad Zaidan Elha Rasyad
        </span>
      </a>

      <div class="hidden sm:flex items-center gap-6 text-xs font-medium">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <!-- Toggle dark/light -->
        <button
          type="button"
          @click="emit('toggle-theme')"
          class="flex items-center justify-center w-9 h-9 rounded-full border border-black/10 bg-white/80 text-xs shadow hover:bg-slate-100 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
        >
          <span v-if="props.isDark">☀️</span>
          <span v-else>🌙</span>
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
