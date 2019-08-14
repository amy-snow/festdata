$(document).ready(function(){
    

var dur = 300;//set vars
$('.box').hover(function(){//on in
    $(this).stop().animate({ width:'52%' },dur)//animate
    .siblings().stop().animate({ width:'16%' },dur);//animate sibs
}, function(){//on out
    $('.box').stop().animate({ width:'25%' },dur);//animate all          
});
    
  

    
});