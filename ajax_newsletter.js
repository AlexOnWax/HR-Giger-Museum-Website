const formulaireNewsletter = document.querySelector('form');
const email = document.querySelector('#email');
const button = document.querySelector('form > button');
const input = document.querySelector('.input');
const error = document.querySelector('.invisible');


//---Validation formulaire---

function formValidation() {
input.addEventListener("input",() => {
input.setCustomValidity("");
input.checkValidity();
  })

  if (input.validity.valueMissing){
  const message = document.createTextNode(`Email cannot be empty`);
  error.replaceChildren(message);
  error.classList.add("help");
  input.classList.add("error");

  }else if (input.validity.typeMismatch){
    const message = document.createTextNode(`This is not a valid email`);
    error.replaceChildren(message)
    error.classList.add("help");
    input.classList.add("error");
  }else{
    const message= document.createTextNode("");
    error.replaceChildren(message);
    error.classList.add("help");
    input.classList.remove("error");
 
    const formData = new FormData(formulaireNewsletter);
   
fetch('formulaire_inscription-newletter.php', {
    method: 'POST',
    body: formData,
}).then((response)=>response.text());

  }
}

formulaireNewsletter.addEventListener('submit', function (e){
e.preventDefault();
formValidation();





});







//---Ajax pour les mails de la newsletter---


// button.addEventListener('click',(e) =>{
//     e.preventDefault();
//     const formData = new FormData(formulaireNewsletter);
   
// fetch('formulaire_inscription-newletter.php', {
//     method: 'POST',
//     body: formData,
// }).then((response)=>response.text());

// })

