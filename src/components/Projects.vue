<script setup>
const projects = [
  {
    title: 'Landing Page Sneakers',
    description:
      'Halaman produk sepatu dengan desain modern, animasi halus, dan layout responsif.',
    stack: ['Vue.js', 'Tailwind CSS'],
    linkDemo: '#',
    linkCode: '#',
  },
  {
    title: 'Dashboard Penjualan',
    description:
      'Dashboard sederhana untuk menampilkan data penjualan dengan chart interaktif.',
    stack: ['Vue.js', 'Chart.js'],
    linkDemo: '#',
    linkCode: '#',
  },
]
</script>

<template>
  <section>
    <h2 class="text-lg sm:text-xl font-semibold tracking-tight text-white mb-4">
      Projects
    </h2>

    <div class="space-y-4">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group rounded-3xl border border-white/10 bg-surface/80 px-5 py-5 sm:px-6 sm:py-6 shadow-soft backdrop-blur transition hover:border-accent/60 hover:-translate-y-0.5"
      >
        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="text-sm sm:text-base font-semibold text-slate-50">
            {{ project.title }}
          </h3>
          <span
            class="text-[10px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300"
          >
            {{ project.stack.join(' • ') }}
          </span>
        </div>
        <p class="text-xs sm:text-sm text-slate-300 mb-3">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-3 text-[11px]">
          <a
            v-if="project.linkDemo !== '#'"
            :href="project.linkDemo"
            target="_blank"
            class="text-slate-200 underline-offset-4 hover:underline"
          >
            Live Demo
          </a>
          <a
            v-if="project.linkCode !== '#'"
            :href="project.linkCode"
            target="_blank"
            class="text-slate-400 underline-offset-4 hover:underline"
          >
            View Code
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
