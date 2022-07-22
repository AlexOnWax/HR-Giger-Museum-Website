function listMail(a, b) {
  fetch(a, {
    method: "POST",
    body: b,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //const arrayTab = [];
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
        suppr(td[2]);
      }
    });
}
function suppr(a) {
  a.addEventListener("click", (e) => {
    //mon body
    const elementToSuppr = e.currentTarget.dataset.suppr;
    const body = document.querySelector("BODY");
    //div container
    const divContainer = document.createElement("DIV");
    divContainer.setAttribute("id", "container_confirmation_flex");
    // div confirmation
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
    //button et div button
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

    buttonYes.addEventListener("click", () => {
      const valueToDelete = elementClicked.dataset.value;
      //fetch de la requete pour la suppression en sql
      fetch(`delete_mail-list.php?idToSuppr=${valueToDelete}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          if (response[0] == true) {
            toast.innerHTML = "Le mail a bien été supprimé";
            toast.className = "show";
            setTimeout(function () {
              toast.className = toast.className.replace("show", "");
            }, 3000);
            
          } else {
            

          }
        });
      divConfirmation.remove();
      divContainer.remove();
      a.parentNode.remove();
    });
    buttonNo.addEventListener("click", () => {
      toast.className = "show";
      toast.innerHTML = "Le mail n'a pas été supprimé";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
      divConfirmation.remove();
      divContainer.remove();
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const load = new FormData();
  load.append("value", 0);
  listMail(`list_mail.php`, load);
});

let nbrShowMore = 0;
const btnShowMore = document.getElementById("show_more");
btnShowMore.addEventListener("click", () => {
  const showMore = new FormData();
  nbrShowMore = nbrShowMore + 10;
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

const btnOrderDate = document.getElementById("order_date");
let moduloDate = 0;
btnOrderDate.addEventListener("click", function () {
  moduloDate++;
  if (moduloDate % 2 == 0) {
    trieAlphaRevers(1);
  } else {
    trieAlpha(1);
  }
});

function trieAlpha(a) {
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

function trieAlphaRevers(a) {
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let lignes = document.querySelectorAll(".lignes");
  lignes.forEach((ligne) => {
    ligne.remove();
  });
  const search = new FormData(form);
  listMail("recherche.php", search);
});
