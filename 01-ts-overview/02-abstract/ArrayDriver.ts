import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(20, 10, 5);
let myRectangle = new Rectangle(5, 5, 6, 8);

let arrShapes: Shape[] = [];

arrShapes.push(myCircle);
arrShapes.push(myRectangle);

for (let shape of arrShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
