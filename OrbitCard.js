  const scene = document.getElementById('scene');
  let isDragging = false;
  let lastX, lastY;
  let rotateX = 0, rotateY = 0;

  // Mouse Events
  function startDrag(e) {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    scene.style.cursor = 'grabbing';
  }

  function stopDrag() {
    isDragging = false;
    scene.style.cursor = 'grab';
  }

  function dragScene(e) {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;

    lastX = e.clientX;
    lastY = e.clientY;

    rotateY = rotateY + (dx * 0.3);
    rotateX = rotateX - (dy * 0.3);

    // Clamp X rotation between -90 and 90 degrees
    if (rotateX < -90) {
      rotateX = -90;
    } else if (rotateX > 0) {
      rotateX = 0;
    }

    scene.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
  }

  // Touch Events
  function startTouch(e) {
    isDragging = true;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
  }

  function stopTouch() {
    isDragging = false;
  }

  function moveTouch(e) {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - lastX;
    const dy = e.touches[0].clientY - lastY;

    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;

    rotateY = rotateY + (dx * 0.3);
    rotateX = rotateX - (dy * 0.3);

    // Clamp X rotation between -60 and 60 for smoother mobile control
    if (rotateX < -90) {
      rotateX = -90;
    } else if (rotateX > 0) {
      rotateX = 0;
    }

    scene.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
  }
  const orbit = document.querySelector('.orbit');

// Mouse Events
function startDrag(e) {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  scene.style.cursor = 'grabbing';
  orbit.classList.add('paused'); // Pause rotation
}

function stopDrag() {
  isDragging = false;
  scene.style.cursor = 'grab';
  orbit.classList.remove('paused'); // Resume rotation
}

// Touch Events
function startTouch(e) {
  isDragging = true;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
  orbit.classList.add('paused'); // Pause rotation
}

function stopTouch() {
  isDragging = false;
  orbit.classList.remove('paused'); // Resume rotation
}
