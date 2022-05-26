/**
 * 访问者模式
 */

interface ComputerPart {
    accept(visitor: ComputerpartVisitor): void;
}

class Keyboard implements ComputerPart {
    accept(visitor: ComputerpartVisitor): void {
        visitor.visit(this);
    }
}

class Monitor implements ComputerPart {
    accept(visitor: ComputerpartVisitor): void {
        visitor.visit(this);
    }
}

class Mouse implements ComputerPart {
    accept(visitor: ComputerpartVisitor): void {
        visitor.visit(this);
    }
}

class Computer implements ComputerPart {
    private parts?: ComputerPart[] = [new Mouse(), new Keyboard(), new Monitor()];

    accept(visitor: ComputerpartVisitor): void {
        for (const item of this.parts || []) {
            item.accept(visitor);
        }
        visitor.visit(this);
    }
}

interface ComputerpartVisitor {
    visit(computer: Computer): void;
}

class ComputerPartDisplayVisitor implements ComputerpartVisitor {
    visit(computer: ComputerPart): void {
        if (computer instanceof Computer) {
            console.log('显示计算机', computer);
        } else if (computer instanceof Mouse) {
            console.log('显示鼠标');
        } else if (computer instanceof Keyboard) {
            console.log('显示键盘')
        } else if (computer instanceof Monitor) {
            console.log('显示监视器');
        }
    }
}

class Demo {
    static main(): void {
        const computer = new Computer();
        computer.accept(new ComputerPartDisplayVisitor());
    }
}

Demo.main();

export {};
