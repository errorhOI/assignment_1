const confettiContainer = document.querySelector('#confetti-container');
const balloonContainer = document.querySelector('#balloon-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  balloon.style.left = `${Math.random() * 100}%`;
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 5000);
}

function startConfetti() {
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      createConfetti();
    }
  }, 300);
}

function startBalloons() {
  const balloonInterval = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createBalloon();
    }
  }, 500);

  setTimeout(() => {
    clearInterval(balloonInterval);
  }, 5000);
}

window.onload = () => {
  startConfetti();
  startBalloons();
};


