 function check() {
    let in2 = document.getElementById("in2");
    let span2 = document.getElementById("spn");

    let validNames = [
        "Sneha Singh",
        "Sneha",
        "Sneha singh",
        "sneha singh",
        "sneha"
    ];

    // show span if input is valid Sneha name OR the stored name
    if (validNames.includes(in2.value))
    {
        span2.style.visibility = "visible";
        span2.style.animation = "fadein 1s forwards";
    }
    else
     {
        span2.style.visibility = "hidden";
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
  function login()
  {
  let in2 = document.getElementById("in2");
let pwd = document.getElementById("pwd");
// List of allowed names (you can add/remove as needed)
    let allowedNames = [
        "Sneha", 
        "Sneha Singh", 
        "sneha", 
        "sneha singh", 
        "Sneha singh",
        "Sneha singh"
         ];

      if (allowedNames.includes(in2.value) && pwd.value=="Sneha@1234")
      { 
          const login =
          document.getElementById("loginform")
          login.style.display="none";
          const dob=
          document.getElementById("dobform")
          dob.style.display="block";
      }
     else
     {
         alert("wrong Username or password!")   
     }
  }
  function submitDob()
  {
     if (dob.value=="2004-09-11") 
     {
         document.location="time.html";
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