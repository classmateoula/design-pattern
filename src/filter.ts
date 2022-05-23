/**
 * 过滤器模式｜标准模式
 */

class Person {
    constructor(private name: string, private gender: string, private maritalStatus: string) { }

    getName(): string {
        return this.name;
    }

    getGender(): string {
        return this.gender;
    }

    getMaritalStatus(): string {
        return this.maritalStatus;
    }
}

interface Criteria {
    meetCriteria(persons: Person[]): Person[];
}

class CriteriaMale implements Criteria {
    meetCriteria(persons: Person[]): Person[] {
        const malepersons = [];
        for (let item of persons) {
            if (item.getGender() === 'MALE') {
                malepersons.push(item);
            }
        }
        return malepersons;
    }
}

class CriteriaFemale implements Criteria {
    meetCriteria(persons: Person[]): Person[] {
        const femalePersons = [];
        for (let item of persons) {
            if (item.getGender() === 'FEMALE') {
                femalePersons.push(item);
            }
        }
        return femalePersons;
    }
}

class CriteriaSingle implements Criteria {
    meetCriteria(persons: Person[]): Person[] {
        const singlePersons = [];
        for(const item of persons) {
            if(item.getMaritalStatus() === 'SINGLE') {
                singlePersons.push(item);
            }
        }
        return singlePersons;
    }
}

class AndCriteria implements Criteria {
    constructor(private criteria: Criteria, private otherCriteria: Criteria) { }
    meetCriteria(persons: Person[]): Person[] {
        const firstCriteriaPersons = this.criteria.meetCriteria(persons);

        return this.otherCriteria.meetCriteria(firstCriteriaPersons);
    }
}

class OrCriteria implements Criteria {
    constructor(private criteria: Criteria, private otherCriteria: Criteria) { }
    meetCriteria(persons: Person[]): Person[] {
        const list = this.criteria.meetCriteria(persons);
        const otherCriteria = this.otherCriteria.meetCriteria(persons);

        for(const item of otherCriteria) {
            if(list.some(person => person.getGender() === item.getGender())) {
                list.push(item);
            }
        }
        return list;
    }
}

class CriteriaPatternDemo {
    static main(): void {
        const persons = [];

        persons.push(
            new Person('JOJO1', 'MALE', 'SINGLE'),
            new Person('JOJO2', 'MALE', 'MARRIED'),
            new Person('JOJO3', 'FEMALE', 'SINGLE'),
            new Person('JOJO4', 'FEMALE', 'MARRIED'),
        );

        console.log(persons);

        const male = new CriteriaMale();
        const female = new CriteriaFemale();
        const single = new CriteriaSingle();

        const singleMale = new AndCriteria(single, male);
        const singleOrFemale = new OrCriteria(single, female);

        CriteriaPatternDemo.printPersons(male.meetCriteria(persons));

        CriteriaPatternDemo.printPersons(female.meetCriteria(persons));

        CriteriaPatternDemo.printPersons(singleMale.meetCriteria(persons));

        CriteriaPatternDemo.printPersons(singleOrFemale.meetCriteria(persons));
    }

    static printPersons(persons: Person[]): void {
        for(const item of persons) {
            console.log(`Person name ${item.getName()}, genter: ${item.getGender()}, status: ${item.getMaritalStatus()}`);
        }
    }
}

CriteriaPatternDemo.main();
