const body = document.querySelector("body");
const header = document.querySelector(".logo-title-header")

body.addEventListener('wheel',(x) => {
x.preventDefault();
body.scrollLeft += x.deltaY;
});