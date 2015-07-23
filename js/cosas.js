var x = $(document);
x.ready(uno);



function uno(){
  //$("header").click(inicio);
  $("header").hover(inicio);
}

function inicio(){
$("header nav ul li a").text("ya no soy prueba");
var h = $("#datos").html();
 // alert(h)
$("#datos").html("jajaj");

$(".verde").css("background","green");
$(".rojo").css("color","red");

  $("section").css("border","1px solid red");

  $("section article").css("display","none");

  $("ul").css("list-style","none")

}
