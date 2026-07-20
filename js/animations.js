/**
 * Reveal-on-scroll: toggles .is-visible on elements marked [data-animate]
 * once they enter the viewport. Pairs with css/animations.css.
 */
(function () {
  'use strict';

  function initRevealOnScroll() {
    var targets = document.querySelectorAll('[data-animate]');

    if (!targets.length || !('IntersectionObserver' in window)) {
      targets.forEach(function (target) {
        target.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach(function (target) {
      observer.observe(target);
    });
  }

  window.App.registerModule(initRevealOnScroll);
})();
