export default function caesarCipher(input) {
    return input
        .split("")
        .map(letter => {
            if (_isLetter(letter)) {
                if (_isNotZ(letter)) {
                    return String.fromCharCode(letter.charCodeAt(0) + 1);
                }
                return String.fromCharCode(letter.charCodeAt(0) - 25);
            }
            return letter;
        })
        .join("");
}
function _isNotZ(letter) {
    return letter.charCodeAt(0) != 122 && letter.charCodeAt(0) != 90;
}
function _isLetter(letter) {
    return _isBetween(letter.charCodeAt(0), 65, 90) || _isBetween(letter.charCodeAt(0), 97, 122);
}
function _isBetween(test, num1, num2) {
    return test >= num1 && test <= num2;
}
