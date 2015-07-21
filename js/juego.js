var puntos = localStorage.puntos || 0;

function puntoss(){
  var resultado = document.getElementById("resultado")
return resultado.innerHTML = "<p>"+"  "+"Score: "+puntos+" <p>";
}


function cargar(){
var panel = document.getElementById("elementos")
var grafico = document.getElementById("final")
var boton = document.getElementById("boton")
var letrero = document.getElementById("intro")
var resultado = document.getElementById("resultado")
panel.innerHTML ="<article id=piedra onclick=juego(0)> <img src=piedra.png> </article><article id=tijeras onclick=juego(1) > <img src=tijera.png> </article><article id=papel onclick=juego(2)  > <img src=papel.png> </article>"

grafico.innerHTML =" ";
boton.innerHTML =" ";
intro.innerHTML="Elija personaje";

}


function patito (minimo, maximo)
{
  var numero = Math.floor(Math.random()*(maximo - minimo+1) + minimo);
  return numero
}

function juego(seleccion){

  var piedra = 0;
var papel = 2;
var  tijera = 1;

var panel = document.getElementById("elementos")
var grafico = document.getElementById("final")
var resultado = document.getElementById("resultado")
var boton = document.getElementById("boton")
var letrero = document.getElementById("intro")
letrero.innerHTML = "<p></p>";
resultado.innerHTML = "<p>"+"  "+"Score: "+puntos+" <p>";
var opciones = ["piedra","tijera", "papel"];

var opcionmaquina = patito(0,2);

var opcionUsuario;
opcionUsuario = seleccion;


panel.innerHTML = "<article> <img src="+opciones[opcionUsuario]+".png>Usuario</article> VS <article> <img src="+opciones[opcionmaquina]+".png>Maquina</article>";

if(opcionUsuario == opcionmaquina){

resultado.innerHTML = "<p>[Empate]"+"  "+"Score: "+puntos+" <p>";

}

if(opcionUsuario < opcionmaquina){

if((opcionUsuario==0)&&(opcionmaquina==2)){
resultado.innerHTML = "<p>[Perdiste]"+"  "+"Score: "+puntos+" <p>";

}else{
	puntos++;
  localStorage.puntos = puntos;
	resultado.innerHTML = "<p>[GANASTE!!]"+"  "+"Score: "+puntos+" <p>";

if(opcionmaquina==1){
	grafico.innerHTML = "<section><img src=tijerarota.png></section>";
}

if(opcionmaquina==2){
	grafico.innerHTML = "<section><img src=papelroto.png></section>";
}
};
}

if(opcionUsuario > opcionmaquina){

if((opcionUsuario==2)&&(opcionmaquina==0)){
puntos++;
localStorage.puntos = puntos;
resultado.innerHTML = "<p>[GANASTE!!]"+"  "+"Score: "+puntos+" <p>";

}else{
	resultado.innerHTML = "<p>[Perdiste]"+"  "+"Score: "+puntos+" <p>";

if(opcionUsuario==1){
	grafico.innerHTML = "<section><img src=tijerarota.png></section>";
}
if(opcionUsuario==2){
	grafico.innerHTML = "<section><img src=papelroto.png></section>";
}


};

}


boton.innerHTML ="<button type=submit onclick=cargar()>Jugar_otra_vez</button> "

}


