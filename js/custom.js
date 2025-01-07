//This is a pen based off of Codewoofy's eyes follow mouse. It is just cleaned up, face removed, and then made to be a little more cartoony. https://codepen.io/Codewoofy/pen/VeBJEP
$(document).ready(function() {
  $("body").mousemove(function(event) {
    var eye = $(".eye");
    console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  $(".square").on("mouseover", function () {
    $("#testimage").attr("src","https://people.com/thmb/WrYU44v7O6pz8ICeJQIqDnVc3QQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x303:751x305)/grimace-17fd7eb9f45f496ea47bf260e518cb6a.jpg");
    $("#testtext").text("YOOOO ALEX");
  });
});
