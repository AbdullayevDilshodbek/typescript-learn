var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.surface = function () {
        return this.sideA * this.sideB;
    };
    return Square;
}());
var shape = new Square();
shape.sideA = 10;
shape.sideB = 5;
console.log(shape.surface());
