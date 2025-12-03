<script setup>
const name = 'Your Name'
const role = 'Frontend Developer'
const shortBio =
  'Saya fokus pada pembuatan website modern, responsif, dan elegan menggunakan Vue.js, Tailwind CSS, dan teknologi web terbaru.'
</script>

<template>
  <section class="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
    <div>
      <p class="text-xs font-medium uppercase tracking-[0.25em] text-slate-400 mb-4">
        Portfolio • 2025
      </p>

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
        Hi, I’m
        <span
          class="bg-gradient-to-r from-purple-400 via-sky-400 to-purple-400 bg-clip-text text-transparent"
        >
          {{ name }}
        </span>
        .
        <br />
        <span class="text-slate-200">
          {{ role }}.
        </span>
      </h1>

      <p class="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-6">
        {{ shortBio }}
      </p>

      <div class="flex flex-wrap items-center gap-3 mb-5">
        <a
          href="#projects"
          class="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white shadow-soft hover:brightness-110 transition"
        >
          Lihat Project
        </a>
        <a
          href="#contact"
          class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold text-slate-100 hover:border-accent/60 hover:bg-accent/10 transition"
        >
          Contact Me
        </a>
      </div>

      <div class="flex flex-wrap gap-3 text-[11px] text-slate-400">
        <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          Vue.js
        </span>
        <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          Tailwind CSS
        </span>
        <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          Responsive Design
        </span>
      </div>
    </div>

    <div class="relative">
      <div
        class="mx-auto h-48 w-48 sm:h-56 sm:w-56 rounded-3xl bg-gradient-to-tr from-purple-500 via-slate-900 to-sky-500 p-[2px] shadow-soft"
      >
        <div class="h-full w-full rounded-3xl bg-slate-950/90 flex items-center justify-center">
          <span class="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100">
            Y
          </span>
        </div>
      </div>
      <div class="mt-4 text-center text-xs text-slate-400">
        (Nanti bisa diganti foto profil kamu)
      </div>
    </div>
  </section>
</template>
