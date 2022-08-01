const formulaireNewsletter = document.querySelector("form");
const button = document.querySelector("form > button");
const input = document.querySelector(".input");
const error = document.querySelector(".invisible");
const goodMessage = document.querySelector(".invisible_good");
//Verification du mail avant son inscription dans la BDD

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
  }else{

    const formData = new FormData(formulaireNewsletter);
    fetch("verification_formulaire_inscription_newletter.php", {
      method: "POST",
      body: formData,
    }).then((response) =>{

    let codeError = response.headers.get("error");
        console.log(codeError)

        if(codeError == "23000"){
            const message = document.createTextNode(`This email already exist`);
            error.replaceChildren(message);
            error.classList.add("help");
            input.classList.add("error");
        }else if(codeError == 1) {
            const message = document.createTextNode(`This is not a valid email`);
            error.replaceChildren(message);
            error.classList.add("help");
            input.classList.add("error");
        }else{

                const message = document.createTextNode("Thanks you for the subscription");
                goodMessage.replaceChildren(message);
                goodMessage.classList.add("help");
                input.classList.add("good");


      // if (data) {
      //   const message = document.createTextNode(`Email already in our database`);
      //   error.replaceChildren(message);
      //   error.classList.add("help");
      //   input.classList.add("error");
      // }

  }
})}}
formulaireNewsletter.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidation();
  input.value = "";
});
