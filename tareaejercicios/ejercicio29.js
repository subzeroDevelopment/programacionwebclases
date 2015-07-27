$(document).ready(function() {
		$("#down01").click(function() {
			$("#rectangulo2").css({'color':'rgba(255,0,0,0.5)'});
		});
		
		$("#down02").click(function() {
			$("#rectangulo2").slideUp(6000);
		});
		$("#down03").click(function() {
			$("#rectangulo2").slideDown(6000);	
		});
	});

