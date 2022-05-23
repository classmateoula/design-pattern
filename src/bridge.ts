/**
 * 桥接模式
 */

interface DrawAPI {
    drawCircle(radius: number, x: number, y: number): void;
}

class RedCircle implements DrawAPI {
    drawCircle(radius: number, x: number, y: number): void {
        console.log('绘制一个红色的圆, 圆角为', radius, '位置为', x, y);
    }
}

class GreenCircle implements DrawAPI {
    drawCircle(radius: number, x: number, y: number): void {
        console.log('绘制一个绿色的圆, 圆角半径为:', radius, '位置为', x, y);
    }
}

abstract class Shape {
    protected drawAPI: DrawAPI;
    constructor(api: DrawAPI) {
        this.drawAPI = api;
    }
    abstract draw(): void;
}

class Circle extends Shape {
    constructor(private x: number, private y: number, private radius: number, api: DrawAPI) {
        super(api);
    }

    draw(): void {
        this.drawAPI.drawCircle(this.radius, this.x, this.y);
    }
}

class BridgePatternDemo {
    static main(): void {
        const redCircle = new Circle(10, 10, 10, new RedCircle());
        const greenCircle = new Circle(11, 11, 11, new GreenCircle());

        redCircle.draw();
        greenCircle.draw();
    }
}

BridgePatternDemo.main();

export {};

/**
 * 实现二者解偶
 */
