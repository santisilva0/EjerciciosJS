addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('btn1').addEventListener("click",adivinar);
    const animales =[
        {nombre:'perro', img:'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1718323200&semt=sph'},
        {nombre:'gato', img:'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg'},
        {nombre:'jirafa', img:'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {nombre:'loro', img:'https://img.freepik.com/foto-gratis/loro-colorido-palabra-loro_1340-38610.jpg'},
        {nombre:'conejo', img:'https://img.freepik.com/foto-gratis/conejo-lindo-peludo-aislado_78492-3950.jpg'},
    ];

    let animalActual = animales[animalAleatorio()];
    document.getElementById('imgAnimal').src = animalActual.img;
     
    function animalAleatorio(){
        return Math.floor(Math.random()*animales.length);
    }
    function adivinar(){ 
        let respuesta = document.getElementById('adivinanza').value.toLowerCase();
        let resultado = document.getElementById('resultado');
        if(respuesta==animalActual.nombre){
            resultado.textContent='Correcto';
            animalActual=animales[animalAleatorio()];
            document.getElementById('imgAnimal').src = animalActual.img;
        }
        else{
            resultado.textContent='Incorrecto';
        }
    }
});