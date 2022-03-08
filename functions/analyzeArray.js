export default function analyzeArray(array) {
    return _isAllNumbers(array) ? { average: _getAverage(array), min: _getMin(array), max: _getMax(array), length: array.length } : "Error!";
}

function _isAllNumbers(array) {
    return array.every(element => typeof element == "number");
}
function _getAverage(array) {
    return Math.round((array.reduce((prev, cur) => prev + cur, 0) / array.length) * 10) / 10;
}

function _getMin(array) {
    return array.reduce((prev, cur) => (cur < prev ? cur : prev));
}
function _getMax(array) {
    return array.reduce((prev, cur) => (cur > prev ? cur : prev));
}
