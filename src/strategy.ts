/**
 * 策略模式
 */

interface Strategy {
    doOperation(num1: number, num2: number): number;
}

class OperationAdd implements Strategy {
    doOperation(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class OperationSubstract implements Strategy {
    doOperation(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class OperationMultiply implements Strategy {
    doOperation(num1: number, num2: number): number {
        return num1 * num2;
    }
}

class Context {
    constructor(private strategy: Strategy) {}

    executeStrategy(num1: number, num2: number): number {
        return this.strategy.doOperation(num1, num2);
    }
}

class Demo {
    static main(): void {
        let context = new Context(new OperationAdd());
        console.log(`10+5=${context.executeStrategy(10, 5)}`);

        context = new Context(new OperationSubstract()); 
        console.log(`10-5=${context.executeStrategy(10, 5)}`);

        context = new Context(new OperationMultiply());
        console.log(`10*5=${context.executeStrategy(10, 5)}`);
    }
}

Demo.main();

export {};
