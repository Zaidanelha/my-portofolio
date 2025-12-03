<template>
  <footer class="border-t bg-white/90 border-black/5 dark:bg-background/90 dark:border-white/5">
    <div
      class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-4
             flex flex-col sm:flex-row items-center justify-between gap-2
             text-[11px] text-slate-600 dark:text-slate-500"
    >
      <p>
        © {{ new Date().getFullYear() }} Muhammad Zaidan Elha Rasyad. All rights reserved.
      </p>
      <p class="text-center sm:text-right">
        Built with
        <span class="text-slate-800 dark:text-slate-300">Vue.js</span>
        &amp;
        <span class="text-slate-800 dark:text-slate-300">Tailwind CSS</span>.
      </p>
    </div>
  </footer>
</template>
