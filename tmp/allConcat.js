var UserNumbers = require('./../js/calculator.js').usernumbersModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var inputtedNumber1 = parseFloat($('#number1').val());
    var inputtedNumber2 = parseFloat($('#number2').val());
    var newUserNumbers = new UserNumbers(inputtedNumber1, inputtedNumber2);


    if($('#operators').val() == "add") {
      $('#show-answer h2').text(newUserNumbers.add());
    } else if($('#operators').val() == "subtract"){

      $('#show-answer h2').text(newUserNumbers.subtract());
    } else if($('#operators').val() == "multiply"){

      $('#show-answer h2').text(newUserNumbers.multiply());
    } else if($('#operators').val() == "divide"){

      $('#show-answer h2').text(newUserNumbers.divide());
    }
  });
});

var Calculator = require('./../js/pingpong.js').calcultorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email'). val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank You, ' + email + ' has been added to our list!</p>');
  });
});
