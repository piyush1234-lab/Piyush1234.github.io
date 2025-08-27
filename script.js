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
        "Sneha", 
        "Sneha Singh", 
        "sneha", 
        "sneha singh",
        "Sneha singh", 
        "sneha Singh", 
        "Uday"
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
    event.preventDefault();

    let dobInput = document.getElementById("dob").value;

    if (dobInput === "11-09-2004" || dobInput === "05-01-2005") {
        // ✅ Mark DOB as done in sessionStorage
        sessionStorage.setItem("dobDone", "true");

        // ✅ Redirect to birthday page without storing DOB page in history
        window.location.replace("birthday.html");
    } else {
        alert("Incorrect Date Of Birth !!");
        return false;
    }
}
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
// -------------------------
// On page load
// -------------------------
window.onload = function() {
    // Lock current page in history
    history.replaceState(null, null, location.href);
    history.pushState(null, null, location.href);

    // Handle back button
    window.onpopstate = function() {
        history.replaceState(null, null, location.href);
    };

    // 🚨 If someone tries to open index while already "dobDone",
    // force them to re-login by clearing flag
};