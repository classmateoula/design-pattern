/**
 * 备忘录模式
 */

class Memento {
    constructor(private state: string) {}
    getStat(): string {
        return this.state;
    }
}

class Originator {
    private state?: string;
    setState(v: string): void {
        this.state = v;
    }
    getState(): string | undefined {
        return this.state;
    }
    saveStateToMemento(): Memento {
        return new Memento(this.state!);
    }
    getStateFromMemento(memento: Memento): void {
        this.state = memento.getStat();
    }
}

class CareTaker {
    private memenList: Memento[] = [];
    add(state: Memento): void {
        this.memenList.push(state);
    }
    get(index: number): Memento {
        return this.memenList[index];
    }
}

class Demo {
    static main() {
        const originator = new Originator();
        const careTaker = new CareTaker();

        originator.setState('state #1');
        originator.setState('state #2');

        careTaker.add(originator.saveStateToMemento());

        originator.setState('state #3');
        careTaker.add(originator.saveStateToMemento());
        originator.setState('state #4');

        console.log(`当前状态:${originator.getState()}`);

        originator.getStateFromMemento(careTaker.get(0));
        console.log(`第一个保存的状态${originator.getState()}`);

        originator.getStateFromMemento(careTaker.get(1));
        console.log(`第二个保存的状态${originator.getState()}`);
    }
}

Demo.main();

export {};
