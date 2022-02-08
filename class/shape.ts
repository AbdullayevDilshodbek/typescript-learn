interface IShape {
    sideA: number;
    sideB: number;
    surface(): number;
}

class Square implements IShape{
    sideA: number;
    sideB: number;

    surface(): number {
        return this.sideA * this.sideB;
    }
}

let shape = new Square();
shape.sideA = 10;
shape.sideB = 5;
console.log(shape.surface());
