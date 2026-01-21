
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


/* ================= CARROUSEL SAFE ================= */
(function () {
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const slides = document.querySelectorAll('.slide');

  if (!prev || !next || !slides.length) return;

  let dots;
  let currentSlide = 1;

  function slideTo(index) {
    currentSlide = index >= slides.length || index < 1 ? 0 : index;

    slides.forEach(slide =>
      slide.style.transform = `translateX(-${currentSlide * 100}%)`
    );

    dots.forEach((dot, key) =>
      dot.className = `dot ${key === currentSlide ? 'active' : 'inactive'}`
    );
  }

  const dotsContainer = document.querySelector('.carousel-dots');
  if (!dotsContainer) return;

  for (let i = 1; i <= slides.length; i++) {
    dotsContainer.innerHTML +=
      `<span class="dot ${i === currentSlide ? 'active' : 'inactive'}"></span>`;
  }

  dots = document.querySelectorAll('.dot');

  dots.forEach((dot, key) =>
    dot.addEventListener('click', () => slideTo(key))
  );

  prev.addEventListener('click', () => slideTo(--currentSlide));
  next.addEventListener('click', () => slideTo(++currentSlide));
})();


