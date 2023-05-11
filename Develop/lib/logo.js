const {Triangle, Circle, Rectangle} = require('./shape');
const Text = require('./text');

class Logo{
    constructor(){
        this.shape = '';
        this.text = '';
    }
    render(){
        return `<svg height="200" width="300">
        ${shape}
        ${text}
        Sorry, there was a problem creating your logo.  
      </svg> `
    }
}

module.exports = Logo;