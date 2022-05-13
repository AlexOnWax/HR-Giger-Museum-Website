const cont = document.querySelector(".flex");
const header = document.querySelector(".logo-title-header");
const arrowR = document.querySelector("#arrow-right");
const arrowL = document.querySelector("#arrow-left");
const body = document.querySelector("body");
const navDots = document.querySelectorAll(".navdot");
let isDown= false;
let startX;
let scrollLeft
let scrollSize = body.clientWidth;

for (dot of navDots) {
  dot.addEventListener("click", function () {
    console.log("okidoki");
    dot.style.backgroundColor = "red";
  });
}

cont.addEventListener("wheel", (x) => {
  // evt.preventDefault();
  cont.scrollLeft += x.deltaY * 15.4;
});

arrowR.addEventListener("click", () => {
  cont.scrollLeft += scrollSize;
});
arrowL.addEventListener("click", () => {
  cont.scrollLeft -= scrollSize;
});




// cont.addEventListener('mousedown', (e) => {
//   isDown = true;
//   cont.classList.add('active');
//   startX = e.pageX - cont.offsetLeft;
//   scrollLeft = cont.scrollLeft;
// });
// cont.addEventListener('mouseleave', () => {
//   isDown = false;
//   cont.classList.remove('active');
// });
// cont.addEventListener('mouseup', () => {
//   isDown = false;
//   cont.classList.remove('active');
// });
// cont.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - cont.offsetLeft;
//   const walk = (x - startX) * 2; //scroll-fast
//   cont.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });

