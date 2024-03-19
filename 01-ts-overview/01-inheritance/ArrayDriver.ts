import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 5);
let myCircle = new Circle(20, 10, 5);
let myRectangle = new Rectangle(5, 5, 6, 8);

let arrShapes: Shape[] = [];

arrShapes.push(myShape);
arrShapes.push(myCircle);
arrShapes.push(myRectangle);

for (let shape of arrShapes) {
    console.log(shape.getInfo());
}
