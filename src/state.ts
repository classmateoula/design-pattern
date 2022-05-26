/**
 * 状态模式
 */

class Context {
    private state?: State;
    setState(state: State): void {
        this.state = state;
    }
    getState(): State | undefined {
        return this.state;
    }
}

interface State {
    doAction(context: Context): void;
    toString(): string;
}

class StartState implements State {
    doAction(context: Context): void {
        console.log('播放状态');
        context.setState(this);
    }

    toString() {
        return 'start state';
    }
}

class StopState implements State {
    doAction(context: Context): void {
        console.log('player is in stop state');
        context.setState(this);
    }
    toString(): string {
        return 'stop state'
    }
}

class Demo {
    static main(): void {
        const context = new Context();

        const startState = new StartState();
        startState.doAction(context);

        console.log(context.getState()?.toString());

        const stopState = new StopState();
        stopState.doAction(context);

        console.log(context.getState()?.toString());
    }
}

Demo.main();

export {};
