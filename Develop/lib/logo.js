const {Triangle, Circle, Rectangle} = require('./shape');
const Text = require('./text');

class Logo{
    constructor(){
        shape;
        text;
    }
    render(){
        return `<svg height="200" width="300">
        ${this.shape.render()}
        ${this.text.render()}
        Sorry, there was a problem creating your logo.  
      </svg> `
    }
    setShape(shape){
        this.shape = shape;
    }
    setText(text){
        this.text = text;
    }
}

module.exports = Logo;