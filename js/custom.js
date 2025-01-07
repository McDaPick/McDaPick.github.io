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
    $("#testimage").attr("src","https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.espn.com%2Fespn%2Fphotos%2Fgallery%2F_%2Fid%2F13525153%2Fimage%2F8%2Findustry-moves-gallery-being-rodney-mullen&psig=AOvVaw3ORqsPge_o68Exh_qpF098&ust=1736373269540000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCcuNLM5IoDFQAAAAAdAAAAABAE");
    $("#testtext").text("YOOOO ALEX");
  });
});
