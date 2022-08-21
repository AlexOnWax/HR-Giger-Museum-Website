const cont = document.querySelector(".flex");
const body = document.querySelector("body");
const burgerMenu = document.querySelector(".box");
const listHeader = document.querySelector(".list-nav");


let scrollSize = body.clientWidth;




  window.addEventListener("DOMContentLoaded", () => {
    // permet de lancer l'animation des le demmarage du site

      const titleAnim = document.querySelector("#title-museum_landing-page");
      const animImg = document.querySelectorAll(".card");
      //on creer les parametres de la timeline (containair à animation)avec de bases l'option de pause
      const titletime = gsap.timeline({paused: true}); //pause car bonne pratique
      titletime
          //from pour un seul element
          .from(titleAnim, 2, {
            xPercent: -100,
            opacity: 0,
            ease: Elastic.easeOut.config(1, 0.75),
          })
          //staggerFrom pour plusieur elements
          .staggerFrom(
              animImg,
              1,
              {yPercent: -100, opacity: 0, ease: Elastic.easeOut.config(1, 0.75)},
              0.2,
              "-=1"//'-=1' permet d'avancer l'activation avant la fin de l'animation precedente
          );

      titletime.play(); //on actionne car on a mise pause avant

  });





//animation au démarage



//Menu Burger

const btn = document.querySelector(".btn1");
// const responsiveNav= document.querySelector(".responsive-nav");
btn.addEventListener("click", presentation);
function presentation() {
  btn.classList.toggle("active");
}
q = 0;
burgerMenu.addEventListener("click", () => {
  q++;
  listHeader.classList.toggle("active-burger");

 

  if (q % 2 === 0) {
    listHeader.classList.remove("active-responsive-nav");
    listHeader.classList.add("desactive-responsive-nav");
  } else {
    listHeader.classList.add("active-responsive-nav");
    listHeader.classList.remove("desactive-responsive-nav");
  }
});

//scroll

  cont.addEventListener("wheel", (x) => {
    //  x.preventDefault();
    cont.scrollLeft += x.deltaY * 20;

  },{passive: true})
/*NavBar reactive --------------------------------------------*/

const sections = document.querySelectorAll(".page");
const sectionsArr = Array.from(sections);
const navItems = document.querySelectorAll(".list-nav a");

// let i = 0;
function activateNavByIndex(index) {
  const currentActive = document.querySelectorAll(".active-card");
  
  for (let i = currentActive.length - 1; i >= 0; i--) {
    currentActive[i].classList.remove("active-card");
  }
  navItems[index].classList.add("active-card");

}

const intersectionCallback = (x) => {
  if (x[0].intersectionRatio > 0.25 && scrollSize >= 1000) {
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
let divR;
let div;
if (scrollSize >= 1000) {
  nbr = 5;
  p = 0;
  const container = document.getElementById("container");
  const g = document.getElementById("g");
  const d = document.getElementById("d");
  container.style.width = 800 * nbr + "px";
  for (let i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('img/carrousel/carr" + i + ".webp')";
    container.appendChild(div);
  }
  afficherMasquer();
  g.addEventListener('click',function () {
    if (p > -nbr + 1) {
      p--;
      container.style.transform = "translate(" + p * 800 + "px)";
      container.style.transition = "all 0.5s ease";
      afficherMasquer();
    }
  })

  d.addEventListener('click',function () {
      if (p < 0) {
        p++;
        container.style.transform = "translate(" + p * 800 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
      }
    })


  function afficherMasquer() {
    if (p === -nbr + 1) {
      g.style.visibility = "hidden";
    } else {
      g.style.visibility = "visible";
    }
    if (p === 0) {
      d.style.visibility = "hidden";
    } else {
      d.style.visibility = "visible";
    }
  }
} else {
// carrousel du responsive mobile
  nbrR = 5;
  pR = 0;
  const containerResponsive = document.querySelector("#container-responsive");
  const gR = document.querySelector("#g-responsive");
  const dR = document.querySelector("#d-responsive");
  containerResponsive.style.width = 370 * nbrR + "px";
  for (let i = 1; i <= nbrR; i++) {
    divR = document.createElement("div");
    divR.className = "photo-responsive";
    divR.style.backgroundImage = "url('img/carrouselR/carrR" + i + ".webp')";
    containerResponsive.appendChild(divR);
  }
  afficherMasquerR();

  gR.addEventListener('click',function () {

    if (pR > -nbrR + 1) {
      pR--;
      containerResponsive.style.transform = "translate(" + pR * 370 + "px)";
      containerResponsive.style.transition = "all 0.5s ease";
      afficherMasquerR();
    }
  })
    dR.addEventListener('click',function (){
        if (pR < 0) {
          pR++;
          containerResponsive.style.transform = "translate(" + pR * 370 + "px)";
          containerResponsive.style.transition = "all 0.5s ease";
          afficherMasquerR();
        }
      });


  function afficherMasquerR() {
    if (pR === -nbrR + 1) {
      gR.style.visibility = "hidden";
    } else {
      gR.style.visibility = "visible";
    }
    if (pR === 0) {
      dR.style.visibility = "hidden";
    } else {
      dR.style.visibility = "visible";
    }
  }
}
//Bouton switch langue
const titreHours = document.querySelector("#opening-hours h2");
const titreNewsSpan = document.querySelector("#title-article-news span");
const paragrapheNews = document.querySelector(".paragraphe-news");
const titrePhotoGallery = document.querySelector(".main-exhibition h3");
const bio = document.querySelector(".text-bio-link");
const titreAccess = document.querySelector("#page-access .title-page");
const titreGallery = document.querySelector("#page-exhibition .title-page");
const titreVideo = document.querySelector("#page-video .title-page");
const titreBio = document.querySelector("#page-bio .title-page");
const subscribeNewsletter = document.querySelector(".main-sub h2");
const followUs = document.querySelector(".information h3");
const navs = document.querySelectorAll(".hover_menu");
const boutonLangue = document.querySelector(".button-languev2");
const buttonText = document.querySelector(".button-languev2 > span");
const hours1 = document.querySelector("#hours-1");
const hours2 = document.querySelector("#hours-2");
const hours3 = document.querySelector("#hours-3");
w = 0;
boutonLangue.addEventListener("click", () => {
  w++;
  if (w % 2 !== 0) {
    buttonText.replaceChildren("ENGLISH");
  } else {
    buttonText.replaceChildren("FRANÇAIS");
  }
});
fetch("traduction.json").then((response) =>
  response.json().then((data) => {
    let j = 0;
    let t = 0;
    boutonLangue.addEventListener("click", () => {
      j++;
      if (j % 2 === 0) {
        t = 1;
      } else {
        t = 0;
      }
      let k = 0;
      navs.forEach((navig) => {
        k++;
        navig.replaceChildren(`${data[t].nav[k]}`);
      });
      titreNewsSpan.replaceChildren(`${data[t].PageMuseum.spanTitre}`);
      titreHours.replaceChildren(`${data[t].PageMuseum.TitreHoraire}`);
      hours1.replaceChildren(`${data[t].PageMuseum.horaire1}`);
      hours2.replaceChildren(`${data[t].PageMuseum.horaire2}`);
      hours3.replaceChildren(`${data[t].PageMuseum.horaire3}`);
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
