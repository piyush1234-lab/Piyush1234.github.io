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

    let trimmedName = in2.value.trim(); // Trim spaces

    if (validNames.includes(trimmedName)) {
        span2.style.visibility = "visible";
        span2.style.animation = "fadein 1s forwards";
    } else {
        span2.style.visibility = "hidden";
    }
}
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

    let trimmedName = in2.value.trim(); // Trim spaces

    if (allowedNames.includes(trimmedName) && pwd.value == "Sneha@2004" || pwd.value =="Uday@2005") {
        document.getElementById("loginform").style.display = "none";
  document.getElementById("f1").style.display = "none";
   document.getElementById("dobform").style.display = "flex";
    } else {
        alert("Wrong Username or Password!");
    }
}
    function graph()
    {
    let d =
    document.getElementById("d");
        d.style.visibility="visible";
        d.style.animation="fadein 2s forwards";
        const container = document.getElementById('sprinkle-container');
    for (let i = 0; i < 30; i++) {
        let p = document.createElement('div');
        p.classList.add('particle');
        p.innerText="❤";        
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 2 + Math.random() * 3 + "s";
        p.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(p);
    }
    }    
  flatpickr("#dob", {
    dateFormat: "d-m-Y" // This is DD-MM-YYYY format
  });
  function submitDob(event) {
  event.preventDefault(); // Prevent default form submission

  let dobInput = document.getElementById("dob").value;

  if (dobInput === "11-09-2004" || dobInput === "05-01-2005") {
    // ✅ Allow form to submit
    document.getElementById("dobForm").submit();
  } else {
    alert("Incorrect Date Of Birth !!");
    return false; // 🚫 Stop form
  }
}
  function deselect(btn) {
    btn.style.boxShadow = "none";
  }
  function select(btn){
btn.style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 255, 0.7)";}
function togglePwd() {
  let pwd = document.getElementById("pwd");
  if (pwd.type === "password") {
    pwd.type = "text";     // Show the password
  } else {
    pwd.type = "password"; // Hide the password
  }
}
