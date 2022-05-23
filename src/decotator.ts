/**
 * 装饰器模式
 */

interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    draw(): void {
        console.log('draw rect');
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('draw circle');
    }
}

abstract class ShapeDecorator implements Shape {
    constructor(protected decorator: Shape) {}

    draw(): void {
        this.decorator.draw();
    }
}

class RedShapeDecorator extends ShapeDecorator {
    override draw(): void {
        this.decorator.draw();
        this.setRedBorder();
    }

    setRedBorder(): void {
        console.log('set red border: ', this.decorator);
    }
}

class DecoratorDemo {
    static main(): void {
        const circle = new Circle();
        const redCircle = new RedShapeDecorator(new Circle());
        const redRect = new RedShapeDecorator(new Rectangle());

        console.log('无边框');

        circle.draw();

        console.log('绘制边框');
        redCircle.draw();

        console.log('矩形绘制边框');
        redRect.draw();
    }
}

DecoratorDemo.main();

export {};

// 优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
