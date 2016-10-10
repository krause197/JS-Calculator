(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function UserNumbers(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
}

UserNumbers.prototype.add = function () {
  return number1 + number2;
};

UserNumbers.prototype.subtract = function () {
  return number1 - number2;
};

UserNumbers.prototype.multiply = function () {
  return number1 * number2;
};

UserNumbers.prototype.divide = function () {
  var beforeDecimal = (number1 / number2);
  var beforeDecimalString = beforeDecimal.toString();

  var decimal = (number1 % number2);
  var decimalString = decimal.toString();

  return beforeDecimalString + "." + decimalString;
};

exports.usernumberModule = UserNumbers;

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
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

},{"./../js/calculator.js":1,"./../js/pingpong.js":2}]},{},[3]);
