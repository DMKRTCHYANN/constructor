function Calculator() {}

const calculator = new Calculator()

Calculator.prototype.add = function(x, y) {
    return x + y
}

Calculator.prototype.subtract = function(x, y) {
    return x - y
}

Calculator.prototype.multyply = function(x, y) {
    return x * y
}

Calculator.prototype.divide = function(x, y) {
    return x / y
}

