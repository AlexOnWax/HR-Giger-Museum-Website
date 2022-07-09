const formulaireNewsletter = document.querySelector("form");
const email = document.querySelector("#email");
const button = document.querySelector("form > button");
const input = document.querySelector(".input");
const error = document.querySelector(".invisible");
const goodMessage = document.querySelector(".invisible_good");
//---Validation formulaire---
function formValidation() {
  goodMessage.classList.remove("help");
  error.classList.remove("help");
  if (input.validity.valueMissing) {
    const message = document.createTextNode(`Email cannot be empty`);
    error.replaceChildren(message);
    error.classList.add("help");
    input.classList.add("error");
  } else if (input.validity.typeMismatch) {
    const message = document.createTextNode(`This is not a valid email`);
    error.replaceChildren(message);
    error.classList.add("help");
    input.classList.add("error");
  } else {
    const message = document.createTextNode("Thanks you for the subscription");
    goodMessage.replaceChildren(message);
    goodMessage.classList.add("help");
    input.classList.add("good");

    const formData = new FormData(formulaireNewsletter);
    fetch("verification_formulaire_inscription_newletter.php", {
      method: "POST",
      body: formData,
    }).then((response) => response.text());
  }
}
formulaireNewsletter.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidation();
  input.value = "";
});
