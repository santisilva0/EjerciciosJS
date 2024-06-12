
let boton = document.getElementById('boton1');
boton.addEventListener("click",ocultar_mostrar);

let visible=true;
function ocultar_mostrar(){
   let div = document.getElementById('div1');
   if(visible){
       div.style.display="none";
       visible=false;
   }
   else{
    div.style.display="";
    visible=true;
   }
}