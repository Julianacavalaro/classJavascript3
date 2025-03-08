function selectById() {
   const titulo = document.getElementById('titulo');

   console.log(titulo);
}

function selectByClass() {
   const paragrafos = document.getElementsByClassName('paragrafo');

   console.log(paragrafos);
}

function selectByTag() {
   const itens = document.getElementsByTagName('li');

   console.log(itens);
}

selectById();
selectByClass();
selectByTag();