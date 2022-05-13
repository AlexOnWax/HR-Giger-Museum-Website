const cont = document.querySelector(".flex");
const header = document.querySelector(".logo-title-header");
const arrowR = document.querySelector("#arrow-right");
const arrowL = document.querySelector("#arrow-left");
const body = document.querySelector("body");
const navDots = document.querySelectorAll(".navdot");
const pageNews = document.querySelector('#page-news')
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

pageNews.addEventListener('mouseover', () => {
  arrowL.style.display="none"
})



