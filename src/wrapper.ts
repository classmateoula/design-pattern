/**
 * 建造者模式
 */

interface Packing {
    pack(): string;
}

interface Item {
    name(): string;
    packing(): Packing;
    price(): number;
}

class Wrapper implements Packing {
    pack() {
        return 'wrapper';
    }
}

class Bottle implements Packing {
    pack() {
        return 'bottle'
    }
}

abstract class Burger implements Item {
    packing () {
        return new Bottle(); 
    }

    abstract price(): number;
    abstract name(): string;
}

abstract class ColdDrink implements Item {
    packing(): Packing {
        return new Wrapper();
    }
    abstract price(): number;
    abstract name(): string;
}

class VegBurger extends Burger {
    price(): number {
        return 25;
    }
    name(): string {
        return 'veg burger';
    }
}

class ChickenBurger extends Burger {
    price(): number {
        return 24;
    }
    name(): string {
        return 'chicken burger';
    }
}

class Coke extends ColdDrink {
    price(): number {
        return 23;
    }
    name(): string {
        return 'coke';
    }
}

class Repsi extends ColdDrink {
    price(): number {
        return 21;
    }
    name(): string {
        return 'repsi';
    }
}

class Meal {
    private items: Item[] = [];

    public addItem(item: Item): void {
        this.items.push(item);
    }

    getCost (): number {
        return this.items.reduce((prev, curr) => prev + curr.price(), 0);
    }

    showItems () {
        this.items.forEach(item => {
            console.log(item.name());
            console.log(item.price());
            console.log(item.packing().pack())
        });
    }
}

class MealBuilder {
    prepareVegMeal() {
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }

    prepareNonVegMeal() {
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Repsi());
        return meal;
    }
}

class BuilderPatternDemo {
    static main(...args: string[]): void {
        const mealBuilder = new MealBuilder();

        const vegMeal = mealBuilder.prepareVegMeal();
        console.log('veg meal');
        vegMeal.showItems();
        console.log('count', vegMeal.getCost());

        const nonVegMeal = mealBuilder.prepareNonVegMeal();
        console.log('non veg meal');
        nonVegMeal.showItems();
        console.log('non veg count', nonVegMeal.getCost());
    }
}

BuilderPatternDemo.main();

export {};
