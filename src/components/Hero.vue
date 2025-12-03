<script setup>
const name = 'Muhammad Zaidan Elha Rasyad'
const role = 'Frontend • Backend • UI/UX Beginner'
const shortBio =
  'Saya adalah developer pemula yang sedang belajar membuat website modern, responsif, dan nyaman digunakan. Saat ini saya fokus memperdalam frontend, backend, dan dasar-dasar UI/UX.'
</script>

<template>
  <section
    class="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center text-slate-900 dark:text-slate-100"
  >
    <div>
      <p
        class="text-xs font-medium uppercase tracking-[0.25em] mb-4 text-slate-500 dark:text-slate-400"
      >
        Portfolio • 2025
      </p>

      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white"
      >
        Hi, I’m
        <span
          class="bg-gradient-to-r from-purple-500 via-sky-500 to-purple-500 bg-clip-text text-transparent"
        >
          {{ name }}
        </span>
        .
        <br />
        <span class="text-slate-800 dark:text-slate-200">
          {{ role }}
        </span>
      </h1>

      <p class="text-sm sm:text-base max-w-xl leading-relaxed mb-6 text-slate-600 dark:text-slate-300">
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
          class="inline-flex items-center rounded-full border px-5 py-2 text-xs font-semibold transition
                 border-slate-300 bg-white/80 text-slate-800 hover:bg-slate-100
                 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-accent/10"
        >
          Contact Me
        </a>
      </div>

      <div class="flex flex-wrap gap-3 text-[11px]">
        <span
          class="rounded-full border px-3 py-1
                 bg-slate-100 border-slate-300 text-slate-700
                 dark:bg-white/5 dark:border-white/10 dark:text-slate-200"
        >
          HTML • CSS • JS
        </span>
        <span
          class="rounded-full border px-3 py-1
                 bg-slate-100 border-slate-300 text-slate-700
                 dark:bg-white/5 dark:border-white/10 dark:text-slate-200"
        >
          Vue.js &amp; Tailwind
        </span>
        <span
          class="rounded-full border px-3 py-1
                 bg-slate-100 border-slate-300 text-slate-700
                 dark:bg-white/5 dark:border-white/10 dark:text-slate-200"
        >
          UI/UX Beginner
        </span>
      </div>
    </div>

    <div class="relative">
      <div
        class="mx-auto h-48 w-48 sm:h-56 sm:w-56 rounded-3xl p-[2px] shadow-soft
               bg-gradient-to-tr from-purple-500 via-slate-900 to-sky-500"
      >
        <div
          class="h-full w-full rounded-3xl flex items-center justify-center
                 bg-slate-900/95 dark:bg-slate-950/90"
        >
          <span class="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100">
            Z
          </span>
        </div>
      </div>
      <div class="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
        (Nanti bisa diganti foto profil kamu)
      </div>
    </div>
  </section>
</template>
