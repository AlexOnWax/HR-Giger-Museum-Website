window.addEventListener("DOMContentLoaded", () => {
  fetch("list_mail.php")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const arrayTab = [];

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
        tbody.appendChild(clone);

        //boutons supprimer
        const tdSuppr = document.querySelectorAll(".btn_suppr");
        tdSuppr.forEach((elem) => {
          elem.addEventListener("click", (e) => {
            const elementClicked = e.currentTarget;
            elem.parentNode.remove();
            const valueToDelete = elementClicked.dataset.value;
            //fetch de la requete pour la suppression en sql
            fetch(`delete_mail-list.php?idToSuppr=${valueToDelete}`, {
              method: "GET",
            });
          });
        });
      }
    });
});

const btnOrderMail = document.querySelector("#order_mail");
let moduloMail = 0;
btnOrderMail.addEventListener("click", () => {
  moduloMail++;
   // a faire !!!! ajouter modulo pour switcher!!
    trieAlpha(0);

});

const btnOrderDate = document.getElementById("order_date");
btnOrderDate.addEventListener("click", function () {

  trieAlpha(1);
});
 const btnShowMore = document.querySelector('.tableau > button');
 btnShowMore.addEventListener('click', () => {
  // ici creer la fonction ou le moyen de changer la limit de l'affichage du nombre de lignes du tableau
  //changer $result = $pdo->prepare("SELECT * FROM Mail LIMIT 10 ") en $result = $pdo->prepare("SELECT * FROM Mail LIMIT 20 ") etc..????
 });

 const btnExportCsv = document.getElementById('csv');
 btnExportCsv.addEventListener('click', () => {
  fetch(`export_csv.php`,{//a faire fonctionner via export_csv.php
    method: "GET",
  });
 })


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
function trieAlpha2(a) {
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