// The application must include Triangle, Circle, and Square classes

//parent class
class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" x="100" y="50" rx="0" ry="0" fill="${this.color}"/>`;
    }
};

module.exports = {Triangle, Circle, Square };