alert("hola")

var x= "50";

x= 50;

var y = "2";


alert(y+x+ 5*2);

var peso;
var altura;
var imc;

document.onLoad = calcularimc();

function calcularimc(){

  peso = prompt("peso", "70");
altura =  prompt("altura", "1.50");

peso = Number(peso);
altura = Number(altura);

altura *= altura;
imc = peso/altura;

alert("tu imc es:" + imc)

}




if (confirm("¿deseas salir?")){
     console.log("has salido");
}else{
 calcularimc()
}


continua= true;

while(continua){
peso = prompt("peso");
  if(String(peso).search(/^\d+(\.\d+)?$/)== -1){

    if (confirm("dato no valido")){
    continua=true;
    }else{
      alert("gracias");
      continua=false;
    }
  }else{
  alert("su peso es:"+ peso+ "kg");
  }

}


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


