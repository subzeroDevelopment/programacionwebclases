function f1(){
$( "p" ).prepend(" texto añadido").after( $( "a" ) ).clone().add( "<span>otro</span>" ).appendTo( document.body );

}




