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
  }else{
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
  }else{
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


/*Activation des fleches de déplacements du site Desktop*/

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


// carrousel du responsive mobile

nbrR = 4;
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
afficherMasquerR()

gR.onclick=function() {
    if(pR>-nbrR+1) {
      
      
            pR--;
    containerResponsvive.style.transform="translate("+pR*370+"px)";
    containerResponsvive.style.transition="all 0.5s ease"
    afficherMasquerR()
    }
dR.onclick=function() {
  
    if(pR<0) {
      
            pR++;
    containerResponsvive.style.transform="translate("+pR*370+"px)";
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


/*Bouton switch langue*/

const switchLangue =document.querySelector('.ball')
const titreHours =document.querySelector('#opening-hours h2')
const pHours =document.querySelector('#opening-hours p')
const titreNewsSpan =document.querySelector('#title-article-news span')
const paragrapheNews=document.querySelector(".paragraphe-news")
const titrePhotoGallery =document.querySelector(".main-exhibition h3")
const bio = document.querySelector(".text-bio-link")
const navList = document.querySelectorAll(".list-nav  a")
const titreAccess = document.querySelector("#page-access .title-page")
const titreGallery = document.querySelector("#page-exhibition .title-page")
const titreVideo = document.querySelector("#page-video .title-page")
const titreBio = document.querySelector("#page-bio .title-page")
const subscribeNewsletter = document.querySelector(".main-sub h2")
const followUs = document.querySelector(".information h3")
const findUs = document.querySelector(".information h4")
const switchLangueResponsive = document.querySelector('.ball-responsive')
function traduction () {
  const TitreHeureOuverture_content = document.createTextNode("Horraires d'ouverture")
  const TitreHeureOuvertureElement = document.createElement('H2');
  TitreHeureOuvertureElement.appendChild(TitreHeureOuverture_content);
  titreHours.replaceChildren(TitreHeureOuvertureElement)
  
 
  const HeureOuverture_content = document.createTextNode("Fermé le Lundi")
  const HeureOuverture_content2 = document.createTextNode("Du mardi au Vendredi ouvert de 13h à 15h")
  const HeureOuverture_content3 = document.createTextNode("Le samedi et le dimanche ouvert de 10h00 à 18h00")

  const HeureOuvertureElement1 = document.createElement('P');
  const HeureOuvertureElement2 = document.createElement('P');
  const HeureOuvertureElement3 = document.createElement('P');
  HeureOuvertureElement1.appendChild(HeureOuverture_content);
  HeureOuvertureElement2.appendChild(HeureOuverture_content2);
  HeureOuvertureElement3.appendChild(HeureOuverture_content3);
   pHours.replaceChildren(HeureOuvertureElement1,HeureOuvertureElement2,HeureOuvertureElement3)

  const SpanContent =document.createTextNode('De mai à Novembre 2022 ')
  const spanElement = document.createElement('SPAN');
  spanElement.appendChild(SpanContent)
  titreNewsSpan.replaceChildren(SpanContent)
  
  
  const paragrapheNewsContent =document.createTextNode("Une exposition collective de Stanisky Grof Organisée par Nadia Honarchian et Claude Steiner, en collaboration avec Carmen Giger-Scheifele, l'exposition est une suite de l'exposition collective Psychonauten l en 2008, qui était en l'honneur d'Albert Hofmann, le découvreur du LSD. ")
  const paragrapheNewsElement = document.createElement('P');
  paragrapheNewsElement.appendChild(paragrapheNewsContent)
  paragrapheNews.replaceChildren(paragrapheNewsContent)
  
  
  const titrePhotosContent =document.createTextNode("Galerie photos des dernières expositions")
  const titrePhotosElement = document.createElement('P');
  titrePhotosElement.appendChild(titrePhotosContent)
  titrePhotoGallery.replaceChildren(titrePhotosContent)
  
  
  const bioContent =document.createTextNode("H.R. Giger est né à Coire, en Suisse, en 1940. Enfant, il a développé une forte passion pour tout ce qui est surréaliste et macabre. Son besoin de s'exprimer et de partager les aspects uniques de son imagination puissante l'a attiré vers les arts visuels. Les propres rêves de Giger et les brillantes images de génies fantastiques tels que Gustav Meyrink, Jean Cocteau, Alfred Kubin et H.P. Lovecraft s'est combiné pour former un sol riche à partir duquel les images étonnantes de l'art de Giger sont venues germer. Il s'est depuis transformé en une vaste richesse de femmes exotiques, de paysages merveilleusement bizarres et de créatures effrayantes qui ont captivé la fascination de millions de fans dans le monde entier.")
  const bioElement = document.createElement('P');
  bioElement.appendChild(bioContent)
  bio.replaceChildren(bioContent)
  
   i=-1
  navList.forEach(nav => {
   
    i++
   const tab =["ACCUEIL","MUSÉE","GALLERIE","FILM","BIOGRAPHIE","CONTACT"]
    const navContent =document.createTextNode(`${tab[i]}`)
    const navElement = document.createElement('A'["class","hover_menu active-card"]);
    navElement.appendChild(navContent)
    nav.replaceChildren(navElement)
  });
  
  const frenchTitreAccessContent =document.createTextNode("MUSÉE")
  const frenchTitreElement = document.createElement('H2'["class","title-page"] );
  frenchTitreElement.appendChild(frenchTitreAccessContent)
  titreAccess.replaceChildren(frenchTitreElement)
  
  const frenchTitreGalleryContent =document.createTextNode("GALLERIE DE PHOTOS")
  const frenchTitreGalleryElement = document.createElement('H2'["class","title-page"] );
  frenchTitreGalleryElement.appendChild(frenchTitreGalleryContent)
  titreGallery.replaceChildren(frenchTitreGalleryElement)
  
  const frenchTitreVideoContent =document.createTextNode("COURT METRAGE")
  const frenchTitreVideoElement = document.createElement('H2'["class","title-page"] );
  frenchTitreVideoElement.appendChild(frenchTitreVideoContent)
  titreVideo.replaceChildren(frenchTitreVideoElement)
  
  const frenchTitreBioContent =document.createTextNode("BIOGRAPHIE")
  const frenchTitreBioElement = document.createElement('H2'["class","title-page"] );
  frenchTitreBioElement.appendChild(frenchTitreBioContent)
  titreBio.replaceChildren(frenchTitreBioElement)
  
  const frenchTitreSubContent =document.createTextNode("Inscrivez-vous à la news-letter")
  const frenchTitreSubElement = document.createElement('H2');
  frenchTitreSubElement.appendChild(frenchTitreSubContent)
  subscribeNewsletter.replaceChildren(frenchTitreSubElement)
  
  const followUsContent =document.createTextNode("Suivez-nous")
  const followUsElement = document.createElement('H3');
  followUsElement.appendChild(followUsContent)
  followUs.replaceChildren(followUsElement)
  
  const findUsContent =document.createTextNode("Suivez-nous")
  const findUsElement = document.createElement('H3');
  findUsElement.appendChild(findUsContent)
  findUs.replaceChildren(findUsElement)
  }

//fonction toogle traduction
j=1
switchLangue.addEventListener('click', ()=> {
  console.log(j);
  j++
  if (j%2==0){
  traduction()}else{
  location.reload()}
});
//fonction toogle traduction responsive
j=1
switchLangueResponsive.addEventListener('click', ()=> {
  console.log(j);
  j++
  if (j%2==0){
  traduction()}else{
  location.reload()}
});
  



