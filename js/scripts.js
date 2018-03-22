$(document).ready(function() {
  var height = parseInt(prompt("Please enter your height in inches to highlight available rides:"));

  if (height < 48) {
    $(".kids").css("background-color", "yellow");
  } else if (height < 60){
    $(".tweens").css("background-color", "yellow");
  } else {
    $(".adults").css("background-color", "yellow");

  }
});
