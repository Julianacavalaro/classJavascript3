class Rectangle {
    #width;  //tipagem dinamica e privado
    height; //tipagem dinamica

    constructor(width, height) {
        this.#width = width;
        this.height = height;
    }
    #calculatePerimeter() {
        return 2 * this.#width + 2 * this.height;
    }

    getPerimeter() {
        return this.#calculatePerimeter();
    }

    getDimensions() {
        return `${this.#width} x ${this.height}`;
    }

    getShapeName() {
        return 'Rectangle';
    }

    toString() {
        return `${this.getShapeName()}: ${this.getDimensions()}`;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.height;
    }

    static createRandom(max = 10) {
        const sideA = Math.floor(Math.random() * max) + 1;
        const sideB = Math.floor(Math.random() * max) + 1;

        return new Rectangle(sideA, sideB);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);

    }
    getShapeName() {
        return "Square";
    }
}

const rect = new Rectangle(5, 10);
const square = new Square(7);

const rectangle = new Rectangle(10, 5);
console.log(10, 5);
console.log(rectangle.getPerimeter());

console.log(rect.getPerimeter());
console.log(square.getPerimeter());
console.log(rect.toString());
console.log(square.toString());
console.log(rect.width);
console.log(rect.height);
console.log(square.width);
console.log(square.height);

const randomRect = Rectangle.createRandom();
console.log(randomRect.toString());