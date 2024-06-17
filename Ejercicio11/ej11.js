
document.getElementById("btn1").addEventListener("click", agregarTarjeta);

//Funciona pero no se si es la forma adecuada. Hay forma de almacenar todos los campos del formulario en una estructura?

function agregarTarjeta(){
    let nombreNuevo = document.getElementById('nombre').value;
    let apellidoNuevo = document.getElementById('apellido').value;
    let profesionNuevo = document.getElementById('profesion').value;
    let telNuevo = document.getElementById('telefono').value;
    let emailNuevo = document.getElementById('email').value;
    let direccionNuevo = document.getElementById('direccion').value;
    let lista = document.getElementById('listaTarjetas');

    let tarjetaNueva = document.createElement('ul');
    
    let nombreYApellido= document.createElement('h2')
    nombreYApellido.innerHTML=nombreNuevo + " " + apellidoNuevo;
    let profesion= document.createElement('p')
    profesion.innerHTML="Profesion: " + profesionNuevo;
    let tel= document.createElement('p')
    tel.innerHTML="Telefono: " + telNuevo;
    let email= document.createElement('p')
    email.innerHTML="Email: " + emailNuevo;
    let direccion= document.createElement('p')
    direccion.innerHTML="Direccion: " + direccionNuevo;

    tarjetaNueva.append(nombreYApellido);
    tarjetaNueva.append(profesion);
    tarjetaNueva.append(tel);
    tarjetaNueva.append(email);
    tarjetaNueva.append(direccion);
    lista.appendChild(tarjetaNueva);
    tarjetaNueva.className= 'tarjeta';

    document.getElementById('formulario1').reset();

}