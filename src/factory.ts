/**
 * 工厂模式
 */

// 创建一接口
interface Shape {
    draw(): void;
}

// 创建一个借口的实体类
class Rectangle implements Shape {
    draw() {
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
        console.log('draw circle');
    }
}

// 创建一个工厂， 生成基于给定信息的实体类的对象
class ShapeFactory {
    public getShape(shapeType: string): Shape {
        if(shapeType === 'rect') {
            return new Rectangle();
        } else if(shapeType === '') {}
        switch(shapeType) {
            case 'rect':
                return new Rectangle();
            case 'square':
                return new Square();
            case 'circle':
                return new Circle();
            default:
                throw new Error('no shape type');
        }
    }
}

// 使用工厂，通过传递类型信息来获取实体类的多对象
class FactoryPatternDemo {
    static main(types: string[]): void {
        const shapeFactory = new ShapeFactory();
        const shapes = types.map(shapeFactory.getShape);
        shapes.forEach(s => {
            s.draw();
        });
    }
}

FactoryPatternDemo.main(['rect', 'square', 'circle']);

export {};