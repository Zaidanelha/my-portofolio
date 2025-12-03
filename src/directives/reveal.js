// src/directives/reveal.js
export default {
  mounted(el) {
    // posisi awal (sembunyi dikit ke bawah)
    el.classList.add(
      'opacity-0',
      'translate-y-6',
      'transition-all',
      'duration-700',
      'ease-out'
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-6')
          el.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
  },
}
