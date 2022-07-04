

fetch('list_mail.php')
.then(response => {
   return response.json();
})
.then(data=>{
   console.log(data);
   for (i=0;i<data.length;i++) {

      let template = document.querySelector('#mailList');
      let tbody = document.querySelector("tbody");
      let clone =document.importNode(template.content,true);
      let td = clone.querySelectorAll("td");
      td[0].textContent=`${data[i].email}`;
      td[1].textContent=`${data[i].date_sub}`;
      tbody.appendChild(clone);
   }
})
  
 

 
  

  