

 fetch('list_mail.php')
 .then((resp) => {
    const response=JSON.stringify(resp);
    console.log(response);
 }).then(r => r.json())
 .then(r => {
    console.log(response, r) 
 })

 
  

//   let template = document.querySelector('#mailList');
//   let tbody = document.querySelector("tbody");

//   let clone =document.importNode(template.content,true);
//   let td = clone.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone);
  

//   let clone2 =document.importNode(template.content,true);
//   td = clone2.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone2);

//   let clone3 =document.importNode(template.content,true);
//    td = clone3.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone3);

//   let clone4 =document.importNode(template.content,true);
//  td = clone4.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone4);

//   let clone5 =document.importNode(template.content,true);
//   td = clone5.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone5);

//   let clone6 =document.importNode(template.content,true);
//    td = clone6.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone6);

//   let clone7 =document.importNode(template.content,true);
//    td = clone7.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone7);

//   let clone8 =document.importNode(template.content,true);
//   td = clone8.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone8);

//   let clone9 =document.importNode(template.content,true);
//    td = clone9.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone9);

//   let clone10 =document.importNode(template.content,true);
//   td = clone10.querySelectorAll("td");
//   td[0].textContent="test1";
//   td[1].textContent="test2";
//   tbody.appendChild(clone10);
 