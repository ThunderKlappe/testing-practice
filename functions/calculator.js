function bothNumbers(num1, num2) {
    return typeof num1 == "number" && typeof num2 == "number";
}

function add(num1, num2) {
    return bothNumbers(num1, num2) ? num1 + num2 : "Error";
}
function subtract(num1, num2) {
    return bothNumbers(num1, num2) ? num1 - num2 : "Error";
}
function multiply(num1, num2) {
    return bothNumbers(num1, num2) ? num1 * num2 : "Error";
}
function divide(num1, num2) {
    return bothNumbers(num1, num2) ? (num2 !== 0 ? num1 / num2 : "Error") : "Error";
}
const calculator = {
    add,
    subtract,
    multiply,
    divide,
    bothNumbers,
};

export default calculator;
