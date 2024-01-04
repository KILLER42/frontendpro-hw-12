'use strict';

const firstNumber = +prompt('Введите первое число: ');
const secondNumber = +prompt('Введите второе число: ');
const sumPlus = firstNumber + secondNumber;
const sumMinus = firstNumber - secondNumber;
const sumMult = firstNumber * secondNumber;
const sumDev = firstNumber / secondNumber;

alert(firstNumber + ' + ' + secondNumber + ' = ' + sumPlus);
alert(firstNumber + ' - ' + secondNumber + ' = ' + sumMinus);
alert(firstNumber + ' * ' + secondNumber + ' = ' + sumMult);
alert(firstNumber + ' / ' + secondNumber + ' = ' + sumDev);
