function submitAnswer(value) {
    document.getElementById("answer").value = value; // Set "Yes" or "No"
    document.getElementById("loveForm").submit();    // Auto-submit the form
  }
      function flipEnvelope() {
  const env = document.querySelector(".container").classList.toggle("flip");
  const bod =
  document.getElementById("bod");
  const b =
    document.getElementById("b");
    const heart =
    document.getElementById("heart");
    const b1 =
    document.getElementById("b1");
    const ddd =
    document.getElementById("ddd");
    const stamp =
    document.getElementById("stamp");
    const ddd1 =
    document.getElementById("ddd1");
    const flaps = document.querySelectorAll('.flap');
  setTimeout(() => {
  const bod = document.getElementById("bod");
  bod.style.zIndex = "0";
  bod.style.border="none";
  bod.style.backgroundColor="white";
  b.style.display="none";
  heart.style.display="block";
  b1.style.display="block";
  ddd.style.display="none";
  ddd1.style.display="none";
  stamp.style.display="none";
flaps.forEach(flap => {
  flap.style.border = "2px solid black";
  flap.style.boxSizing = "border-box"; // not 'borderSizing'
  flap.style.backgroundColor="#fff4cc"
      flap.style.border="2px solid #f9e3b0"
});
}, 150);
  document.getElementById("letter1").style.transform="rotateY(-180deg)";
  document.getElementById("loveForm").style.transform="rotateY(-180deg)";
  b1.style.transform="rotateY(-180deg)";
}
          function openEnvelope() {
          const b1 =
    document.getElementById("b1");
        document.getElementById("flappy").style.transform = "rotateX(180deg)";
        b1.style.animation="fadeout .5s forwards";
     setTimeout (() => {
         flappy.style.zIndex="1";
     }, 1000) ;
   setTimeout(() => {    
      const box = document.getElementById("messageBox");
      box.style.display = "block";
      box.classList.add("show");
   }, 1000);  
   }
    const b2 =
    document.getElementById("b2");
   function colorchange(b){
       b.style.backgroundColor="#ff6f61"
       b.style.color="white"     
   }
   function colorchange2(b){
       b.style.backgroundColor="rgba(0,0,0,0.1)"
       b.style.color="black"     
   }
   function colorchange(b) {
  b.style.backgroundColor = "#ff6f61";
  b.style.color = "white";
}
function openletter() {
  
    // Move envelope down
    document.querySelector(".envelope").classList.add("movedown");

    // Animate letter coming out and zooming
    const letter = document.getElementById("letter1");
    letter.classList.add("popout");

    // Optional: hide b2 after click
    const box = document.getElementById("messageBox");
    b2.style.display = "none";
   setTimeout(()=> {
       letter.style.height="400px";
   box.style.height="400px"; 
   const b3 =
    document.getElementById("b3");
    b3.style.opacity="1";
    b3.style.zIndex="200";
    const b4 =
    document.getElementById("b4");
    const form =
    document.getElementById("loveForm");
    b4.style.opacity="1";
    b4.style.zIndex="200";
    form.style.display="flex";
   },1000);
     const flap =
    document.querySelectorAll(".flap");
  flap.forEach(flap =>{
  flap.style.animation="fadeout 1s forwards";
  });
  bod.style.animation="fadeout 1s forwards";
  flappy.style.animation="fadeout 1s forwards";
  heart.style.animation="fadeout 1s forwards";
 setTimeout(()=> {
   flap.forEach(flap =>{
      flap.style.visibility = "hidden";
  });
  bod.style.visibility="hidden";
  flappy.style.visibility="hidden";
  heart.style.visibility="hidden";
    }, 1000);
  const para = letter.querySelector("p");
    para.style.top = "2px";
const allP2 = document.querySelectorAll(".p2");
allP2.forEach(p => {
  p.style.top = "-62px";
});
        const p1 = document.getElementById("p1");      
        const p2 = document.getElementById("p2");      
        const p3 = document.getElementById("p3");      
        const p4 = document.getElementById("p4");
        p1.style.top="-65.5px";
        p2.style.top="-57px";
        p3.style.top="-47px";
        p4.style.top="-38px";
        
}
const b3 =
    document.getElementById("b3");
    const b4 =
    document.getElementById("b4");
function call(){
    b3.style.backgroundColor="green";
    b3.style.color="white";
    b3.style.textShadow="0px 0px 5px black";
}
function call1() {
    b3.style.backgroundColor="white";
    b3.style.color="green";
    b3.style.textShadow="0px 0px 5px green";
}
function uncall(){
    b4.style.backgroundColor="red";
    b4.style.color="white";
    b4.style.textShadow="0px 0px 5px black";
}
function uncall1(){
    b4.style.backgroundColor="white";
    b4.style.color="red";
    b4.style.textShadow="0px 0px 5px red";
}