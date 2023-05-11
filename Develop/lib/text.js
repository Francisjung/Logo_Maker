class Text{
    constructor(textContent, textColor){
        this.textContent = textContent.toUpperCase();
        this.textColor = textColor;
    }
    render(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
    }
}

module.exports = Text;