/**
 * 组合模式
 */

class Employee {
    private id = (+new Date()).toString(16) + (Math.random() * 100 >> 0);
    private suboardinates: Employee[] = [];

    constructor(private name: string, private dept: string, private salary: number) { }

    add(value: Employee): void {
        this.suboardinates.push(value);
    }

    remove(value: Employee): void {
        const index = this.suboardinates.findIndex(item => item.id === value.id);
        this.suboardinates.splice(index, 1);
    }

    getSuboardnates(): Employee[] {
        return this.suboardinates;
    }

    toString(): string {
        return `name: ${this.name}, dept: ${this.dept}, salary: ${this.salary}`;
    }
}

class CompositePatternDemo {
    static main(): void {
        const CEO = new Employee('JOJO', 'CEO', 3000);

        const headSales = new Employee('Luo', 'Head sales', 2000);

        const headMarketing = new Employee('Ding', 'head marketing', 1500);

        const ck1 = new Employee('TT1', 'marketing', 1200);
        const ck2 = new Employee('TT2', 'marketing', 1200);

        const save1 = new Employee('jojo2', 'sales', 1200);
        const save2 = new Employee('jojo3', 'sales', 1200);

        CEO.add(headSales);
        CEO.add(headMarketing);

        headSales.add(save1);
        headSales.add(save2);

        headMarketing.add(ck1);
        headMarketing.add(ck2);

        console.log('打印所有员工');

        CEO.getSuboardnates().forEach(item => {
            console.log(item);
            item.getSuboardnates().forEach(sub => {
                console.log('sub', sub);
            });
        });
    }
}

export {};

CompositePatternDemo.main();
