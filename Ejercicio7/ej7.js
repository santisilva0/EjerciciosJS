"use strict";
let boton = document.getElementById("boton1");
boton.addEventListener("click",cambiarColorYBorde);

function cambiarColorYBorde(){
    document.getElementById("div1").classList.toggle("claseDiv");
}