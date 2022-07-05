window.addEventListener("DOMContentLoaded", () => {






  fetch("list_mail.php")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      

      for (i = 0; i < data.length; i++) {
        let template = document.querySelector("#mailList");
        let tbody = document.querySelector("tbody");
        let clone = document.importNode(template.content, true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = `${data[i].email}`;
        td[1].textContent = `${data[i].date_sub}`;
        td[2].setAttribute("data-value", `${data[i].idNewsletter}`);
        tbody.appendChild(clone);

        const td2 = document.querySelectorAll(".btn_suppr");

        td2.forEach((elem) => {
          elem.addEventListener("click", (e) => {
            const elementClicked = e.currentTarget;
            elem.parentNode.remove();
            const valueToDelete = elementClicked.dataset.value;

            fetch(`delete_mail-list.php?idToSuppr=${valueToDelete}`, {
              method: "GET",
            });
          });
        });
      }
    });

  const btnOrderMail = document.querySelector("#order_mail");
  const btnOrderDate = document.querySelector("#order_date");

});


