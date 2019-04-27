$(document).ready(function() {
  var duration = 500;
  var duration_scroll = 300;               
  $('#cat').click(function(event) {
    console.log("click");
  event.preventDefault();   
  $('html, body').stop().animate({'scrollTop': 0}, 800, 'swing');
  return false;
  });
});


$( "#day" ).click(function() {
  console.log("click!");
  $('#particles-js').css('background-image', 'linear-gradient(180deg, #2f3363 0%, #415e7f 18%, #91688b 50%, #82c5ce 95%, #fcf0b3 110%)');
});

$("#night").click(function() {
  $('#particles-js').css('background-image', 'linear-gradient(180deg, #252328 0%, #55466d 50%, #874b65 80%, #dbb74c 130%)');
});


$('.ml1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });