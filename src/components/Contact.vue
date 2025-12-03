<template>
  <section>
    <h2 class="text-lg sm:text-xl font-semibold tracking-tight mb-4">
      Contact
    </h2>

    <div class="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <!-- Form -->
      <div
        class="rounded-3xl border px-5 py-5 sm:px-6 sm:py-6 shadow-soft backdrop-blur
               bg-white/80 border-black/10 text-slate-800
               dark:bg-surface/80 dark:border-white/10 dark:text-slate-100
               transition-colors duration-500"
      >
        <p class="text-sm mb-4">
          Saya masih dalam proses belajar, tapi sangat terbuka untuk saran, masukan, atau
          kesempatan kolaborasi. Silakan tinggalkan pesan melalui form ini.
        </p>

        <form class="space-y-3">
          <div>
            <label class="block text-xs mb-1 text-slate-600 dark:text-slate-400">Nama</label>
            <input
              type="text"
              class="w-full rounded-xl border px-3 py-2 text-xs outline-none transition-colors
                     border-black/10 bg-slate-50 text-slate-900
                     focus:border-accent/60
                     dark:border-white/10 dark:bg-background/70 dark:text-slate-100"
              placeholder="Masukkan nama kamu"
            />
          </div>
          <div>
            <label class="block text-xs mb-1 text-slate-600 dark:text-slate-400">Email</label>
            <input
              type="email"
              class="w-full rounded-xl border px-3 py-2 text-xs outline-none transition-colors
                     border-black/10 bg-slate-50 text-slate-900
                     focus:border-accent/60
                     dark:border-white/10 dark:bg-background/70 dark:text-slate-100"
              placeholder="email@contoh.com"
            />
          </div>
          <div>
            <label class="block text-xs mb-1 text-slate-600 dark:text-slate-400">Pesan</label>
            <textarea
              rows="4"
              class="w-full rounded-xl border px-3 py-2 text-xs outline-none resize-none transition-colors
                     border-black/10 bg-slate-50 text-slate-900
                     focus:border-accent/60
                     dark:border-white/10 dark:bg-background/70 dark:text-slate-100"
              placeholder="Tulis pesan kamu di sini..."
            ></textarea>
          </div>

          <button
            type="button"
            class="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white shadow-soft hover:brightness-110 transition"
          >
            Kirim Pesan
          </button>

          <p class="text-[11px] text-slate-500 dark:text-slate-400">
            (Form ini belum terhubung ke backend — nanti bisa disambungkan ke email atau database.)
          </p>
        </form>
      </div>

      <!-- Info kontak -->
      <div
        class="rounded-3xl border px-5 py-5 sm:px-6 sm:py-6 shadow-soft backdrop-blur
               bg-white/80 border-black/10 text-slate-800
               dark:bg-surface/80 dark:border-white/10 dark:text-slate-100
               transition-colors duration-500"
      >
        <h3 class="text-sm font-semibold mb-3">
          Detail Kontak
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">
          Untuk saat ini saya belum menampilkan sosial media atau email pribadi di sini.
          Namun bagian ini bisa dengan mudah diperbarui ketika dibutuhkan.
        </p>

        <ul class="space-y-1 text-xs text-slate-500 dark:text-slate-400">
          <li>• Email & sosial media bisa ditambahkan nanti.</li>
          <li>• Bagian ini bisa diisi info lain, seperti kota atau status belajar.</li>
        </ul>
      </div>
    </div>
  </section>
</template>
