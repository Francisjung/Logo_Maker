/*
Author: Francis Jung
Date: 5/10/2023
*/

//Uses require statements to import our other classes.
const inquirer = require('inquirer');
const fs = require('fs');
const logo = require('./logo');
const {Triangle, Circle, Rectangle} = require('./shape');
const text = require('./text');
class CLI {
    constructor(){
        
    }
    //Main method of the class, uses the inquirer package to read user input then passes it to another function in .then
    run(){
        return inquirer.prompt([
            {
                type: 'list',
                name: 'shapeType',
                message: 'Please select a shape from the list below: ',
                choices: ['Rectangle', 'Circle', 'Triangle']
            },
            {
                type: 'input',
                name: 'textContent',
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
        ]).then(({shapeType, shapeColor, textContent, textColor}) =>{
            //Creates a new Logo, Shape, and Text object, then passes the inquirer data into their constructors.
            let newLogo = new logo();
            let shape;
            switch(shapeType){
                case "Rectangle":
                    shape = new Rectangle(shapeType, shapeColor);
                    break;

                case "Circle":
                    shape = new Circle(shapeType, shapeColor);
                    break;

                case "Triangle":
                    shape = new Triangle(shapeType, shapeColor);
                    break;
            }
            console.log(shape);
            let lettering;
            //Checks if the textContent length is less than 4. If it is the Logo object is built, if not an error is thrown.
            if(textContent.length<4){
            lettering = new text(textContent, textColor);

            newLogo.setShape(shape.render());
            newLogo.setText(lettering.render());

            fs.writeFile('logo.svg', newLogo.render(), (err) =>
                err ? console.error(err) : console.log('Success!')
            );
            } else{
                console.log('Text input must be less than 4 characters!');
                console.log(error);
            }


        });
    }
}

module.exports = CLI;
