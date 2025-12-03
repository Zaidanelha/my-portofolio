<script setup>
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-white/5 bg-background/80 backdrop-blur-xl">
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <a href="#home" class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 to-sky-500 flex items-center justify-center shadow-lg">
          <span class="text-xs font-bold">YOU</span>
        </div>
        <span class="text-sm font-medium">Your Name</span>
      </a>

      <div class="hidden sm:flex items-center gap-6 text-xs font-medium">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="hover:text-white transition"
        >
          {{ item.label }}
        </a>
      </div>

      <a
        href="#contact"
        class="hidden sm:inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow"
      >
        Let’s Talk
      </a>
    </nav>
  </header>
</template>
