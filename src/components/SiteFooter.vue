<template>
  <footer class="border-t border-white/5 bg-background/90">
    <div
      class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500"
    >
      <p>
        © {{ new Date().getFullYear() }} Your Name. All rights reserved.
      </p>
      <p>
        Built with <span class="text-slate-300">Vue.js</span> &amp;
        <span class="text-slate-300">Tailwind CSS</span>.
      </p>
    </div>
  </footer>
</template>
