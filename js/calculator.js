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
