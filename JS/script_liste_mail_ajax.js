

function listMail(a){
  fetch(a, {
    method: "GET",
  })
  .then((response) => {
   
    return response.json();
 
  },)   
  .then((data) => {
     console.log(data);
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
      tbody.appendChild(clone);

      
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
listMail(`list_mail.php?value=0`);
});



let nbrShowMore=0;
const btnShowMore = document.getElementById('show_more');
  btnShowMore.addEventListener('click', () => {
    nbrShowMore= nbrShowMore+10;
  listMail(`list_mail.php?value=${nbrShowMore}`);
  });


  
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
const btnOrderMail = document.querySelector("#order_mail");
let moduloMail = 0;
btnOrderMail.addEventListener("click", () => {
  moduloMail++;
  trieAlpha(0);
});

const btnOrderDate = document.getElementById("order_date");
let moduloDate = 0;
btnOrderDate.addEventListener("click", function () {
   moduloDate++;
   console.log(moduloDate);
    trieAlpha(1);

});
 
function trieAlpha(a) {
  let lignes = document.querySelectorAll(".lignes");
  const tBody = document.querySelector("tbody");
  for (let i = 0; i < lignes.length; i++) {
    let email = lignes[i].querySelector(`.td${a}`).dataset.value;

    for (let k = i + 1; k < lignes.length; k++) {
      let emailK = lignes[k].querySelector(`.td${a}`).dataset.value;
      if (moduloMail % 2 == 0) {
        if (email > emailK) {
          tBody.insertBefore(lignes[k], lignes[i]);
          lignes = document.querySelectorAll(".lignes");
          email = lignes[i].querySelector(`.td${a}`).dataset.value;
        }
      }else if (moduloMail % 2 !== 0 && email < emailK ){
        
          tBody.insertBefore(lignes[k], lignes[i]);
          lignes = document.querySelectorAll(".lignes");
          email = lignes[i].querySelector(`.td${a}`).dataset.value;
        
      }
      if (moduloDate % 2 == 0) {
        if (email > emailK) {
          tBody.insertBefore(lignes[k], lignes[i]);
          lignes = document.querySelectorAll(".lignes");
          email = lignes[i].querySelector(`.td${a}`).dataset.value;
        }
      }else if (email < emailK ) {
          tBody.insertBefore(lignes[k], lignes[i]);
          lignes = document.querySelectorAll(".lignes");
          email = lignes[i].querySelector(`.td${a}`).dataset.value;
        
      }



    }
    }
  }

// function trieAlphaRevers(a) {
//   let lignes = document.querySelectorAll(".lignes");
//   const tBody = document.querySelector("tbody");
//   for (let i = 0; i < lignes.length; i++) {
//     let email = lignes[i].querySelector(`.td${a}`).dataset.value;

//     for (let k = i + 1; k < lignes.length; k++) {
//       let emailK = lignes[k].querySelector(`.td${a}`).dataset.value;
      
//         if (email < emailK) {
//           tBody.insertBefore(lignes[k], lignes[i]);
//           lignes = document.querySelectorAll(".lignes");
//           email = lignes[i].querySelector(`.td${a}`).dataset.value;
//         }
      
//     }
//   }
// }