/**
 * 拦截过滤器模式 (Intercepting Filter)
 */

interface Filter {
    execute(req: string): void;
}

class AuthenticationFilter implements Filter {
    execute(req: string): void {
        console.log(`anth执行命令:${req}`);
    }
}

class DebugFilter implements Filter {
    execute(req: string): void {
        console.log(`debug 执行命令: ${req}`);
    }
}

class Target {
    execute(req: string): void {
        console.log(`exec target ${req}`);
    }
}

class FilterChain {
    private filters: Filter[] = [];
    private target?: Target;

    addFilter(f: Filter) {
        this.filters.push(f);
    }
    execute(req: string) {
        this.filters.forEach(item => {
            item.execute(req);
        });
        this.target?.execute(req);
    }
    setTarget(t: Target) {
        this.target = t;
    }
}

class FilterManger {
    private filterChain: FilterChain;
    constructor(target: Target) {
        this.filterChain = new FilterChain();
        this.filterChain.setTarget(target);
    }
    setFilter(f: Filter) {
        this.filterChain.addFilter(f);
    }
    filterRequest(req: string) {
        this.filterChain.execute(req);
    }
}

class Client1 {
    filterManger?: FilterManger;
    setFilterManger(f: FilterManger) {
        this.filterManger = f;
    }
    sendRequest(req: string): void {
        this.filterManger?.filterRequest(req);
    }
}

class Demo {
    static main(): void {
        const filterManger = new FilterManger(new Target());
        filterManger.setFilter(new AuthenticationFilter());
        filterManger.setFilter(new DebugFilter());

        const client = new Client1();
        client.setFilterManger(filterManger);
        client.sendRequest('HOME');
    }
}

Demo.main();

export {};
