/**
 * 解释器模式
 */

interface Expression {
    interpret(context: string): boolean;
}

class TerminalExpression implements Expression {

    constructor(private data: string) {}

    interpret(context: string): boolean {
        return context.includes(this.data);
    }
}

class OrExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: string): boolean {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}

class AndExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: string): boolean {
        return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
}

class InterpreterPatternDemo {

    static getMaleExpression(): Expression {
        const jiaQi = new TerminalExpression('jia qi');
        const hangXin = new TerminalExpression('hang xin');
        return new OrExpression(jiaQi, hangXin);
    }

    static getUnMarriedWomanExpression(): Expression {
        const xiangYun = new TerminalExpression('xiang yun');
        const hongJuan = new TerminalExpression('hong juan');
        return new AndExpression(xiangYun, hongJuan);
    }

    static main(): void {
        const isMale = this.getMaleExpression();
        const isUnMarriedWoman = this.getUnMarriedWomanExpression();

        console.log(`是男性？${isMale.interpret('jia qi')}`);
        console.log(`红娟结婚咩？${isUnMarriedWoman.interpret('hong juan')}`);
    }
}

InterpreterPatternDemo.main();
