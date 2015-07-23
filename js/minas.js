var minas = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

var pminado = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];


var elegido = "<td bgcolor='green'></td>";
var perdido=0;
var puntos=0;
var total=0

function  aleatorio(minimo,maximo){
   var numero = Math.floor(Math.random()*(maximo - minimo+1) + minimo);
  return numero
}

function cargaraleatorio(){
  for ( var j=0; j<minas.length; j++){
   for ( var i=0; i<minas[j].length; i++){
      minas[j][i]= aleatorio(0,1);
    }
 }
}

function inicio(){
//var x  = Number(prompt("ingrese 0 o 2", 0))
//var y  = Number(prompt("ingrese 0 o 2", 0))

cargaraleatorio();

//console.log(minas);

var panel = document.getElementById("elementos")
var resultado = document.getElementById("resultado")

salida = ""
salida += " <table> ";

for ( var j=0; j<minas.length; j++){
    salida += "<tr>";
   for ( var i=0; i<minas[j].length; i++){
      pminado[j][i]= "<td bgcolor='red' onclick='presionado("+j+","+i+")'></td>";
      salida += "<td bgcolor='red' onclick='presionado("+j+","+i+")'></td>";
      if (minas[j][i] != 1){
         total++;
      }
    }
    salida += "</tr>";
}
   salida += "</table>";

////console.log(salida);
panel.innerHTML = salida
resultado.innerHTML = "Score: "+puntos;
//console.log("juego cargado!!");
//console.log(total);

}

function presionado(y,x){
  var panel = document.getElementById("elementos")
  var resultado = document.getElementById("resultado")
  //y=y-1;
  //x=x-1;
  if (minas[y][x] == 1){
    //console.log("Moriste");
    resultado.innerHTML = "[PERDISTE]      Score: "+puntos;
    perdido=1;
    salida = ""
    salida += " <table> ";

    for ( var j=0; j<minas.length; j++){
        salida += "<tr>";
       for ( var i=0; i<minas[j].length; i++){
          if(minas[j][i] == 1){
          pminado[j][i] = elegido;
          salida += elegido;
          }else{
            salida += pminado[j][i];
          }
        }
        salida += "</tr>";
    }
       salida += "</table>";

//console.log(pminado);
panel.innerHTML = salida

}else{

if(perdido==0){

 pminado[y][x] = elegido;

salida = ""
    salida += " <table> ";

    for ( var j=0; j<minas.length; j++){
        salida += "<tr>";
       for ( var i=0; i<minas[j].length; i++){

          salida += pminado[j][i];

        }
        salida += "</tr>";
    }
       salida += "</table>";

////console.log(pminado);
panel.innerHTML = salida
//console.log("sigues vivo");
puntos++;

//console.log(puntos);



if(puntos==total){
  //console.log("ganaste!!!!");
  resultado.innerHTML = "[GANASTE!!!!!!]      Score: "+puntos;
  rellenar();
}else{
  resultado.innerHTML = "Score: "+puntos;
}
}
}
}




function rellenar(){
  var panel = document.getElementById("elementos")

  salida = ""
    salida += " <table> ";

    for ( var j=0; j<minas.length; j++){
        salida += "<tr>";
       for ( var i=0; i<minas[j].length; i++){

          salida += elegido;

        }
        salida += "</tr>";
    }
       salida += "</table>";

////console.log(pminado);
panel.innerHTML = salida
}

