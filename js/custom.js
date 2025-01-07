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
    $("#testimage").attr("src","https://ronsrescuedtreasures.com/cdn/shop/products/4114414.jpg");
    $("#testtext").text("YOOOO ALEX");
  });
  $(".red-square").on("mouseover", function () {
    $("#testimage").attr("src","https://i.ebayimg.com/images/g/jBcAAOSwCW1lvTfA/s-l400.jpg");
    $("#testtext").text("FEET FOR LIFE");
  });
  $(".blue-square").on("mouseover", function () {
    $("#testimage").attr("src","https://omniphustoys.com/cdn/shop/products/57_c9071637-9510-43ed-a131-707acef818e1.jpg?v=1677352701&width=416");
    $("#testtext").text("MATT SMELLS");
  });
  $(".green-square").on("mouseover", function () {
    $("#testimage").attr("src","https://i.etsystatic.com/30667380/r/il/8ee290/4801539220/il_570xN.4801539220_pmva.jpg");
    $("#testtext").text("BRETTTTTT SHERMAN");
  });

  var arrayOfInfo = [
    ["https://ronsrescuedtreasures.com/cdn/shop/products/4114414.jpg", "YOOOO ALEX"],
    ["https://i.ebayimg.com/images/g/jBcAAOSwCW1lvTfA/s-l400.jpg", "FEET FOR LIFE"],
    ["https://omniphustoys.com/cdn/shop/products/57_c9071637-9510-43ed-a131-707acef818e1.jpg?v=1677352701&width=416", "MATT SMELLS"]
    ["https://i.etsystatic.com/30667380/r/il/8ee290/4801539220/il_570xN.4801539220_pmva.jpg", "BRETTTTTT SHERMAN"]
];

console.log(arrayOfInfo[0][0]);
console.log(arrayOfInfo[0][1]);

});
