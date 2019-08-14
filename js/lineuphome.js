$(document).ready(function(){
    
  var dur = 300;//set vars
$('.menu2').hover(function(){//on in
    $(this).stop().animate({ width:'40%' },dur)//animate
    .siblings().stop().animate({ width:'20%' },dur);//animate sibs
}, function(){//on out
    $('.menu2').stop().animate({ width:'25%' },dur);//animate all          
});  
    
});