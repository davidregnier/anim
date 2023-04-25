const card = document.querySelector('.scratch-card');
const overlay = card.querySelector('.scratch-card-overlay');
let isScratching = false;

function scratchCard(e) {
  if (isScratching) {
    e.preventDefault();
    overlay.style.opacity = 1;
    overlay.style.transition = 'none';
  }
}

function startScratching(e) {
  isScratching = true;
  scratchCard(e);
}

function stopScratching() {
  isScratching = false;
  overlay.style.transition = 'opacity 1s ease-in-out';
  overlay.style.opacity = 0;
}

card.addEventListener('mousedown', startScratching);
card.addEventListener('mousemove', scratchCard);
card.addEventListener('mouseup', stopScratching);
