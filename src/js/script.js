// Получаем от юзера два числа через prompt
var firstNumber = parseFloat(prompt("Введите первое число:"));
var secondNumber = parseFloat(prompt("Введите второе число:"));

// Проверяем, являются ли введенные значения числами
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Пожалуйста, введите корректные числа.");
} else {
    // Выполняем операции и выводим результаты через alert
    var addition = firstNumber + secondNumber;
    var subtraction = firstNumber - secondNumber;
    var multiplication = firstNumber * secondNumber;
    var division = firstNumber / secondNumber;

    alert(
        firstNumber + "+" + secondNumber + "=" + addition + "\n" +
        firstNumber + "-" + secondNumber + "=" + subtraction + "\n" +
        firstNumber + "*" + secondNumber + "=" + multiplication + "\n" +
        firstNumber + "/" + secondNumber + "=" + division
    );
}
