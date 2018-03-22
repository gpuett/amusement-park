$(document).ready(function() {
  var height = parseInt(prompt("Please enter your height in inches to see available rides"));

  if (height < 48) {
    $('#kids').show();
  } else if (height < 60){
    $('#tweens').show();
  } else {
    $('#adults').show();
  }
});
