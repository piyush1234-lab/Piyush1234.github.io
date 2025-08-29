// birthday.js
window.addEventListener("load", function () {
  // Allow only if logged in
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.replace("index.html");
    return;
  }

  // Back button lock
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    localStorage.removeItem("isLoggedIn");
    window.location.replace("index.html");
  };
});
// -------------------------
// Fireworks + Gift Animation
// -------------------------
const lid = document.getElementById('lid');
const giftBox = document.getElementById('giftBox');
const btn1 = document.getElementById('btn1');
const fireworksContainer = document.getElementById('fireworks-container');

function launchFirework() {
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const launch = document.createElement('div');

  launch.style.left = `${startX}px`;
  fireworksContainer.appendChild(launch);

  setTimeout(() => {
    launch.remove();
    explodeAt(startX, startY);
  }, 1000);
}

function explodeAt(x, y) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('firework-particle');

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 100;
    const dx = Math.cos(angle) * radius;
    const dy = Math.sin(angle) * radius;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty('--x', `${dx}px`);
    particle.style.setProperty('--y', `${dy}px`);
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.boxShadow = `0 0 8px currentColor`;

    fireworksContainer.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

function fire() {
  giftBox.classList.add('shake');

  setTimeout(() => {
    giftBox.classList.remove('shake');
    lid.classList.add('open');

    // Show text
    const txt = document.querySelector('.txt');
    txt.style.display = 'flex';
    void txt.offsetWidth; // reflow to trigger animation
    txt.style.animation = 'zoomIn 1s ease forwards';

    // Scale up
    document.querySelector('.txt1').style.transform = 'scale(1)';
    document.getElementById('btn2').style.transform = 'scale(1)';
  }, 600);

  const gift = document.querySelector(".cake-container");
  setTimeout(() => {
    gift.style.animation = "fadeout 2s forwards";
    btn1.style.animation = "fadeout 1s ease forwards";
  }, 1000);

  setInterval(launchFirework, 500);
}

function select(btn) {
  btn.style.backgroundColor = "cyan";
  btn.style.color = "black";
}
function deselect(btn) {
  btn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  btn.style.color = "white";
}