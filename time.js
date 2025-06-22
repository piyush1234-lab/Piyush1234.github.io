const birthdayMonth = 8; // August (0-based, so Jan = 0)
const birthdayDate = 11;
const openHour = 0;
const closeHour = 23;

const mainContent = document.getElementById("main-content");
const waitScreen = document.getElementById("wait-screen");
const closedScreen = document.getElementById("closed-screen");
const countdown = document.getElementById("countdown");

function updatePage() {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Create start and end time of birthday this year
  const start = new Date(currentYear, birthdayMonth, birthdayDate, openHour);
  const end = new Date(currentYear, birthdayMonth, birthdayDate, closeHour, 59, 59, 999);

  // Check if today is birthday
  const isTodayBirthday = now.toDateString() === start.toDateString();

  if (isTodayBirthday) {
    if (now >= start && now < end) {
      window.location.href= "card.html"
    } else if (now < start) {
      show(waitScreen);
      showCountdown(start - now);
    } else {
      show(closedScreen);
    }
  } else {
    // Not birthday today – calculate next birthday
    let next = new Date(currentYear, birthdayMonth, birthdayDate, openHour);
    if (now > next) next.setFullYear(currentYear + 1);

    show(waitScreen);
    countdown.textContent = "Opening in:";
    showCountdown(next - now);
  }

  setTimeout(updatePage, 1000); // update every second
}

function showCountdown(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdown.textContent = `Opening in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function show(elementToShow) {
  // Show selected
  elementToShow.style.display = "block";
}

updatePage();