//---Validation formulaire---
const formulaire = document.querySelector('form');
const inputs = document.querySelectorAll('.input');
const formBtn =document.querySelector('form > button');
const errors = document.querySelectorAll('.invisible');



function formValidation() {
    let i=-1;
inputs.forEach((input) => {
    i++;
input.addEventListener("input",() => {
input.setCustomValidity("");
input.checkValidity();
  });

  if (input.validity.valueMissing){
  const message = document.createTextNode(`${input.id} cannot be empty`);
  errors[i].replaceChildren(message);
  errors[i].classList.add("help");
  input.classList.add("error");

  }else if (input.validity.typeMismatch){
    const message = document.createTextNode(`Invalide ${input.id}`);
    errors[i].replaceChildren(message)
    errors[i].classList.add("help");
    input.classList.add("error");
  }else{
    const message= document.createTextNode("");
    errors[i].replaceChildren(message);
    errors[i].classList.add("help");
    input.classList.remove("error");

  }
})
}

formulaire.addEventListener('submit', function (event){
event.preventDefault();
formValidation();

})