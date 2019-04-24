$(document).ready(function(){
  $("#links").click(function(){
      $("#panel").slideToggle("slow");
  });
});

$(window).resize(function(){
      if(window.innerWidth < 500) {
          $("#paris").removeAttr('data-100 data-2200 data-3200 data-4000');

      }
}); 

$(window).resize(function(){
      if(window.innerWidth < 500) {
          $("#pariscaption").removeAttr("class");

      }
});

$(window).resize(function(){
      if(window.innerWidth < 500) {
          $("#progress").removeAttr('data-0 data-end');

      }
});

$(function() {
  $( ".avatar" ).draggable();
});

  jQuery(document).ready(function() {
    var offset = 250;
    var duration = 500;
    var duration_scroll = 300;
    jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
    jQuery('#button').fadeIn(duration);
    } else {
     
    jQuery('#button').fadeOut(duration); 
    }
    });
          
    jQuery('#button').click(function(event) {
    event.preventDefault();   
    jQuery('html, body').stop().animate({'scrollTop': 0}, 800, 'swing');
    return false;
     
    })
   
  });
