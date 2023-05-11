/*
Author: Francis Jung
Date: 5/10/2023
*/

//Uses require statements to import our other classes
const {Triangle, Circle, Rectangle} = require('./shape');
const Text = require('./text');

class Logo{
    //Constructor creates two blank string objects
    constructor(){
        let shape ='';
        let text ='';
    }
    //Builds a string using stored properties, then returns the string
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
      </svg> `;
    }
    //Assigns values to our string objects
    setShape(shape){
        this.shape = shape;
    }
    setText(text){
        this.text = text;
    }
}

module.exports = Logo;