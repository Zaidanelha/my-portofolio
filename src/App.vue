<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-slate-100">
    <!-- Glow background -->
    <div class="pointer-events-none fixed inset-0 opacity-60">
      <div class="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-purple-600 blur-3xl mix-blend-soft-light"></div>
      <div class="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-sky-500 blur-3xl mix-blend-soft-light"></div>
    </div>

    <div class="relative">
      <Navbar />

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
