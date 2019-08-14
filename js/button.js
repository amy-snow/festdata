$(document).ready(function(){
                  
  $("button").hover(
  function () {
    $(this).addClass('pulse');
  }, 
  function () {
    $(this).removeClass('pulse');
  }
  );
               
                  });