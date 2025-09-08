const typewriter = document.getElementById("typewriter");
const text = typewriter.innerHTML;  // Save the full original text (with <br>)
typewriter.innerHTML = "";          // Clear it to start typing

const speed = 50; // typing speed (ms per character)
let i = 0;        // current character position
let currentText = ''; // text typed so far

function type() {
  if (i < text.length) {
    let char = text.charAt(i);  // get current character
    currentText += char; // add this character to output

    typewriter.innerHTML = currentText; // update what's shown on screen

    i++; // move to next character let delay;
setTimeout(type, speed);
    // Delay only if NOT inside a tag
    } else {
    // After all typing is done, show the button
    document.getElementById("btn2").style.animation = "fade 1s linear forwards";
  }
}

document.getElementById("btn1").addEventListener("click", () => {
  setTimeout(type, 1000)
}); // Start typing effect


function graph() {
  const container = document.getElementById("sprinkle-container");
  for (let i = 0; i < 15; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");
    p.innerText = "🎈";
     p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 2 + Math.random() * 3 + "s";
        p.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(p);
  }
}
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
const container = document.getElementById("sprinkle-container");

// Set up the transition
container.style.transition = "opacity 0.8s ease";

// Trigger fade-out
container.style.opacity = 0;

// Clear the container AFTER the transition completes
setTimeout(() => {
  container.innerHTML = "";
}, 800); // match the transition duration  giftBox.classList.add('shake');

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

const audio = document.getElementById("au1");

function playAudioWithFadeIn() {
    audio.volume = 0; 
    audio.play();
    fadeInAudio();

    // Fade out 4s before the audio ends
    audio.ontimeupdate = () => {
        if (audio.duration && audio.currentTime >= audio.duration - 1.5) {
            fadeOutAudio(() => {
                audio.pause();
                audio.currentTime = 0; // reset if you want it to replay
            });
        }
    };
}

function fadeInAudio() {
    let fadeIn = setInterval(() => {
        if (audio.volume < .1) {
            audio.volume = Math.min(audio.volume + 0.05, .1);
        } else {
            clearInterval(fadeIn);
        }
    }, 200); // ~4s fade-in
}

function fadeOutAudio(callback) {
    let fadeOut = setInterval(() => {
        if (audio.volume > 0) {
            audio.volume = Math.max(audio.volume - 0.05, 0);
        } else {
            clearInterval(fadeOut);
            audio.volume = 0;
            if (callback) callback();
        }
    }, 200); // ~4s fade-out
}


document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        audio.pause();
    }
});
