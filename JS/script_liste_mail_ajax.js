function listMail(a, b) {
  fetch(a, {
    method: "POST",
    body: b,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        //Creations du template afin de creer le tableau
        let template = document.querySelector("#mailList");
        let tbody = document.querySelector("tbody");
        let clone = document.importNode(template.content, true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = `${data[i].email}`;
        td[0].setAttribute("data-value", `${data[i].email}`);
        td[1].textContent = `${data[i].date_sub}`;
        td[1].setAttribute("data-value", `${data[i].date_sub}`);
        td[2].setAttribute("data-value", `${data[i].idNewsletter}`);
        td[2].setAttribute("data-suppr", `${data[i].email}`);
        tbody.appendChild(clone);
        // permet de lancer la fonction suppression si appelé
        suppr(td[2]);
      }
    });
}
//Fonction qui affiche la liste des mails de base
function listOnLoad(){
  const load = new FormData();
  load.append("value", 0);
  listMail(`list_mail.php`, load);
}
listOnLoad();

function suppr(a) {
  a.addEventListener("click", (e) => {
    //quand le click est entendu, je créé une demande de confirmation
    const elementToSuppr = e.currentTarget.dataset.suppr;
    const body = document.querySelector("BODY");
    const divContainer = document.createElement("DIV");
    divContainer.setAttribute("id", "container_confirmation_flex");
    const divConfirmation = document.createElement("DIV");
    divConfirmation.setAttribute("class", "div_confirmation");
    const pConfirmation = document.createElement("P");
    const span = document.createElement("SPAN");
    const TextConfirmation = document.createTextNode(
      `Voulez-vous vraiment supprimer `
    );
    const spanText = document.createTextNode(`${elementToSuppr}?`);
    span.appendChild(spanText);
    span.style.fontWeight = "bold";
    pConfirmation.appendChild(TextConfirmation);
    pConfirmation.appendChild(span);
    divContainer.appendChild(divConfirmation);
    const divButton = document.createElement("DIV");
    divButton.setAttribute("id", "div_button");
    const buttonYes = document.createElement("BUTTON");
    const buttonNo = document.createElement("BUTTON");
    buttonNo.setAttribute("id", "button_yes");
    buttonNo.setAttribute("class", "conf");
    buttonYes.innerHTML = "OUI";
    buttonNo.innerHTML = "NON";
    buttonYes.setAttribute("id", "button_no");
    buttonYes.setAttribute("class", "conf");
    divButton.appendChild(buttonYes);
    divButton.appendChild(buttonNo);
    divConfirmation.appendChild(divButton);
    divConfirmation.prepend(pConfirmation);
    body.appendChild(divContainer);
    const elementClicked = e.currentTarget;
    const toast = document.getElementById("snackbar");
    //si la réponse est oui je lance le fetch delete et attend la réponse  
    buttonYes.addEventListener("click", () => {
      const valueToDelete = elementClicked.dataset.value;
      //fetch de la requete pour la suppression en sql
      fetch(`delete_mail-list.php?idToSuppr=${valueToDelete}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          //je teste la réponse de php
          if (response[0] == true) {
            //si la réponse est valide  alors j'affice un Toast validant l'action
            toast.innerHTML = "Le mail a bien été supprimé";
            toast.className = "show";
            setTimeout(function () {//efface le toast apres un certain temps
              toast.className = toast.className.replace("show", "");
            }, 3000);
           
            
          } else {
            //sinon le toast indique un problème
            toast.innerHTML = "un problème est survenu";

          }
          listOnLoad();//fonction pour recharger la liste apres le click sur oui
        });
        //puis je remove la div de confirmation de suppression
      divConfirmation.remove();
      divContainer.remove();
      a.parentNode.remove();
    });
    //si je choisis de cliquer sur non
    buttonNo.addEventListener("click", () => {
      // le toast affirme l'annulation
      listOnLoad();//fonction pour recharger la liste apres le click sur non
      toast.className = "show";
      toast.innerHTML = "Le mail n'a pas été supprimé";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
      //et je remove la div
      divConfirmation.remove();
      divContainer.remove();
    });
  });
}



//j'appelle la fonction au clique sur le boutton showmore
let nbrShowMore = 0;
const btnShowMore = document.getElementById("show_more");
btnShowMore.addEventListener("click", () => {
  //je prepare le FormData puis incrémente de 10 en 10 à chaque clique
  const showMore = new FormData();
  nbrShowMore = nbrShowMore + 10;
  //IMPORTANT: comme je n'ai pas de formulaire j'"append" ('value',nbrShowMore) pour lancer le fetch avec la method POST
  showMore.append("value", nbrShowMore);
  listMail(`list_mail.php`, showMore);
});

const btnOrderMail = document.querySelector("#order_mail");
let moduloMail = 0;
btnOrderMail.addEventListener("click", () => {
  moduloMail++;
  if (moduloMail % 2 == 0) {
    trieAlphaRevers(0);
  } else {
    trieAlpha(0);
  }
});

//lancement du trie au click
const btnOrderDate = document.getElementById("order_date");
let moduloDate = 0;
btnOrderDate.addEventListener("click", function () {
  moduloDate++;
  //modulo pour alterner puis je lance la fonction trie ou trie reverse
  if (moduloDate % 2 == 0) {
    trieAlphaRevers(1);
  } else {
    trieAlpha(1);
  }
});

function trieAlpha(a) {//trie à bulle
  let lignes = document.querySelectorAll(".lignes");
  const tBody = document.querySelector("tbody");
  for (let i = 0; i < lignes.length; i++) {
    let email = lignes[i].querySelector(`.td${a}`).dataset.value;

    for (let k = i + 1; k < lignes.length; k++) {
      let emailK = lignes[k].querySelector(`.td${a}`).dataset.value;

      if (email > emailK) {
        tBody.insertBefore(lignes[k], lignes[i]);
        lignes = document.querySelectorAll(".lignes");
        email = lignes[i].querySelector(`.td${a}`).dataset.value;
      }
    }
  }
}
function trieAlphaRevers(a) {//trie à bulle
  let lignes = document.querySelectorAll(".lignes");
  const tBody = document.querySelector("tbody");
  for (let i = 0; i < lignes.length; i++) {
    let email = lignes[i].querySelector(`.td${a}`).dataset.value;

    for (let k = i + 1; k < lignes.length; k++) {
      let emailK = lignes[k].querySelector(`.td${a}`).dataset.value;

      if (email < emailK) {
        tBody.insertBefore(lignes[k], lignes[i]);
        lignes = document.querySelectorAll(".lignes");
        email = lignes[i].querySelector(`.td${a}`).dataset.value;
      }
    }
  }
}

const inputRecherche = document.querySelector("input");
const buttonRechercher = document.querySelector("#rechercher");
const form = document.querySelector("form");
//eventListener de l'input de recherche
form.addEventListener("submit", function (e) {
  e.preventDefault();//enleve le comportement "normal" du form
  let lignes = document.querySelectorAll(".lignes");
  lignes.forEach((ligne) => {
    //je remove les lignes deja existantes avant d'afficher le résultat de ma recherche
    ligne.remove();
  });
  //preparation du FormData
  const search = new FormData(form);
  //lancement de la fonction via recherche.php
  listMail("recherche.php", search);
});
