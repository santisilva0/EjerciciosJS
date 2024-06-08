let parrafo = document.querySelector('#parrafo');

let b1 = document.querySelector('#boton1');
let b2 = document.querySelector('#boton2');
let b3 = document.querySelector('#boton3');

b1.addEventListener("click", ultimoEsVerde);
b2.addEventListener("click", ultimoEsAmarillo);
b3.addEventListener("click", ultimoEsRojo);

function hola(){
    alert("hola");
}
function ultimoEsVerde(){
    parrafo.innerHTML= 'verde';
}
function ultimoEsAmarillo(){
    parrafo.innerHTML= "amarillo";
}
function ultimoEsRojo(){
    parrafo.innerHTML = "rojo";
}