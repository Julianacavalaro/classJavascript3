class Rectangle{
 #width;  //tipagem dinamica e privado
 height; //tipagem dinamica

 constructor(width, height){
    this.#width = width;
    this.height = height;
 }
 #calculatePerimeter(){
    return 2 * (this.#width + this.height);
 }
 getPerimeter(){
return this.#calculatePerimeter();
 }
 get width(){
   return this.#width;
    }
set width(width){
    if(width <0){
        throw new Error("Width deve ser positivo");
    }
    this.#width = width;
}

static createRandom(max = 10){
    const width = Math.floor(Math.random() * max) + 1;
    const height = Math.floor(Math.random() * max) + 1;
    return new Rectangle(width, height);
}
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        
    }
    getShapeName(){
        return "Square";
    }
}
 

const rectangle = new Rectangle(10,5);
console.log(10,5);
console.log(rectangle.getPerimeter());

console.log(rectangle.createRandom);