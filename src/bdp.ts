/**
 * 业务代表模式
 */

interface BusinessService {
    doProcessing(): void;
}

class EJBService implements BusinessService {
    doProcessing(): void {
        console.log('processing task by invoke EJB Service');
    }
}

class JMService implements BusinessService {
    doProcessing(): void {
        console.log('JMS service');
    }
}

class BusinessLookUp {
    getBusinessServer(type: string): BusinessService {
        if (type === 'JMS') {
            return new JMService();
        } else {
            return new EJBService();
        }
    }
}

class BussinessDelegate {
    private lookupService = new BusinessLookUp();
    private businessService?: BusinessService;
    private type?: string;

    setServiceType(type: string): void {
        this.type = type;
    }

    doTask(): void {
        this.businessService = this.lookupService.getBusinessServer(this.type!);
        this.businessService.doProcessing();
    }
}

class Client1 {
    constructor(public businessService: BussinessDelegate) { }

    doTask(): void {
        this.businessService.doTask();
    }
}

class Demo {
    static main(): void {
        const b = new BussinessDelegate();
        b.setServiceType('EJB');

        const client = new Client1(b);
        client.doTask();

        b.setServiceType('JMS');
        b.doTask();
    }
}

Demo.main();

export {};
