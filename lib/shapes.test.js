// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
const { Triangle, Circle, Square} = require('./shapes');

describe('Triangle', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="80" fill="green"/>');
    });
});

describe('Square', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect width="150" height="150" x="100" y="50" rx="0" ry="0" fill="red"/>');
    });
});