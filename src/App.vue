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
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved === 'dark')
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }
})

const toggleTheme = () => {
  const next = !isDark.value
  applyTheme(next)
  localStorage.setItem('theme', next ? 'dark' : 'light')
}
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-500"
    :class="isDark ? 'bg-background text-slate-100' : 'bg-slate-50 text-slate-900'"
  >
    <!-- Glow background -->
    <div class="pointer-events-none fixed inset-0 opacity-60">
      <div
        class="absolute -top-40 -left-32 h-72 w-72 rounded-full blur-3xl mix-blend-soft-light"
        :class="isDark ? 'bg-purple-600' : 'bg-purple-300'"
      ></div>
      <div
        class="absolute -bottom-32 -right-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full blur-2xl mix-blend-soft-light opacity-40"
        :class="isDark ? 'bg-sky-500' : 'bg-sky-300'"
      ></div>
    </div>

    <div class="relative">
      <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />

      <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <section id="home" class="pt-16 sm:pt-24 lg:pt-28">
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
