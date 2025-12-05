<script setup>
const projects = [
  {
    title: 'Sneakers Store Landing Page',
    description:
      'Landing page bertema toko sneakers dengan desain modern, fokus pada tampilan produk dan layout yang responsif di berbagai ukuran layar.',
    stack: ['Vue.js', 'Tailwind CSS'],
    role: 'Frontend',
  },
  {
    title: 'Simple Portfolio Website',
    description:
      'Website portofolio pribadi untuk menampilkan informasi diri, skill, dan project. Dibuat sebagai latihan dasar Vue.js dan Tailwind CSS.',
    stack: ['Vue.js', 'Tailwind CSS'],
    role: 'Fullstack (basic)',
  },
]
</script>

<template>
  <section>
    <header class="mb-5">
      <p
        class="text-[11px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-1"
      >
        Projects
      </p>
      <h2
        class="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent"
      >
        Selected Work
      </h2>
    </header>

    <div class="space-y-4">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group rounded-3xl border px-5 py-5 sm:px-7 sm:py-6
               bg-white/80 border-white/60 shadow-soft backdrop-blur-xl
               dark:bg-surface/80 dark:border-white/10
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-xl hover:border-accent/70"
      >
        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-50">
            {{ project.title }}
          </h3>
          <span
            class="text-[10px] rounded-full border px-2 py-1 whitespace-nowrap
                   bg-slate-100/70 border-slate-200 text-slate-700
                   dark:bg-white/5 dark:border-white/10 dark:text-slate-200"
          >
            {{ project.role }}
          </span>
        </div>

        <p class="text-xs sm:text-sm mb-3 text-slate-700 dark:text-slate-200">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap items-center gap-2 text-[11px]">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="rounded-full border px-3 py-1
                   bg-slate-100/70 border-slate-200 text-slate-700
                   dark:bg-white/5 dark:border-white/10 dark:text-slate-200"
          >
            {{ tech }}
          </span>
          <span class="text-slate-500 dark:text-slate-400">
            (Detail & link bisa ditambahkan nanti)
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
