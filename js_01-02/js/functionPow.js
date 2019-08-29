function pow(base, exponent) {
  var x, n, result = 1;

  x = prompt('Введите число "x":', '');
  n = prompt('Введите степень "n":', '');

  for (var i = 0; i < n; i++) {
    x = +x;
    n = +n;
    result *= x;
  }

  if ((n + "").indexOf(".") > 0 || (x + "").indexOf(".") > 0) {
    result = "Вы ввели не целое число!";
  } else if (isNaN(x) || isNaN(n)) {
    result = "Вы ввели не число!";
  } else if (x === 0 && n === 0) {
    result = 1;
  } else if (x === 0 && n > 0) {
    result = 0;
  } else if (n < 0) {
    x = +x;
    n = +n;
    for (var j = 0; j > n; j--) {
      result *= x;
    }
    result = 1 / result;
  }
  console.log(typeof(x));
  console.log(typeof(n));
  return result;
}
var calc = pow();
console.log('result =', calc);
alert('Результат : ' + calc);
