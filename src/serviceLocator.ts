/**
 * 服务定位武器
 */

interface Service {
    getName(): string;
    execute(): void;
}

class Service1 implements Service {
    execute(): void {
        console.log('exec server1');
    }

    getName(): string {
        return 'server 1';
    }
}

class Service2 implements Service {
    execute(): void {
        console.log('exec server 1');
    }

    getName(): string {
        return 'server 2';
    }
}

class InitialContext {
    lookup(name: string) {
        if(name === 'Service1') {
            console.log('显示服务1');
            return new Service1();
        } else if(name === 'Service2') {
            console.log('显示服务2');
            return new Service2();
        }
    }
}

class Cache1 {
    private list: Service[] = [];
    getService(name: string) {
        return this.list.find(item => item.getName() === name);
    }
    addService (newService: Service) {
        if(this.list.some(item => item.getName() === newService.getName())) {
            return;
        }
        this.list.push(newService);
    }
}

class ServiceLocator {
    private static cache = new Cache1();

    static getServeice(name: string) {
        const service = this.cache.getService(name);

        if(!service) {
            return service;
        }

        const context = new InitialContext();
        const service1 = context.lookup(name);
        this.cache.addService(service1!);
        return service1;
    }
}

class Demo {
    static main(): void {
        let service = ServiceLocator.getServeice('Service1');
        service?.execute();
        service = ServiceLocator.getServeice('Service2');
        service?.execute();
        service = ServiceLocator.getServeice('Service1');
        service?.execute();
        service = ServiceLocator.getServeice('Service2');
        service?.execute();
    }
}

Demo.main();

export {};
