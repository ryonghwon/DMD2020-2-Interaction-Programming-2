$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
       
    if(scrollTop < 760){ 
                  console.log('760 >', scrollTop);
                  $('#gn-nav ').css({'color' : '#000','background-color':'#fff','transition' : '1s'});
              }else{
                  $('#gn-nav ').css({'color' : '#fff','background-color':'#000','transition' : '1s'}); 
              }
    })
  });