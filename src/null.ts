/**
 * 空对象模式
 */

abstract class AbstractCustomer {
    protected abstract name: string;
    abstract isNil(): boolean;
    abstract getName(): string;
}

class RealCustomer extends AbstractCustomer {
    constructor(protected name: string) {
        super();
    }

    getName(): string {
        return this.name;
    }

    isNil(): boolean {
        return false;
    }
}

class NullCustomer extends AbstractCustomer {
    protected name = '';
    getName(): string {
        throw new Error('no name');
    }

    isNil(): boolean {
        return true;
    }
}

class CustomerFactory {
    static names: string[] = ['Yong Long', 'Liu Bin', 'Hao Tian'];

    static getCustomer(name: string): AbstractCustomer {
        for(const item of this.names) {
            if(name === item) {
                return new RealCustomer(name);
            }
        }
        return new NullCustomer();
    }
}

class Demo {
    static main() {
        const custom1 = CustomerFactory.getCustomer('Yong Long');
        const custom3 = CustomerFactory.getCustomer('Hao Tian');
        const custom2 = CustomerFactory.getCustomer('Jia Qi');
        const custom4 = CustomerFactory.getCustomer('Xuan Jie');

        console.log('自定义用户');

        console.log(custom1.getName());
        console.log(custom3.getName());
        console.log(custom2.getName());
        console.log(custom4.getName());
    }
}

Demo.main();

export {};
