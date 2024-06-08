let nom = document.querySelector('#nombre');
let nom_valor= nom.value;
//alert (nom_valor);
let apell = document.querySelector('#apellido');
let apell_valor= apell.value;
//alert (apell_valor);
let btn = document.querySelector('#botoncito');

btn.addEventListener("click",mostrarMsj);

function mostrarMsj(){
    alert(nom_valor+apell_valor);
}

