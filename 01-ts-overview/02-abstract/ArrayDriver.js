"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(20, 10, 5);
var myRectangle = new Rectangle_1.Rectangle(5, 5, 6, 8);
var arrShapes = [];
arrShapes.push(myCircle);
arrShapes.push(myRectangle);
for (var _i = 0, arrShapes_1 = arrShapes; _i < arrShapes_1.length; _i++) {
    var shape = arrShapes_1[_i];
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
//# sourceMappingURL=ArrayDriver.js.map