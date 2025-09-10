 const scene = document.getElementById('scene');
const orbit = document.querySelector('.orbit');
let isDragging = false;
let lastX, lastY;
let rotateX = 0, rotateY = 0;

// -------------------
// Mouse Events
// -------------------
function startDrag(e) {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  scene.style.cursor = 'grabbing';
  orbit.classList.add('paused'); // pause auto-rotation
}

function stopDrag() {
  isDragging = false;
  scene.style.cursor = 'grab';
  orbit.classList.remove('paused'); // resume auto-rotation
}

function dragScene(e) {
  if (!isDragging) return;

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;

  rotateY += dx * 0.3;
  rotateX -= dy * 0.3;

   // Clamp X rotation between -90 and 90 degrees
    if (rotateX < -90) {
      rotateX = -90;
    } else if (rotateX > 0) {
      rotateX = 0;
    }

  scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// -------------------
// Touch Events
// -------------------
function startTouch(e) {
  isDragging = true;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
  orbit.classList.add('paused'); // pause auto-rotation
}

function stopTouch() {
  isDragging = false;
  orbit.classList.remove('paused'); // resume auto-rotation
}

function moveTouch(e) {
  if (!isDragging) return;
  e.preventDefault(); // prevent page scroll

  const dx = e.touches[0].clientX - lastX;
  const dy = e.touches[0].clientY - lastY;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;

  rotateY += dx * 0.3;
  rotateX -= dy * 0.3;

  // Clamp X rotation between -90 and 90 degrees
    if (rotateX < -90) {
      rotateX = -90;
    } else if (rotateX > 0) {
      rotateX = 0;
    }

  scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
const cards = document.querySelectorAll('.card');
const total = cards.length;

let radius;
if (window.innerWidth < 480) {
  radius = 200;
} else if (window.innerWidth < 768) {
  radius = 300;
} else {
  radius = 400;
}
function startef(){
document.getElementById("sta").style.opacity=1;
// spread
cards.forEach((card, index) => {
  const angle = (360 / total) * index;
  const finalTransform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  card.style.setProperty("--final-transform", finalTransform);
  card.style.animation = `spread 1s forwards`;
  card.style.animationDelay = `${index * 0.2}s`;
});

// after spread → orbit
setTimeout(() => {
  document.querySelector('.orbit').classList.add('rotate');
 document.querySelector('.center-text').style.opacity=1;
}, total * 200 + 100);
}
function msg() {
  // Show custom message box
  document.getElementById("msgBox").style.display = "flex";
}

function closeMsg() {
  // Hide message box
  document.getElementById("msgBox").style.display = "none";
  
  // Continue the same flow as before
  playAudioWithFadeIn();
  startef();
}

const audio = document.getElementById("au1");
let fadeTimer= null;

function playAudioWithFadeIn() {
    audio.volume = 0;
    audio.loop = false; // we’ll loop manually to control fade in/out
    audio.play();
    fadeInAudio();

    audio.ontimeupdate = () => {
        if (audio.duration && audio.currentTime >= audio.duration - 1.5) {
            fadeOutAudio(() => {
                audio.currentTime = 0; 
                audio.play();   // restart after fade-out
                fadeInAudio();  // fade in again at start of next loop
            });
        }
    };
}

function fadeInAudio() {
    clearInterval(fadeTimer);
    fadeTimer = setInterval(() => {
        if (audio.volume < 0.1) {
            audio.volume = Math.min(audio.volume + 0.05, 0.1);
        } else {
            clearInterval(fadeTimer);
        }
    }, 200); // ~4s fade-in
}

function fadeOutAudio(callback) {
    clearInterval(fadeTimer);
    fadeTimer = setInterval(() => {
        if (audio.volume > 0) {
            audio.volume = Math.max(audio.volume - 0.05, 0);
        } else {
            clearInterval(fadeTimer);
            if (callback) callback();
        }
    }, 200); // ~4s fade-out
}
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        audio.pause();
    }
});