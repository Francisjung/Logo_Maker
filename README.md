# Logo_Maker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Uses the CLI to gather user info then passes it into several classes which build a working SVG file. Users may change the general shape, text, shape color, and text color of the logo.

## Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Tests](#tests)

## Installation

You can install this project by cloning the github repo and opening it in any javascript compiler, my compiler of choice is the VS Code compiler.

## Usage

Can create a simple logo consisting of a colored shape, and up to three letters. Users may choose between a circle, rectangle, or triangle for their output, and can change the text color as well.

Linked below is a demo video which showcases the both the code itself and the test cases.

- Demo Video: (https://drive.google.com/file/d/1cIf17hBtX4pYVbLekva5k-kPzSuExaPc/view?usp=sharing)

## Credits

I worked with my long time friend and fellow coder Kyle McClendon to complete this project. You can find his Github profile at (https://github.com/KyleM021199).

## License

[MIT license](https://opensource.org/license/mit/)

Copyright 2023 francisjung


      Permission is hereby granted, free of charge, to any person obtaining a copy of this 
      software and associated documentation files (the “Software”), to deal in the 
      Software without restriction, including without limitation the rights to use, copy, 
      modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
      and to permit persons to whom the Software is furnished to do so, subject to the 
      following conditions:

      The above copyright notice and this permission notice shall be included in all 
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, 
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
      WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
      THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

There are 4 total test cases for this project. These test cases are made to ensure that the shape and text classes output the correct strings.

- TC01: Triangle Test

Test Steps: 


    1. Creates a new Triangle Object with a shapeType of Triangle and a shapeColor of green.

    2. Runs the render function of our new Triangle object.
    
    3. Compares the expected string and the real output string.


Expected Result:


The output string of our triangle object should be the same as our expected string.


- TC02: Rectangle Test

Test Steps: 


    1. Creates a new Rectangle Object with a shapeType of rectangle and a shapeColor of green.

    2. Runs the render function of our new rectangle object.

    3. Compares the expected string and the real output string.


Expected Result:


The output string of our Rectangle object should be the same as our expected string.


- TC03: Circle Test

Test Steps: 


    1. Creates a new Circle Object with a shapeType of Triangle and a shapeColor of green.

    2. Runs the render function of our new Circle object.

    3. Compares the expected string and the real output string.


Expected Result:

The output string of our circle object should be the same as our expected string.


- TC04: Text Test

Test Steps: 


    1. Creates a new Text Object with a textContent of SVG and a textColor of black.

    2. Runs the render function of our new Text object.

    3. Compares the expected string and the real output string.


Expected Result:

The output string of our Text object should be the same as our expected string.

## Contact

Github: (https://github.com/Francisjung)

Email: (francisjung17@gmail.com)
