/**
 * 迭代器模式
 */

interface Iterator1<T> {
    hasNext(): boolean;
    next(): { value: T | undefined };
    [Symbol.iterator](): Iterator1<T>;
}

interface Container {
    getInterator(): Iterator1<string>;
}

class NameInterator<T> implements Iterator1<T> {
    index = 0;

    constructor(private names: T[]) {}

    hasNext(): boolean {
        return this.index < this.names.length;
    }

    next(): { value: T } {
        if(this.hasNext()) {
            return { value: this.names[this.index++] };
        }
        throw new Error('JOJO');
    }
    [Symbol.iterator]() {
        if(!this.hasNext()) {
            console.log(101);
        }
        return this;
    }
}

class NameRespository implements Container {
    names = ['jiaqi', 'xiangyun', 'hongjuan', 'hangxin'];
    getInterator(): Iterator1<string> {
        return new NameInterator(this.names);
    }
}

class Demo {
    static main(): void {
        const names = new NameRespository();
        for(const item of names.getInterator()) {
            console.log(item);
        }
    }
}

Demo.main();

export {};
