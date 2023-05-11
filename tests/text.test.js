const text = require('../Develop/lib/text');

describe("Text", () =>{
    test("Will output a .svg file that describes text", () =>{
        const textOutput = new text("SVG", "black");
        const out = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>`;
        expect(out).toEqual(textOutput.render());
    });
});