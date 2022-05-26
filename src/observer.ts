/**
 * 观察者模式
 */

abstract class Observer {
    protected abstract subject: Subject;
    abstract update(): void;
}

class Subject {
    private list: Observer[] = [];
    private state = 0;
    getState() {
        return this.state;
    }
    setState(value: number) {
        this.state = value;
        this.notifyAllObservers();
    }
    attach(observer: Observer): void {
        this.list.push(observer);
    }
    notifyAllObservers(): void {
        this.list.forEach(item => {
            item.update();
        });
    }
}

class BinaryObserver extends Observer {
    constructor(protected subject: Subject) {
        super();
    }
    override update(): void {
        console.log(`我在观察, ${this.subject.getState()}`);
    }
}

class OctalObserver extends Observer {
    constructor(protected subject: Subject) {
        super();
        this.subject.attach(this);
    }

    override update(): void {
        console.log(`octal string ${this.subject.getState()}`);
    }
}

class HexaObserver extends Observer {
    constructor(protected subject: Subject) {
        super();
        this.subject.attach(this);
    }

    override update(): void {
        console.log(`htx string ${this.subject.getState()}`);
    }
}

class Demo {
    static main(): void {
        const subject = new Subject();

        new HexaObserver(subject);
        new OctalObserver(subject);
        new BinaryObserver(subject);

        console.log('设置state为12');
        subject.setState(12);
        console.log('设置为6');
        subject.setState(6);
    }
}

Demo.main();

export {};
