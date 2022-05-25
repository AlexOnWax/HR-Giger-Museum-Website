const cont = document.querySelector(".flex");
const body = document.querySelector("body");
const targetElements = document.querySelectorAll(".page");
const burgerMenu =document.querySelector(".box")
const listHeader =document.querySelector(".list-nav")

let isDown= false;
let startX;
let scrollLeft
let scrollSize = body.clientWidth;
let i = 0;


/*Menu Burger*/
const btn = document.querySelector(".btn1");

btn.addEventListener('click', presentation)

function presentation() {
    btn.classList.toggle('active')
}

burgerMenu.addEventListener('click', () => {

listHeader.classList.toggle('active-burger')
})


/* scroll*/
cont.addEventListener("wheel", (x) => {
  // evt.preventDefault();
  cont.scrollLeft += x.deltaY * 20;
  

});


/*NavBar reactive --------------------------------------------*/
const sections = document.querySelectorAll(".page");
const sectionsArr = Array.from(sections);
const navItems = document.querySelectorAll(".list-nav a");

function activateNavByIndex(index) {
  const currentActive = document.querySelectorAll("nav .active-card");
  for (let i = currentActive.length - 1; i >= 0; i--) {
    currentActive[i].classList.remove("active-card");
  }
    
  navItems[index].classList.add("active-card");
}


const intersectionCallback = (alexTest) => {
  if (alexTest[0].intersectionRatio > 0.25) {
    activateNavByIndex(sectionsArr.indexOf(alexTest[0].target));
  }
  
};
//Les options de l'observer
const intersectionOptions = {
  threshold: [0.9],
};
//On creer l'observateur d'intersection. // IntersectionObserver(UNe fonction Callback,Les options);
const intersectionObserver = new IntersectionObserver(intersectionCallback,intersectionOptions);

//on creer un élément cible à observer
for (let i = 0; i < sections.length; i++) {
  intersectionObserver.observe(sections[i]);
}




/*utilisation de Observer pour la disparition de la fleches de droite*/
const sectionsArrow = document.querySelectorAll(".page");
const gMain = document.getElementById("left_arrow-main");
 const dMain = document.getElementById("right_arrow-main");
 const sectionsTableau = Array.from(sectionsArrow);

const intersectionCallbackArrow = (x) => {
  
  if(x[0].isIntersecting === true){
 gMain.style.visibility='hidden'
  }else{console.log(x);
    gMain.style.visibility='visible'
  } }
    
;
const intersectionOptionsArrow = {
  threshold: [0.9],
};
const intersectionObserverArrow = new IntersectionObserver(intersectionCallbackArrow,intersectionOptionsArrow);


for (let i = 0; i < sections.length; i++) {
  intersectionObserverArrow.observe(sectionsArrow[0]);
  
}
/*utilisation de Observer pour la disparition de la fleches de gauche*/

const intersectionCallbackArrow2 = (x) => {
  
  if(x[0].isIntersecting === true){
 dMain.style.visibility='hidden'
  }else{console.log(x);
    dMain.style.visibility='visible'
  } }
    
;
const intersectionOptionsArrow2 = {
  threshold: [0.9],
};
const intersectionObserverArrow2 = new IntersectionObserver(intersectionCallbackArrow2,intersectionOptionsArrow2);


for (let i = 0; i < sections.length; i++) {
  intersectionObserverArrow2.observe(sectionsArrow[5]);
  
}




// carrousel----------------------------------------------
nbr = 5;
p = 0;
const container = document.getElementById("container");
const g = document.getElementById("g");
const d = document.getElementById("d");
container.style.width = 800 * nbr + "px";

for (i = 1; i <= nbr; i++) {
  div = document.createElement("div");
  div.className = "photo";
  div.style.backgroundImage = "url('img/carrousel/carr" + i + ".jpg')";
  container.appendChild(div);
}
afficherMasquer()

g.onclick=function() {
    if(p>-nbr+1) {
      
      
            p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease"
    afficherMasquer()
    }
d.onclick=function() {
  
    if(p<0) {
      
            p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease"
    afficherMasquer()
    }
  };
};
function afficherMasquer() {
  if (p == -nbr + 1) {
    g.style.visibility = "hidden";
  } else {
    g.style.visibility = "visible";
  }
  if (p == 0) {
    d.style.visibility = "hidden";
  } else {
    d.style.visibility = "visible";
  }
}


// carrousel Responsive----------------------------------------------
nbrR = 4;
pR = 0;
const containerResponsvive = document.getElementById("container-responsive");
const gR = document.getElementById("g-responsive");
const dR = document.getElementById("d-responsive");
containerResponsvive.style.width = 300 * nbrR + "px";

for (i = 1; i <= nbr; i++) {
  divR = document.createElement("div");
  divR.className = "photo-responsive";
  divR.style.backgroundImage = "url('img/carrouselR/carr" + i + ".jpg')";
  containerResponsvive.appendChild(divR);
}
afficherMasquerR()

gR.onclick=function() {
    if(pR>-nbrR+1) {
      
      
            pR--;
    containerResponsvive.style.transform="translate("+pR*300+"px)";
    containerResponsvive.style.transition="all 0.5s ease"
    afficherMasquerR()
    }
dR.onclick=function() {
  
    if(pR<0) {
      
            pR++;
    containerResponsvive.style.transform="translate("+pR*300+"px)";
    containerResponsvive.style.transition="all 0.5s ease"
    afficherMasquerR()
    }
  };
};
function afficherMasquerR() {
  if (pR == -nbrR + 1) {
    gR.style.visibility = "hidden";
  } else {
    gR.style.visibility = "visible";
  }
  if (pR == 0) {
    dR.style.visibility = "hidden";
  } else {
    dR.style.visibility = "visible";
  }
}



