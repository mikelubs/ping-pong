function myFunction() {
    var x = document.getElementById("myNumber").value;
    var y = parseInt(x);
    var text = "";
    var z;
    for (z = 1; z <= y; z++) {
      if (z%3 == 0 && z%5 == 0) {
        text += "ping-pong" + "<br>";
      }
        else if (z%3 == 0) {
          text += "ping" + "<br>";
        }
        else if (z%5 == 0) {
          text += "pong" + "<br>";
        }
        else {
          text += " " + z + "<br>";
        }
    }

    document.getElementById("demo").innerHTML = text;
}

$(document).ready(function(){
  $("input#myNumber").click(function(){
    $("#demo").slideUp();
    $(".btn2").fadeOut();
  });

  $(".btn").click(function(){
    $("#demo").slideDown();
    $(".btn2").fadeIn();
  });

  $(".btn2").click(function(){
    $("#demo").slideUp();
    $(".btn2").fadeOut();
  });

  $('h1').hover(function() {
     $('img').fadeOut(300);
     $('img').fadeIn(1200);
  });

});
