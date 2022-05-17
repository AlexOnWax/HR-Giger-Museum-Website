

nbr=5;
p=0;
const container =document.getElementById('container')
const g = document.getElementById('g')
const d = document.getElementById('d')
container.style.width=(800*nbr)+"px";

for (i=1;i<=nbr;i++){
    div=document.createElement("div");
    div.className="photo";
    div.style.backgroundImage="url('img/carrousel/carr"+i+".jpg')"
    container.appendChild(div);

}
afficherMasquer()

g.onclick=function() {
    if(p>-nbr+1) {
            p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease"
    afficherMasquer()
    }
d.onclick=function() {
    if(p<0) {
            p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease"
    afficherMasquer()
    }
}
}
function afficherMasquer() {
    if (p==-nbr+1){
        g.style.visibility="hidden"
    }else {
        g.style.visibility="visible"
    }
    if(p==0){
        d.style.visibility="hidden"
    }else{
        d.style.visibility="visible"
    }
}
