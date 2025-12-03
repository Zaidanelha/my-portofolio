<template>
  <section>
    <h2 class="text-lg sm:text-xl font-semibold tracking-tight text-white mb-4">
      Contact
    </h2>

    <div class="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <!-- Form -->
      <div
        class="rounded-3xl border border-white/10 bg-surface/80 px-5 py-5 sm:px-6 sm:py-6 shadow-soft backdrop-blur"
      >
        <p class="text-sm text-slate-300 mb-4">
          Tertarik bekerja sama, atau ingin sekadar say hi? Silakan kirim pesan
          melalui email atau salah satu sosial media di samping.
        </p>

        <form class="space-y-3">
          <div>
            <label class="block text-xs text-slate-400 mb-1">Nama</label>
            <input
              type="text"
              class="w-full rounded-xl border border-white/10 bg-background/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-accent/60"
              placeholder="Masukkan nama kamu"
            />
          </div>
          <div>
            <label class="block text-xs text-slate-400 mb-1">Email</label>
            <input
              type="email"
              class="w-full rounded-xl border border-white/10 bg-background/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-accent/60"
              placeholder="email@contoh.com"
            />
          </div>
          <div>
            <label class="block text-xs text-slate-400 mb-1">Pesan</label>
            <textarea
              rows="4"
              class="w-full rounded-xl border border-white/10 bg-background/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-accent/60 resize-none"
              placeholder="Tulis pesan kamu di sini..."
            ></textarea>
          </div>

          <button
            type="button"
            class="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white shadow-soft hover:brightness-110 transition"
          >
            Kirim Pesan
          </button>

          <p class="text-[11px] text-slate-500">
            (Form ini belum terhubung ke backend — nanti bisa kita setup bersama.)
          </p>
        </form>
      </div>

      <!-- Info kontak -->
      <div
        class="rounded-3xl border border-white/10 bg-surface/80 px-5 py-5 sm:px-6 sm:py-6 shadow-soft backdrop-blur"
      >
        <h3 class="text-sm font-semibold text-slate-50 mb-3">
          Detail Kontak
        </h3>
        <ul class="space-y-2 text-xs text-slate-300">
          <li>
            <span class="font-medium text-slate-200">Email:</span>
            <span class="ml-2">your.email@example.com</span>
          </li>
          <li>
            <span class="font-medium text-slate-200">GitHub:</span>
            <span class="ml-2">@yourgithub</span>
          </li>
          <li>
            <span class="font-medium text-slate-200">LinkedIn:</span>
            <span class="ml-2">/in/your-linkedin</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
