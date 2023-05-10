const inquirer = require('inquirer');
const fs = require('fs');
class CLI {
    constructor(){
        
    }
    run(){
        return inquirer.prompt([
            {
                type: 'checkbox',
                name: 'shapeType',
                message: 'Please select a shape from the list below: ',
                choices: ['Rectangle', 'Circle', 'Triangle']
            },
            {
                type: 'input',
                name: 'text',
                message: 'Please enter the text you would like your logo to display: '
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter the name or hexadecimal code of the color you would like your text to be: '
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter the name or hexadecimal code of the color you would like your shape to be: '
            }
        ]).then((shapeType, shapeColor, text, textColor) =>{
            let shape;
            switch(shapeType){
                case "Rectangle":
                    shape = new Rectangle(shapeColor);
                    break;

                case "Circle":
                    shape = new Circle(shapeColor);
                    break;

                case "Triangle":
                    shape = new Triangle(shapeColor);
                    break;
            }
        });
    }
}

module.exports = CLI;
