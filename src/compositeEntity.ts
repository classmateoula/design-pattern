/**
 * 组合实体模式
 */

class DependentObject1 {
    private data?: string;

    setData(v: string): void {
        this.data = v;
    }

    getData(): string | undefined {
        return this.data;
    }
}

class DependentObject2 {
    private data?: string;

    setData(v: string): void {
        this.data = v;
    }

    getData(): string | undefined {
        return this.data;
    }
}

class CoarseGrainedObject {
    do1 = new DependentObject1();
    do2 = new DependentObject2();

    setData(d1: string, d2: string): void {
        this.do1.setData(d1);
        this.do2.setData(d2);
    }

    getData(): string[] {
        return [this.do1.getData()!, this.do2.getData()!];
    }
}

class CompositeEntity {
    private cgo = new CoarseGrainedObject();

    setData(d1: string, d2: string): void {
        this.cgo.setData(d1, d2);
    }

    getData() {
        return this.cgo.getData();
    }
}

class Client1 {
    private compositeEntity = new CompositeEntity();

    printData(): void {
        this.compositeEntity.getData().forEach(item => {
            console.log(`data: ${item}`);
        });
    }

    setData(d1: string, d2: string): void {
        this.compositeEntity.setData(d1, d2);
    }
}

class Demo {
    static main(): void {
        const client = new Client1();
        client.setData('test', 'data');

        client.printData();
        client.setData('secend data', 'data1');
        client.printData();
    }
}

Demo.main();

export {}
