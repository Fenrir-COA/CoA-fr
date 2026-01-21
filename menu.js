
document.addEventListener('DOMContentLoaded', () => {

  /* ================= MENU PRINCIPAL ================= */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      nav.querySelectorAll('.submenu').forEach(sub =>
        sub.classList.remove('open')
      );
    });
  }

  document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
     const li = btn.closest('li');
     const submenu = li ? li.querySelector('.submenu') : null;
     if (submenu) submenu.classList.toggle('open');
    });
  });

  /* ================= TABLES ================= */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-table');
    if (!btn) return;

    const thead = btn.closest('thead');
    const tbody = thead ? thead.nextElementSibling : null;


    if (!tbody || !tbody.classList.contains('category-body')) return;

    tbody.classList.toggle('open');
    btn.textContent = tbody.classList.contains('open') ? '−' : '+';
  });

  /* ================= CARROUSEL ================= */
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!prev || !next || !slides.length || !dotsContainer) return;

  let currentSlide = 1;

  function slideTo(index) {
    currentSlide = index >= slides.length || index < 0 ? 0 : index;

    slides.forEach(slide =>
      slide.style.transform = `translateX(-${currentSlide * 100}%)`
    );

    document.querySelectorAll('.dot').forEach((dot, key) => {
      dot.classList.toggle('active', key === currentSlide);
      dot.classList.toggle('inactive', key !== currentSlide);
    });
  }

  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `dot ${i === currentSlide ? 'active' : 'inactive'}`;
    dot.addEventListener('click', () => slideTo(i));
    dotsContainer.appendChild(dot);
  });

  prev.addEventListener('click', () => slideTo(--currentSlide));
  next.addEventListener('click', () => slideTo(++currentSlide));

});
