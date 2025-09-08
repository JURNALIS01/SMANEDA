 document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.konter1');

  function animateCounter(konter, step = 1, duration = 2000) {
    let start = 0;
    const target = +konter.getAttribute('data-target');
    const stepTime = Math.max(Math.floor(duration / (target / step)), 10);
    konter.textContent = 0;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      konter.textContent = start;
    }, stepTime);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, 1, 2000); // step & durasi khusus counter1
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(konter => observer.observe(konter));
});