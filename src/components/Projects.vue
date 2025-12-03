<script setup>
const projects = [
  {
    title: 'Sneakers Store Landing Page',
    description:
      'Landing page bertema toko sneakers dengan desain modern dan layout responsif. Fokus pada tampilan produk dan experience pengguna.',
    stack: ['Vue.js', 'Tailwind CSS'],
    linkDemo: '#',
    linkCode: '#',
  },
]
</script>

<template>
  <section>
    <h2 class="text-lg sm:text-xl font-semibold tracking-tight mb-4">
      Projects
    </h2>

    <div class="space-y-4">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group rounded-3xl border px-5 py-5 sm:px-6 sm:py-6 shadow-soft backdrop-blur transition-all duration-300
               bg-white/80 border-black/10 text-slate-800
               hover:-translate-y-0.5 hover:shadow-lg
               dark:bg-surface/80 dark:border-white/10 dark:text-slate-100 dark:hover:border-accent/60"
      >
        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="text-sm sm:text-base font-semibold">
            {{ project.title }}
          </h3>
          <span
            class="text-[10px] rounded-full border px-2 py-1
                   bg-slate-100 border-black/10 text-slate-700
                   dark:bg-white/5 dark:border-white/10 dark:text-slate-200"
          >
            {{ project.stack.join(' • ') }}
          </span>
        </div>
        <p class="text-xs sm:text-sm mb-3">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-3 text-[11px]">
          <span class="text-slate-600 dark:text-slate-300">
            (Link demo & kode bisa ditambahkan nanti)
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
