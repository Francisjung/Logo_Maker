/*
Author: Francis Jung
Date: 5/10/2023
*/
const {Triangle, Circle, Rectangle} = require('../Develop/lib/shape');

describe("Triangle", () =>{
    test("Will output a .svg file that describes a triangle", () =>{
        const triangle = new Triangle("Triangle", "green");
        const out = `<polygon points="0,200 300,200 150,0" style="fill:"green";stroke:purple;stroke-width:0" />`;
        expect(out).toEqual(triangle.render());
    });
});

describe("Rectangle", () =>{
    test("Will output a .svg file that describes a rectangle", () =>{
        const rectangle = new Rectangle("Rectangle", "green");
        const out = `<rect width="300" height="200" style="fill:"green";stroke-width:0;stroke:rgb(0,0,0)" />`;
        expect(out).toEqual(rectangle.render());
    });
});

describe("Circle", () =>{
    test("Will output a .svg file that describes a circle", () =>{
        const circle = new Circle("Circle", "green");
        const out = `<circle cx="150" cy="100" r="80" fill="green" />`;
        expect(out).toEqual(circle.render());
    });
});