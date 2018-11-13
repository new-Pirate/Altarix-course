function calc(num1, num2, operation) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("вы ввели не число");
    }
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

exports.calc = calc;