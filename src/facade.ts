/**
 * 外观模式
 */

interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    draw(): void {
        console.log('draw rect');
    }
}

class Square implements Shape {
    draw(): void {
        console.log('draw square');
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('drwa circle');
    }
}

class ShapeMaker {
    private circle = new Circle();
    private rect = new Rectangle();
    private square = new Square();

    drawCircle(): void {
        this.circle.draw();
    }

    drawRect(): void {
        this.rect.draw();
    }

    drawSquare(): void {
        this.square.draw();
    }
}

class FacadePatternDemo {
    static main(): void {
        const shapeMaker = new ShapeMaker();

        shapeMaker.drawCircle();
        shapeMaker.drawRect();
        shapeMaker.drawSquare();
    }
}

FacadePatternDemo.main();

export {};

// 优点： 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。

// 缺点：不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
