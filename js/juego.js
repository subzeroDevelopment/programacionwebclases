
function patito (minimo, maximo)
{
  var numero = Math.floor(Math.random()*(maximo - minimo+1) + minimo);
  return numero
}

function juego(seleccion){

  var piedra = 0;
var papel = 1;
var  tijera = 2;

var opciones = ["piedra", "papel", "tijera"];

var opcionmaquina = patito(0,2);

var opcionUsuario;
opcionUsuario = seleccion;

  var resultado = document.getElementById("resultado")

alert("Elegiste"+ opciones[opcionUsuario]);
alert("javascritp eligio"+ opciones[opcionmaquina]);

if(opcionUsuario== piedra){
if(opcionmaquina == piedra){
resultado.innerText = "empate";
}
}

}


