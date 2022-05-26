/**
 * MVC 模式
 */

class Student {
    private rollNo?: string;
    private name?: string;
    getRollNo(): string | undefined {
        return this.rollNo;
    }
    setRollNo(v: string): void {
        this.rollNo = v;
    }

    getName(): string | undefined {
        return this.name;
    }

    setName(v: string): void {
        this.name = v;
    }
}

class StudentView {
    printStudentDetails(name?: string, rollNo?: string): void {
        console.log(`student name: ${name}, roll no: ${rollNo}`);
    }
}

class StudentContainer {
    constructor(private model: Student, private view: StudentView) {}

    setStudentName(name: string): void {
        this.model.setName(name);
    }

    getStudentName(): string | undefined {
        return this.model.getName();
    }

    setStudentRollNo(rollNo: string): void {
        this.model.setRollNo(rollNo);
    }

    getStudentRollNo(): string | undefined {
        return this.model.getRollNo();
    }

    updateView(): void {
        this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
    }
}

class Demo {
    static main(): void {
        const model = this.retrieveStudentFromDatabase();
        const view = new StudentView();
        const controller = new StudentContainer(model, view);

        controller.updateView();

        controller.setStudentName('Xing Yang');

        controller.updateView();
    }

    static retrieveStudentFromDatabase() {
        const student = new Student();
        student.setName('jia qi');
        student.setRollNo('10');
        return student;
    }
}

Demo.main();

export {};
