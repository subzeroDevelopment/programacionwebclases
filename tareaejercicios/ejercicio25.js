$(document).ready(function($){
  $("#mostrar").on("click", function() {
    var div_ancho = $("#rectangulo").width();
    var div_alto = $("#rectangulo").height();
    alert(div_ancho);
    alert(div_alto);
  });
});