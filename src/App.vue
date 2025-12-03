<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'

const isDark = ref(true)

const applyTheme = (value) => {
  isDark.value = value
  if (value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

onMounted(() => {
  // Ikuti setting OS dulu (kalau ada)
  const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(prefersDark ?? true)
})

const toggleTheme = () => {
  applyTheme(!isDark.value)
}
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-500"
    :class="isDark ? 'bg-background text-slate-100' : 'bg-slate-50 text-slate-900'"
  >
    <!-- Glow background (lebih lembut di light mode) -->
    <div class="pointer-events-none fixed inset-0 opacity-60">
      <div
        class="absolute -top-40 -left-32 h-72 w-72 rounded-full blur-3xl mix-blend-soft-light"
        :class="isDark ? 'bg-purple-600' : 'bg-purple-300'"
      ></div>
      <div
        class="absolute -bottom-40 -right-40 h-80 w-80 rounded-full blur-3xl mix-blend-soft-light"
        :class="isDark ? 'bg-sky-500' : 'bg-sky-300'"
      ></div>
    </div>

    <div class="relative">
      <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />

      <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <section id="home" class="pt-24 sm:pt-28 lg:pt-32">
          <Hero />
        </section>

        <section id="about" class="pt-24">
          <About />
        </section>

        <section id="projects" class="pt-24">
          <Projects />
        </section>

        <section id="contact" class="pt-24 pb-20">
          <Contact />
        </section>
      </main>

      <SiteFooter />
    </div>
  </div>
</template>
