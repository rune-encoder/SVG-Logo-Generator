const { Circle, Square, Triangle } = require('./shapes.js')
const selectHex = require("../lib/util/selectHexNumber.js");

describe('Shape', () => {

    describe('Circle',() => {
        it('Should render the `selected color` with the correct hexadecimal code for our Circle SVG file code.', () => {
        const shape = new Circle();
        const colorText = 'Pastel Blue';
        const colorHex = selectHex(colorText)
        shape.hexLogo = colorHex;
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="#A7C7E7"/>`)
        });
    });

    describe('Square',() => {
        it('Should render the `selected color` with the correct hexadecimal code for our Square SVG file code.', () => {
        const shape = new Square();
        const colorText = 'Sea Green';
        const colorHex = selectHex(colorText)
        shape.hexLogo = colorHex;
        expect(shape.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="#2E8B57" stroke-width="5"/>`)
        });
    });

    describe('Triangle',() => {
        it('Should render the `selected color` with the correct hexadecimal code for our Triangle SVG file code.', () => {
        const shape = new Triangle();
        const colorText = 'Amber';
        const colorHex = selectHex(colorText)
        shape.hexLogo = colorHex;
        expect(shape.render()).toEqual(`<polygon points="150, 0, 50, 160, 250, 160" fill="#FFBF00" />`)
        });
    });
});