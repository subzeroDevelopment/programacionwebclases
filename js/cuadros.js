var x = $(document);
x.ready(uno);

var colores = ["red","green","blue","yellow"]
var i=0;
var a=0;
var b=0;
var c=0;

function uno(){
  $("#c1").css("background","yellow");
  $("#c2").css("background","red");
  $("#c3").css("background","blue");
  $("#c4").css("background","green");

  $("#c1").mouseover(inicio);
  $("#c2").mouseover(inicio);
  $("#c3").mouseover(inicio);
  $("#c4").mouseover(inicio);
}

function inicio(){
$("#c1").css("background",colores[i]);

a=i+1;
  if(a > 3){
  a = 0;
}

$("#c2").css("background",colores[a]);

b= a+1;
if(b > 3){
  b = 0;
}

$("#c4").css("background",colores[b]);

c= b+1;
  if(c > 3){
  c = 0;
}

$("#c3").css("background",colores[c]);

  i++;
  if(i > 3){
  i = 0;
}

}
