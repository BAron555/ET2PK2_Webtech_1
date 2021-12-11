$(document).ready(function () {
    $('button').fadeIn(2200);
});
  
  
  $( "#showr" ).click(function() {
    $( "div" ).first().show( "fast", function showNext() {
      $( this ).next( "div" ).show( "fast", showNext );
    });
  });
   
  $( "#hidr" ).click(function() {
    $( "div" ).hide( 1000 );
  });

  $(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    
    $("#show").click(function(){
      $("p").show();
    });

  
  
  });