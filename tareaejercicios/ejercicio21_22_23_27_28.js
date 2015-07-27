$(document).ready(function() {
		$("#down02").click(function() {
			$("#rectangulo2").slideUp(6000);
		});
		$("#down03").click(function() {
			$("#rectangulo2").slideDown(6000,function() {
  			});	
		});
		$("#down01").click(function(){
			$("#rectangulo3").slideToggle(6000);
		});
		$("#start").click(function(){
			$("#rectangulo2").animationstart();
		});
		$("#start").click(function(){
			$("#rectangulo3").animationstart();
		});
		$("#stop").click(function(){
			$("#rectangulo2").stop();
		});
		$("#stop").click(function(){
			$("#rectangulo3").stop();
		});
		$("#stopAll").click(function(){
			$("#rectangulo2").stop(true);
		});
		$("#stopAll").click(function(){
			$("#rectangulo3").stop(true);
		});
		$("#stopFin").click(function(){
			$("#rectangulo2").stop(true,true);
		});
		$("#stopFin").click(function(){
			$("#rectangulo3").stop(true,true);
		});
	});