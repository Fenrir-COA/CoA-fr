const raidCards = document.querySelectorAll('.raid-card');
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoFrame');
const closeBtn = document.querySelector('.video-close');

raidCards.forEach(card => {
  card.addEventListener('click', () => {
    const videoUrl = card.dataset.video;
    iframe.src = videoUrl + '?autoplay=1';
    modal.classList.add('open');
  });
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove('open');
  iframe.src = '';
}
