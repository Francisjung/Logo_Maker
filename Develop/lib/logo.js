const {Triangle, Circle, Rectangle} = require('./shape');
const Text = require('./text');

class Logo{
    constructor(){
        let shape ='';
        let text ='';
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
      </svg> `;
    }
    setShape(shape){
        this.shape = shape;
    }
    setText(text){
        this.text = text;
    }
}

module.exports = Logo;