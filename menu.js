const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

/* MENU PRINCIPAL (MOBILE) */
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');

  // si on ferme le menu principal, on ferme aussi Guides
  if (!nav.classList.contains('open')) {
    submenu.classList.remove('open');
  }
});

/* GUIDES (MOBILE + PC) */
submenuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  submenu.classList.toggle('open');
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
