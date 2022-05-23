/**
 * 原型模式
 */

interface Cloneable {
    clone(): void;
}

abstract class Shape implements Cloneable {
    protected id?: string;
    protected abstract type: string;
    abstract draw(): void;

    public getType() {
        return this.type;
    }

    public getId(): string {
        if(!this.id) {
            throw new Error('没有这个ID');
        }
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    clone() {
        return this;
    }
}

class Square extends Shape {
    override type = 'square';
    draw() {
        console.log('square');
    }
}

class Circle extends Shape {
    override type = 'circle';
    draw(): void {
        console.log('circle');
    }
}

class ShapeCache {

    private shapeMap: Map<string, Shape>;
    private circle: Circle;
    private square: Square;
    constructor() {
        this.shapeMap = new Map();

        this.circle = new Circle();
        this.circle.setId('1');
        this.shapeMap.set(this.circle.getId(), this.circle);

        this.square = new Square();
        this.square.setId('2');
        this.shapeMap.set(this.square.getId(), this.square);
    }

    getShape(id: string): Shape {
        const shape = this.shapeMap.get(id);
        if(!shape) {
            throw new Error('没有这个形状');
        }
        return shape;
    }
}

class PrototypePatternDemo {
    static main(): void {
        const shapeCache = new ShapeCache();

        const cloneShape1 = shapeCache.getShape('1');
        console.log(cloneShape1.getType());

        const cloneShape2 = shapeCache.getShape('2');
        console.log(cloneShape2.getType())
    }
}
PrototypePatternDemo.main();

export {};
