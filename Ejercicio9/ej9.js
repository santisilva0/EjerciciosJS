"use strict";
let boton = document.getElementById("boton1");
boton.addEventListener("click", calcular);

function calcular(){
    let op1= document.getElementById("operando1").value;
    let op2= document.getElementById("operando2").value;
    let select= document.getElementById("operacion");
    let opcion= select.options[select.selectedIndex].value;
    console.log(opcion);
    let resultado= document.getElementById("resultado");

    if(opcion==0){
        resultado.innerHTML= parseFloat(op1)+parseFloat(op2);
    }
    else if(opcion==1){
        resultado.innerHTML= op1-op2;
    }
    else if(opcion==2){
        resultado.innerHTML= op1*op2;
    }
    else if(opcion==3){
        resultado.innerHTML= op1/op2;
    }
}