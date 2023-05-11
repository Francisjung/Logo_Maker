class Shape{
    constructor(shapeType, shapeColor){
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
      }
}
class Rectangle extends Shape{
    constructor(shapeType, shapeColor){
        super(shapeType, shapeColor);
    }
    render() {
        return `<rect width="300" height="200" style="fill:"${this.shapeColor}";stroke-width:0;stroke:rgb(0,0,0)" />`;
    }
}
class Circle extends Shape{
    constructor(shapeType, shapeColor){
        super(shapeType, shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}
class Triangle extends Shape{
    constructor(shapeType, shapeColor){
        super(shapeType, shapeColor);
    }
    render() {
        return `<polygon points="0,200 300,200 150,0" style="fill:"${this.shapeColor}";stroke:purple;stroke-width:0" />`;
    }
}

module.exports ={Triangle, Circle, Rectangle};