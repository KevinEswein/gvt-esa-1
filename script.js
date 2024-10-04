const img = document.getElementById('rotating-disc');
const frames = 24; // Anzahl der Einzelbilder (0°, 15°, ..., 345°)
let currentFrame = 0;
let isAnimating = false;
let animationInterval;

function updateImage() {
  img.src = `data/disc_${currentFrame * 15}.png`;
}

function rotateLeft() {
  currentFrame = (currentFrame - 1 + frames) % frames;
  updateImage();
}

function rotateRight() {
  currentFrame = (currentFrame + 1) % frames;
  updateImage();
}

function toggleAnimation() {
  if (isAnimating) {
    clearInterval(animationInterval);
  } else {
    animationInterval = setInterval(rotateRight, 100);
  }
  isAnimating = !isAnimating;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'L' || event.key === 'l') {
    rotateLeft();
  } else if (event.key === 'R' || event.key === 'r') {
    rotateRight();
  } else if (event.key === 'A' || event.key === 'a') {
    toggleAnimation();
  }
});
