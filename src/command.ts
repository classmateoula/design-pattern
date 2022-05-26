/**
 * 命令模式
 */

interface Order {
    execute(): void;
}

class Stock {
    private name = 'ABC';
    private quantity = 10;

    buy(): void {
        console.log(`买入商品 名称：${this.name}, 数量: ${this.quantity}`);
    }

    sell(): void {
        console.log(`卖出商品 名称：${this.name}, 数量：${this.quantity}`);
    }
}

class BuyStock implements Order {
    constructor(private abcStock: Stock) {}

    execute(): void {
        this.abcStock.buy();
    }
}

class SellStock implements Order {
    constructor(private abcStock: Stock) {}

    execute(): void {
        this.abcStock.sell();
    }
}

class Broker {
    private orderList: Order[] = [];

    takeOrder(order: Order): void {
        this.orderList.push(order);
    }

    placeOrders(): void {
        this.orderList.forEach(order  => {
            order.execute();
        });

        this.orderList = [];
    }
}

class CommandPatternDemo {
    static main(): void {
        const abcStock = new Stock();

        const buyStockOrder = new BuyStock(abcStock);
        const sellStockOrder = new SellStock(abcStock);

        const borker = new Broker();
        borker.takeOrder(buyStockOrder);
        borker.takeOrder(sellStockOrder);

        borker.placeOrders();
    }
}

CommandPatternDemo.main();

export {};
