
let boton= document.getElementById("btn1");
boton.addEventListener("click", agregarTarea)

function agregarTarea(){
    let campoTarea = document.getElementById("tarea");
    let tNueva = campoTarea.value;
    let lista = document.getElementById("listaTareas");
    let liNuevo = document.createElement("li");
    liNuevo.innerHTML=tNueva;
    lista.append(liNuevo);
}