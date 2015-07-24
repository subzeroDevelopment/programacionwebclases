var x = $(document);
x.ready(uno);



var colores = ["red","green","blue","yellow"]
var i=0;
var a=0;
var b=0;
var c=0;

var puntos = localStorage.puntos || 0;

function  aleatorio(minimo,maximo){
   var numero = Math.floor(Math.random()*(maximo - minimo+1) + minimo);
  return numero
}

function control(){
$("#crono").html(10.0);
   $("#texto").css("background",colores[aleatorio(0,3)]);
  $("#texto").html(colores[aleatorio(0,3)]);
}

function mostrar(){
$("#crono").html(( +$("#crono").html() - 0.1 ).toFixed(1));
}

function uno(){
  $("#crono").html(10.0);
  $("#texto").css("background",colores[aleatorio(0,3)]);
  $("#texto").html(colores[aleatorio(0,3)]);
  $("#c1").css("background","yellow");
  $("#c1").attr("nombre","yellow");
  $("#c2").css("background","red");
  $("#c2").attr("nombre","red");
  $("#c3").css("background","blue");
  $("#c3").attr("nombre","blue");
  $("#c4").css("background","green");
  $("#c4").attr("nombre","green");

   $("#puntos").html("score:"+ puntos)

  $("td").click(eleccion);
  $("td").mouseover(inicio);

  setInterval(control, 10000);
  setInterval(mostrar, 100)

}

function eleccion(){

  if( $(this).attr("nombre") == $("#texto").html() ){
  puntos++;
   $("#puntos").html("score:"+ puntos)
  localStorage.puntos = puntos;
  }else{
  puntos = 0;
   $("#puntos").html("score:"+ puntos)
  localStorage.puntos = puntos
  }

}


function inicio(){
$("#c1").css("background",colores[i]);
$("#c1").attr("nombre",colores[i]);
a=i+1;
  if(a > 3){
  a = 0;
}

$("#c2").css("background",colores[a]);
$("#c2").attr("nombre",colores[a]);

b= a+1;
if(b > 3){
  b = 0;
}

$("#c4").css("background",colores[b]);
$("#c4").attr("nombre",colores[b]);

c= b+1;
  if(c > 3){
  c = 0;
}

$("#c3").css("background",colores[c]);
$("#c3").attr("nombre",colores[c]);

  i++;
  if(i > 3){
  i = 0;
}

}
