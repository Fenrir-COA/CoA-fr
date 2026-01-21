document.addEventListener('DOMContentLoaded', () => {

  /* ================= MENU PRINCIPAL ================= */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      nav.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('open'));
    });
  }

  document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const submenu = btn.parentElement.querySelector('.submenu');
      if (submenu) submenu.classList.toggle('open');
    });
  });

 /* ================= TABLES GRAVURES (PROD SAFE) ================= */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.toggle-table');
  if (!btn) return;

  const thead = btn.closest('thead');
  if (!thead) return;

  const tbody = thead.nextElementSibling;
  if (!tbody || !tbody.classList.contains('category-body')) return;

  tbody.classList.toggle('open');
  btn.textContent = tbody.classList.contains('open') ? '−' : '+';
});


});



/*---------------------testcarousel-------------------*/


(function () {
  "use strict";

  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const $slides = document.querySelectorAll('.slide');
  let $dots;
  let currentSlide = 1;

  function slideTo(index) {
    currentSlide = index >= $slides.length || index < 1 ? 0 : index;

    $slides.forEach($elt =>
      $elt.style.transform = `translateX(-${currentSlide * 100}%)`
    );

    $dots.forEach(($elt, key) =>
      $elt.classList = `dot ${key === currentSlide ? 'active' : 'inactive'}`
    );
  }

  /* Création des dots */
  for (let i = 1; i <= $slides.length; i++) {
    let dotClass = i == currentSlide ? 'active' : 'inactive';
    document.querySelector('.carousel-dots').innerHTML +=
      `<span class="dot ${dotClass}"></span>`;
  }

  $dots = document.querySelectorAll('.dot');

  $dots.forEach(($elt, key) =>
    $elt.addEventListener('click', () => slideTo(key))
  );

  prev.addEventListener('click', () => slideTo(--currentSlide));
  next.addEventListener('click', () => slideTo(++currentSlide));

  /* Swipe tactile conservé */
  $slides.forEach($elt => {
    let startX;

    $elt.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    $elt.addEventListener('touchend', e => {
      let endX = e.changedTouches[0].clientX;
      if (startX > endX) slideTo(currentSlide + 1);
      else if (startX < endX) slideTo(currentSlide - 1);
    });
  });
})();


