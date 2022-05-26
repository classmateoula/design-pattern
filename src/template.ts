/**
 * 模板模式
 */

abstract class Game {
    abstract initialize(): void;
    abstract startPlay(): void;
    abstract endPlay(): void;

    play(): void {
        this.initialize();

        this.startPlay();

        this.endPlay();
    }
}

class Cricket extends Game {
    endPlay(): void {
        console.log('cricket 游戏结束');
    }

    initialize(): void {
        console.log('游戏初始化');
    }

    startPlay(): void {
        console.log('游戏开始');
    }
}

class Football extends Game {
    endPlay(): void {
        console.log('足球游戏结束');
    }

    initialize(): void {
        console.log('初始化足球游戏');
    }

    startPlay(): void {
        console.log('游戏开始');
    }
}

class Demo {
    static main(): void {
        let game = new Cricket();
        game.play();
        console.log('???');
        game = new Football();
        game.play();
    }
}

Demo.main();

export {};
