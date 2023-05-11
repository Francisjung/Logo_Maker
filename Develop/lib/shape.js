/*
Author: Francis Jung
Date: 5/10/2023
*/

//Defines a generic shape object, holding shape type and color
class Shape{
    constructor(shapeType, shapeColor){
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
      }
}
//Child of the shape class which creates a Rectangle by using the parent constructor. Uses object properties to build a string which is returned by the render method.
class Rectangle extends Shape{
    constructor(shapeType, shapeColor){
        super(shapeType, shapeColor);
    }
    render() {
        return `<rect width="300" height="200" style="fill:"${this.shapeColor}";stroke-width:0;stroke:rgb(0,0,0)" />`;
    }
}
//Child of the shape class which creates a Circle by using the parent constructor. Uses object properties to build a string which is returned by the render method.
class Circle extends Shape{
    constructor(shapeType, shapeColor){
        super(shapeType, shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}
//Child of the shape class which creates a Triangle by using the parent constructor. Uses object properties to build a string which is returned by the render method.
class Triangle extends Shape{
    constructor(shapeType, shapeColor){
        super(shapeType, shapeColor);
    }
    render() {
        return `<polygon points="0,200 300,200 150,0" style="fill:"${this.shapeColor}";stroke:purple;stroke-width:0" />`;
    }
}

module.exports ={Triangle, Circle, Rectangle};