jQuery(document).ready(function(){
    
    "use strict"
    $('.slider').ripples({
    dropRadius: 9,
    perturbance: 0.01,
    });
    
    $(".text").typed({
        strings:["<strong class='primary'>Cubix Incorporated</strong>"],
        typespeed:0,
        loop:true,
     });
    
       $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top >= 60){
          $("nav").addClass('secondary'); 
        }
        else
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
        }
      });
    
        $('.gallery-img').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
            enabled: true
         }
        });
    
        $('.gallery').magnificPopup({
           delegate: 'a',
            type:'iframe'   
        });
    
            $('.docs').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
            enabled: true
         }
        });
    
    
});

