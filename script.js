const cont = document.querySelector(".flex");
const header = document.querySelector(".logo-title-header")
const arrowR = document.querySelector("#arrow")
const arrowL = document.querySelector("#arrowleft")

cont.addEventListener("wheel",(x) => {
// evt.preventDefault();
  cont.scrollLeft += (x.deltaY*15.4);
 
  

});


arrowR.addEventListener('click',() =>{
    
    cont.scrollLeft +=1600;

});
arrowL.addEventListener('click',() =>{
    
    cont.scrollLeft -=1600;

});
