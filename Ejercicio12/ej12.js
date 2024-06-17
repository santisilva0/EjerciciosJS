function numeroValido(numero){
    if(numero>=0 && numero<=36){
        return true;
    }
    return false;
}
function mostrarResultado(numero, numeroRuleta){
    if(numero==numeroRuleta){
        alert('Ganaste!');
    }
    else{
        alert('El numero ganador es el ' + numeroRuleta + ' .Suerte en la proxima');
    }
}
function girarRuleta(){
    return Math.floor(Math.random()*36);
}

document.getElementById('btn1').addEventListener("click",function(){
let numero = parseInt(document.getElementById('numeroJugado').value);
    if(numeroValido(numero)){
        let numeroRuleta = girarRuleta();
        mostrarResultado(numero, numeroRuleta);
    }
    else{
        alert('El numero ingresado no es valido');
    }
});

