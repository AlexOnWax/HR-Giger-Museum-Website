
const titre = document.querySelector('h1')



let observer = new IntersectionObserver(observables => {
    for(let observable of observables) {
        if(observable.intersectionRatio > 0.5){
            console.log(observable.intersectionRatio);
            titre.style.color=("red");
        }else{
            observable.target.classList.add("hidden");

        }
    }
    

},{
    threshold :[0.25]
});


const sections = document.querySelectorAll("section");


for (let section of sections) {
    section.classList.add("hidden");
    observer.observe(section);
}
