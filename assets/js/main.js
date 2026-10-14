/* =====================================================================
   main.js — progressive enhancements (the page works without it)
   Loaded with <script src="assets/js/main.js" defer></script> in <head>.
   ===================================================================== */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Frosted nav — more opaque + shadow once the page is scrolled */
  const nav = document.querySelector('.nav');
  if (nav) {
    const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* 2. Skill badges — "Python, PyTorch, …" text → <ul class="badges">.
        A term before a colon ("scikit-learn: regression, …") becomes a
        highlighted .badge--key. Commas inside parentheses are kept. */
  const toBadgeList = (text) => {
    const ul = document.createElement('ul');
    ul.className = 'badges';
    text.split(/,(?![^()]*\))/).forEach((item) => {
      const parts = item.split(/\s*:\s+/);           // "X: y" and French "X : y"
      parts.forEach((part, i) => {
        const label = part.trim();
        if (!label) return;
        const li = document.createElement('li');
        li.className = i < parts.length - 1 ? 'badge badge--key' : 'badge';
        li.textContent = label;
        ul.append(li);
      });
    });
    return ul;
  };

  document.querySelectorAll('p.stack').forEach((p) => p.replaceWith(toBadgeList(p.textContent)));
  document.querySelectorAll('.skills dd').forEach((dd) => dd.replaceChildren(toBadgeList(dd.textContent)));

  /* 3. Entrance animation — fade/slide content in as it scrolls into view.
        Items entering together are staggered by 90ms. */
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    'main .sec > h2, .entry, .skills > div, .pair > div, .more, .contact .wrap'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, i) => {
        entry.target.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 90}ms`);
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
})();
