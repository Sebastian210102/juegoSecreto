// let titulo = document.querySelector("h1");//crear una variable para poder acceder a la etiqueta h1
// titulo.innerHTML="Juego del número secreto";//Que contenido va a tener nuestra etiqueta

// let parrafo = document.querySelector("p");
// parrafo.innerHTML="Indica un numero del 1 a 10";

//Variables

let numeroSecreto=0; //Forma de crear nuestra variables para solo tener que retornala en nuestra función
let intentos=0;
let listaNumerosSorteador=[];
let numeroMaximo=10;
//funciones

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    //obtener el valor del input
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    // console.log(numeroSecreto === numeroUsuario); //comparar que va a dar un boolean o sea true o false el triple igual es para valor y tipo 
   
    //Indicar en el parrafo como cambia dependiendo de lo que pase
    if(numeroSecreto ===numeroUsuario){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos ==1) ? "vez" :"veces" }  `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");

        }else{
            asignarTextoElemento("p","El numero secreto es mayor")
        }
        limpiarCaja();
        intentos++;
        
    }
    return; 
}

function limpiarCaja(){
    // let valorCaja=document.querySelector("#valorUsuario");
    // valorCaja.value="";
    
    //Mejores prácticas
    document.querySelector("#valorUsuario").value="";
}
function generarNumeroSecreto() {
    // let numeroSecreto = Math.floor(Math.random()*10)+1;
    // return numeroSecreto; //Regresamos el numero secreto

    //Mejors prácticas es con

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //Si ya utilizamos todos nos numeros
   if(listaNumerosSorteador.length == numeroMaximo){
    asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    
   }else{
   
    //si numeroGenerado esta incuido en la lista hacemos algo o no
    console.log(numeroGenerado);
    console.log(listaNumerosSorteador);

    if(listaNumerosSorteador.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteador.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica un numero del 1 al "+ numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo de juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

//Llamar la función 
condicionesIniciales();
