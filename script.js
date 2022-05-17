const cont = document.querySelector(".flex");
const body = document.querySelector("body");


let isDown= false;
let startX;
let scrollLeft
let scrollSize = body.clientWidth;
let i=0

/* scroll*/
// cont.addEventListener("wheel", (x) => {
//   // evt.preventDefault();
//   cont.scrollLeft += x.deltaY * 15.4;
  
// });

// arrowRight.forEach((arrowR) => {
//   arrowR.addEventListener("click", () => {
//   cont.scrollLeft += scrollSize;
  
// });
// });


cont.addEventListener("wheel", (x) => {
  // evt.preventDefault();
  cont.scrollLeft += x.deltaY * 15.4;
  
});

/*NavBar reactive*/
const sections =document.querySelectorAll(".page")
const sectionsArr = Array.from(sections);
const navItems = document.querySelectorAll('ul li a');
console.log(sectionsArr);

function activateNavByIndex(index) {
  if (sections[index].classList.contains('active'))
     return;

  const currentActive = document.querySelectorAll('nav .active');
  for (let i = currentActive.length - 1; i >= 0; i--) {
    currentActive[i].classList.remove('active');
  }
  navItems[index].classList.add('active');
}

const intersectionCallback = (entries, observer) => {
  if (entries[0].intesectionRatio <= 0)
      return;
  
  
  if (entries[0].intersectionRatio > 0.75) {    activateNavByIndex(sectionsArr.indexOf(entries[0].target))
  }
};

const intersectionOptions = {
  threshold: [0.9],
  
};

const intersectionObserver = new IntersectionObserver(intersectionCallback, intersectionOptions);

for (let i = 0; i < sections.length; i++) {
  intersectionObserver.observe(sections[i]);  
}

