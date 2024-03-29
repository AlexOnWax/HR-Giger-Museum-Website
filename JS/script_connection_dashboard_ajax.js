//---Validation formulaire---

const formulaire = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const errors = document.querySelectorAll(".invisible");

// Validation du formulaire de connexion au Dashboard
function formValidation() {
  let i = -1;
  inputs.forEach((input) => {
    i++;
    input.addEventListener("input", () => {});

    if (input.validity.valueMissing) {
      const message = document.createTextNode(`${input.id} cannot be empty`);
      errors[i].replaceChildren(message);
      errors[i].classList.add("help");
      input.classList.add("error");
    } else if (input.validity.typeMismatch) {
      const message = document.createTextNode(`Invalide ${input.id}`);
      errors[i].replaceChildren(message);
      errors[i].classList.add("help");
      input.classList.add("error");
    } else {
      const message = document.createTextNode("");
      errors[i].replaceChildren(message);
      errors[i].classList.add("help");
      input.classList.remove("error");

      const loginData = new FormData(formulaire);
      //Fetch PHP 
      fetch("verification_connexion_dashboard.php", {
        method: "POST",
        body: loginData,
      })
        .then((response) => response.json())
        .then((response) => {
          if (response[0] === false) {

          } else {// permet la redirection si ok
            window.location.assign("page_dashboard_mailing_list.php");
          }
        });
    }
  });
}
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidation();
});
