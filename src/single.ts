/**
 * 单例模式
 */

class Single {
    private static instance = new Single();

    constructor() {
        if(Single.instance) {
            throw new Error('this is single');
        }
    }

    static getInstance(): Single {
        return this.instance;
    }
    showMessage() {
        console.log('jojo single');
    }
}

class SinglePatternDemo {
    static main(): void {
        // 创建一个实例
        const object = Single.getInstance();
        object.showMessage();
    }
}

SinglePatternDemo.main();
