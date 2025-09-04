let activeCard = null;
  let zIndexCounter = 1; // Start from 1 to ensure visibility

  function startDrag(e, card) {
    if (activeCard !== null && activeCard !== card) return;

    activeCard = card;

    // Bring the touched card on top
    card.style.zIndex = zIndexCounter++;
    
    function move(event) {
      const t = event.touches[0];
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let left = t.pageX - cardWidth / 2;
      let top = t.pageY - cardHeight / 2;

      left = Math.max(0, Math.min(left, screenWidth - cardWidth));
      top = Math.max(0, Math.min(top, screenHeight - cardHeight));

      card.style.left = left + 'px';
      card.style.top = top + 'px';
    }
    function stop() {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', stop);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', stop);
      activeCard = null;
    }

    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', stop);
    document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', stop);
  }
    function blink()
    {
    const m42 =
    document.getElementById("m42");
if(m42.style.visibility=="visible")
{
m42.style.visibility="hidden"
}
else
{
m42.style.visibility="visible"
}
setTimeout(blink,1000);
}  
function deselect(){
const btn =
    document.getElementById("btn");
 btn.style.backgroundColor="rgba(255,255,255,0.3)"
       btn.style.color="black"     
   }
   function select() {
   const btn =
    document.getElementById("btn");
  btn.style.backgroundColor = "#ff6f61";
  btn.style.color = "white";
}
const images = ['1.webp','2.webp','3.webp','4.webp'];
let loaded = 0;   // counter for how many images finished loading

images.forEach(src => {
  const img = new Image();   // create a new <img> element in memory
  img.src = src;             // start loading the image from file path (e.g. '1.webp')

  img.onload = () => {       // when this image finishes loading successfully...
    loaded++;                // increase the counter by 1

    // Check if all images are done
 if (loaded === images.length) {
  // Fade out loader
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  
  // Remove loader after fade animation
  setTimeout(() => {
    loader.style.display = 'none';
  }, 700); // matches transition: 0.7s

  // Show cards
  document.querySelectorAll('.card').forEach(c => c.style.visibility = 'visible');

  // Show button
  document.getElementById('btn').style.visibility = 'visible';

  // Show blinking message
  document.getElementById('m42').style.visibility = 'visible';
}
  };
});