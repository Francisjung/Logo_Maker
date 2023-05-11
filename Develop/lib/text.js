/*
Author: Francis Jung
Date: 5/10/2023
*/
class Text{
    //Constructor reads in textcontent and color as parameters then holds them as object properties
    constructor(textContent, textColor){
        this.textContent = textContent.toUpperCase();
        this.textColor = textColor;
    }
    //Render uses passed in object properties to build a string which is returned
    render(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
    }
}

module.exports = Text;