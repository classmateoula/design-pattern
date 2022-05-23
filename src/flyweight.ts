/**
 * 亨元模式？？？
 */

interface Shape {
    draw(): void;
}

class Circle implements Shape {
    private x?: number;
    private y?: number;
    private radius?: number;

    constructor(private color: string) {}

    setX(value: number): void {
        this.x = value;
    }

    setY(value: number): void {
        this.y = value
    }

    setRadius(value: number): void {
        this.radius = value;
    }

    draw(): void {
        console.log(`正在绘制图形:x:${this.x}, y: ${this.y}, radius: ${this.radius}, color: ${this.color}`);
    }
}

class ShapeFactory {
    private static circleMap = new Map<string, Circle>();

    static getCircle (color: string): Circle {
        let circle = this.circleMap.get(color);
        if(!circle) {
            circle = new Circle(color);
            this.circleMap.set(color, circle);
            console.log('用颜色创建圆：', color);
        }
        return circle;
    }
}

class FlyweightDemo {
    private static colors = ['red', 'green', 'blue'];

    static main (): void {
        for(let i = 0; i < 20; i++) {
            const circle = ShapeFactory.getCircle(this.getRandomColor());
            circle.setX(this.getRandom(100));
            circle.setY(this.getRandom(100));
            circle.setRadius(100);
            circle.draw();
        }
    }

    private static getRandomColor(): string {
        return this.colors[this.getRandom(this.colors.length - 1)];
    }

    private static getRandom(max: number, min = 0): number {
        return Math.random() * (max - min + 1) + min >> 0;
    }
}

FlyweightDemo.main();
