var x = document;

function  aleatorio(minimo,maximo){
   var numero = Math.floor(Math.random()*(maximo - minimo+1) + minimo);
  return numero
}



function inicio(){
var minas = [[1,0,0],[0,1,0],[0,0,1]];
var contador=0;
var x  = Number(prompt("ingrese 0 o 2", 0))
var y  = Number(prompt("ingrese 0 o 2", 0))


/*
if (minas[x][y] == 1){
    "Moriste"
}else{
 contador++;
}

*/

var celdas = document.getElementsByTagName("td");


  for  (var i=0; i<celdas.length; i++ ){
  celdas[i].onClick = click();
  }

}


function click(){
   alert( "click" );
}
