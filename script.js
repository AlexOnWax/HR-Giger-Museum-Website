const cont = document.querySelector(".flex");
const body = document.querySelector("body");
const targetElements = document.querySelectorAll(".page");
const burgerMenu = document.querySelector(".box");
const listHeader = document.querySelector(".list-nav");

let isDown = false;
let startX;
let scrollLeft;
let scrollSize = body.clientWidth;
//animation au démarage

window.addEventListener("load", () => {
  const titleAnim = document.querySelector("#title-museum_landing-page");
  const animImg = document.querySelectorAll(".card");
  //on creer les parametres de la timeline (containair à animation)avec de bases l'option de pause
  const titletime = gsap.timeline({ paused: true }); //pause car bonne pratique
  titletime
    //from pour un seul element
    .from(titleAnim, 2, {
      xPercent: -100,
      opacity: 0,
      ease: Elastic.easeOut.config(1, 0.75),
    })
    //staggerFrom pour plusieur elements '-=1' permet d'avancer l'activation avant la fin de l'animation precedente
    .staggerFrom(
      animImg,
      1,
      { yPercent: -100, opacity: 0, ease: Elastic.easeOut.config(1, 0.75) },
      0.2,
      "-=1"
    );

  titletime.play(); //on actionne car on a mis pause precedement
});

//Menu Burger

const btn = document.querySelector(".btn1");

btn.addEventListener("click", presentation);

function presentation() {
  btn.classList.toggle("active");
}

burgerMenu.addEventListener("click", () => {
  listHeader.classList.toggle("active-burger");
});

//scroll
cont.addEventListener("wheel", (x) => {
  //  x.preventDefault();
  cont.scrollLeft += x.deltaY * 20;
});

/*NavBar reactive --------------------------------------------*/

const sections = document.querySelectorAll(".page");
const sectionsArr = Array.from(sections);
const navItems = document.querySelectorAll(".list-nav a");
let i = 0;
function activateNavByIndex(index) {
  const currentActive = document.querySelectorAll(".active-card");

  for (let i = currentActive.length - 1; i >= 0; i--) {
    currentActive[i].classList.remove("active-card");
  }

  navItems[index].classList.add("active-card");
}

const intersectionCallback = (x) => {
  if (x[0].intersectionRatio > 0.25) {
    activateNavByIndex(sectionsArr.indexOf(x[0].target));
  }
};

//Les options de l'observer
const intersectionOptions = {
  threshold: [0.9],
};
//On creer l'observateur d'intersection. // IntersectionObserver(UNe fonction Callback,Les options);
const intersectionObserver = new IntersectionObserver(
  intersectionCallback,
  intersectionOptions
);

//on creer un élément cible à observer
for (let i = 0; i < sections.length; i++) {
  intersectionObserver.observe(sections[i]);
}

//utilisation de Observer pour la disparition de la fleches de droite

const sectionsArrow = document.querySelectorAll(".page");
const gMain = document.getElementById("left_arrow-main");
const dMain = document.getElementById("right_arrow-main");
const sectionsTableau = Array.from(sectionsArrow);

const intersectionCallbackArrow = (x) => {
  if (x[0].isIntersecting === true) {
    gMain.style.visibility = "hidden";
  } else {
    gMain.style.visibility = "visible";
  }
};

const intersectionOptionsArrow = {
  threshold: [0.9],
};
const intersectionObserverArrow = new IntersectionObserver(
  intersectionCallbackArrow,
  intersectionOptionsArrow
);

for (let i = 0; i < sections.length; i++) {
  intersectionObserverArrow.observe(sectionsArrow[0]);
}

//utilisation de Observer pour la disparition de la fleches de gauche

const intersectionCallbackArrow2 = (x) => {
  if (x[0].isIntersecting === true) {
    dMain.style.visibility = "hidden";
  } else {
    dMain.style.visibility = "visible";
  }
};

const intersectionOptionsArrow2 = {
  threshold: [0.9],
};
const intersectionObserverArrow2 = new IntersectionObserver(
  intersectionCallbackArrow2,
  intersectionOptionsArrow2
);
for (let i = 0; i < sections.length; i++) {
  intersectionObserverArrow2.observe(sectionsArrow[5]);
}

//Activation des fleches de déplacements du site Desktop

dMain.addEventListener("click", () => {
  cont.scrollLeft += scrollSize;
});
gMain.addEventListener("click", () => {
  cont.scrollLeft -= scrollSize;
});

// carrousel version Desktop

nbr = 5;
p = 0;
const container = document.getElementById("container");
const g = document.getElementById("g");
const d = document.getElementById("d");
container.style.width = 800 * nbr + "px";

