// -------------------------
// Name Check for Input
// -------------------------
function check() {
    let in2 = document.getElementById("in2");
    let span2 = document.getElementById("spn");

    let validNames = [
        "Sneha Singh",
        "Sneha", 
        "sneha singh", 
        "sneha",
        "Sneha singh", 
        "sneha Singh", 
        "Uday"
    ];

    let trimmedName = in2.value.trim();

    if (validNames.includes(trimmedName)) {
        span2.style.visibility = "visible";
        span2.style.animation = "fadein 1s forwards";
    } else {
        span2.style.visibility = "hidden";
    }
}

// -------------------------
// Login Function
// -------------------------
function login() {
    let in2 = document.getElementById("in2");
    let pwd = document.getElementById("pwd");

    let allowedNames = [
        "Sneha", "Sneha Singh", "sneha", "sneha singh",
        "Sneha singh", "sneha Singh", "Uday"
    ];

    let trimmedName = in2.value.trim();

    if (allowedNames.includes(trimmedName) && 
        (pwd.value == "Sneha@2004" || pwd.value =="Uday@2005")) {

        // Hide login form and show DOB form
        document.getElementById("loginform").style.display = "none";
        document.getElementById("dobform1").style.display = "flex";
    } else {
        alert("Wrong Username or Password!");
    }
}

/// -------------------------
// DOB Submission
// -------------------------
// -------------------------
// DOB Submission
// -------------------------
function submitDob(event) {
  event.preventDefault(); // stop normal form submission

  let dobInput = document.getElementById("dob").value.trim();

  if (dobInput === "11-09-2004" || dobInput === "05-01-2005") {
    // Save access flag
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Now go to birthday page directly
    window.location.href = "birthday.html";
  } else {
    alert("Incorrect Date Of Birth !!");
  }
}
flatpickr("#dob", {
  dateFormat: "d-m-Y"
});
// -------------------------
// Sprinkle/Graph Effect
// -------------------------
function graph() {
    let d = document.getElementById("d");
    d.style.visibility = "visible";
    d.style.animation = "fadein 2s forwards";

    const container = document.getElementById('sprinkle-container');
    for (let i = 0; i < 30; i++) {
        let p = document.createElement('div');
        p.classList.add('particle');
        p.innerText = "❤";        
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 2 + Math.random() * 3 + "s";
        p.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(p);
    }
}

// -------------------------
// Button Selection Effects
// -------------------------
function select(btn){
    btn.style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 255, 0.7)";
}
function deselect(btn) {
    btn.style.boxShadow = "none";
}

// -------------------------
// Password Toggle
// -------------------------
function togglePwd() {
    let pwd = document.getElementById("pwd");
    pwd.type = pwd.type === "password" ? "text" : "password";
}
window.addEventListener("load", function () {
  // Always clear session when reaching login page
  localStorage.removeItem("isLoggedIn");

  // Prevent navigating back into a protected page
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    // If user tries to go back from login → stay on login
    history.pushState(null, null, location.href);
  };
});