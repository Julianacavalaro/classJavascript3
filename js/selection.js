function selectById(){
   const h1 = document.getElementById("titulo");

   console.log(h1);
}
selectById();

function selectByClass(){
    const paragrafo = document.getElementsByClassName("paragrafo");
 
    console.log(paragrafo);
 }
 selectByClass();

 function selectQuerySelector(){
    const paragrafo = document.querySelector("p.paragrafo");
 
    console.log(paragrafo);
 }
 selectQuerySelector()