for (i = 1; i <= nbr; i++) {
  div = document.createElement("div");
  div.className = "photo";
  div.style.backgroundImage = "url('img/carrousel/carr" + i + ".webp')";
  container.appendChild(div);
}
afficherMasquer();

g.onclick = function () {
  if (p > -nbr + 1) {
    p--;
    container.style.transform = "translate(" + p * 800 + "px)";
    container.style.transition = "all 0.5s ease";
    afficherMasquer();
  }
  d.onclick = function () {
    if (p < 0) {
      p++;
      container.style.transform = "translate(" + p * 800 + "px)";
      container.style.transition = "all 0.5s ease";
      afficherMasquer();
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

// carrousel du responsive mobile

nbrR = 5;
pR = 0;
const containerResponsvive = document.getElementById("container-responsive");
const gR = document.getElementById("g-responsive");
const dR = document.getElementById("d-responsive");
containerResponsvive.style.width = 370 * nbrR + "px";

for (i = 1; i <= nbr; i++) {
  divR = document.createElement("div");
  divR.className = "photo-responsive";
  divR.style.backgroundImage = "url('img/carrouselR/carrR" + i + ".webp')";
  containerResponsvive.appendChild(divR);
}
afficherMasquerR();

gR.onclick = function () {
  if (pR > -nbrR + 1) {
    pR--;
    containerResponsvive.style.transform = "translate(" + pR * 370 + "px)";
    containerResponsvive.style.transition = "all 0.5s ease";
    afficherMasquerR();
  }
  dR.onclick = function () {
    if (pR < 0) {
      pR++;
      containerResponsvive.style.transform = "translate(" + pR * 370 + "px)";
      containerResponsvive.style.transition = "all 0.5s ease";
      afficherMasquerR();
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

//Bouton switch langue

const titreHours = document.querySelector("#opening-hours h2");
const pHours = document.querySelector("#opening-hours p");
const titreNewsSpan = document.querySelector("#title-article-news span");
const paragrapheNews = document.querySelector(".paragraphe-news");
const titrePhotoGallery = document.querySelector(".main-exhibition h3");
const bio = document.querySelector(".text-bio-link");
const navList = document.querySelectorAll(".list-nav  a");
const titreAccess = document.querySelector("#page-access .title-page");
const titreGallery = document.querySelector("#page-exhibition .title-page");
const titreVideo = document.querySelector("#page-video .title-page");
const titreBio = document.querySelector("#page-bio .title-page");
const subscribeNewsletter = document.querySelector(".main-sub h2");
const followUs = document.querySelector(".information h3");
const findUs = document.querySelector(".information h4");
const navs = document.querySelectorAll(".hover_menu");
const Langue = document.querySelector("#button-text");
const boutonLangue = document.querySelector(".button-langue");
const buttonText = document.querySelector(".button-langue >  button");


w = 0;
boutonLangue.addEventListener("click", () => {
  w++;

  if (w % 2 !== 0) {
    buttonText.replaceChildren("FR");
  } else {
    buttonText.replaceChildren("EN");
  }
});

fetch("/traduction.json").then((response) =>
  response.json().then((data) => {
    let j = 0;
    let t = 0;
    boutonLangue.addEventListener("click", () => {
      j++;
      if (j % 2 == 0) {
        t = 1;
      } else {
        t = 0;
      }
      k = 0;
      console.log(j);
      navs.forEach((navig) => {
        k++;

        navig.replaceChildren(`${data[t].nav[k]}`);
      });

      titreNewsSpan.replaceChildren(`${data[t].PageMuseum.spanTitre}`);
      titreHours.replaceChildren(`${data[t].PageMuseum.TitreHoraire}`);
      pHours.replaceChildren(
        `${data[t].PageMuseum.horaire1}${data[t].PageMuseum.horaire2}${data[t].PageMuseum.horaire3}`
      ); //todo//
      paragrapheNews.replaceChildren(`${data[t].PageMuseum.expo}`);
      titreAccess.replaceChildren(`${data[t].PageMuseum.titrePage}`);
      titrePhotoGallery.replaceChildren(`${data[t].PageGallery.titre}`);
      titreGallery.replaceChildren(`${data[t].PageGallery.titrePage}`);
      titreVideo.replaceChildren(`${data[t].PageMovie.titrePage}`);
      titreBio.replaceChildren(`${data[t].PageBiographie.titrePage}`);
      bio.replaceChildren(`${data[t].PageBiographie.biographie}`);
      subscribeNewsletter.replaceChildren(`${data[t].PageSub.newsLetter}`);
      followUs.replaceChildren(`${data[t].PageSub.FollowUs}`);
      
    });
  })
);
