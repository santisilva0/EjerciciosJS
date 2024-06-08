let boton = document.getElementById("btn1");
boton.addEventListener("click",mostrar);

function mostrar(){
    let inputNombre= document.getElementById("nombre");
    let nom= inputNombre.value;
    let inputApellido= document.getElementById("apellido");
    let ape= inputApellido.value;
    let textoNombre= document.getElementById("titulo_nombre");
    let textoApellido= document.getElementById("titulo_apellido");

   textoNombre.innerHTML=nom;
   textoApellido.innerHTML=ape
}