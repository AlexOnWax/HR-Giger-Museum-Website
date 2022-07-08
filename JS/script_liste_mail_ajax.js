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
      const btnOrderMail= document.querySelector("#order_mail");
      btnOrderMail.addEventListener('click', () => {
   trieAlpha();
        
      })
     
    });
});

const btnOrderDate = document.querySelector("#order_date");
btnOrderDate.addEventListener('click', function() {
trieAlpha();
  
})


//fonction trie à bulle 
function trieAlpha() {
  let lignes = document.querySelectorAll(".lignes");
  const tBody= document.querySelector('tbody');
  for (let i = 0; i < lignes.length; i++) {
   
    let email = lignes[i].querySelector(".td0").dataset.value;
    for (let k = i + 1; k < lignes.length ; k++) {
      let emailK = lignes[k].querySelector(".td0").dataset.value;
      if (email > emailK) {
        
        tBody.insertBefore(lignes[k],lignes[i]);
        lignes = document.querySelectorAll(".lignes");
        email = lignes[i].querySelector('.td0').dataset.value;
       
      }
    }
  }
}

const btnOrderMail= document.querySelector("#order_mail");











// function trieAlpha() {
//   let lignes = document.querySelectorAll(".lignes");
//   const tBody= document.querySelector('tbody');
//   for (let i = 0; i < lignes.length; i++) {
   
//     let email = lignes[i].querySelector(".td0").dataset.value;
//     for (let k = i + 1; k < lignes.length ; k++) {
//       let emailK = lignes[k].querySelector(".td0").dataset.value;
//       if (email > emailK) {
        
//         tBody.insertBefore(lignes[k],lignes[i]);
//         lignes = document.querySelectorAll(".lignes");
//         email = lignes[i].querySelector('.td0').dataset.value;
       
//       }
//     }
//   }
// }







