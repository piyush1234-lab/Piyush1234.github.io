 (function () {
 if(localStorage.getItem("DobDone") !== "true") 
  {
      alert("you are required to login first !!");
      window.location.href="index.html"
return;
  }
    // Get current page name (e.g., gift.html → "gift.html")
  const pageKey = "visited_" + window.location.pathname.split("/").pop();

  if (localStorage.getItem(pageKey)) {
      // Show message once the body exists (if this is in <head>)
      document.addEventListener("DOMContentLoaded", function () {
      document.body.style.backgroundColor="black"
      document.body.style.display = "flex";
      document.body.style.flexDirection = "column";
      document.body.style.justifyContent = "center";
      document.body.style.alignItems = "center";
      document.body.style.height = "100vh"; // make sure it centers vertically
        document.body.innerHTML = `
          <h1 style="color:red; text-align:center; margin-top:100px; font-size: clamp(18px, 6vw, 30px)">🚫 Access Denied</h1>
          <p style="text-align:center; color:yellow; text-shadow: 1px 1px 10px red; font-size: clamp(15px, 3.5vw, 25px)">You already opened this surprise once.<br>You will be redirected to login page after 5 second</p>
        `;
      });
      setTimeout(function () {
        window.location.href = "index.html";
      }, 5000);
      return;
    }
    localStorage.setItem(pageKey, true);
  })(); 