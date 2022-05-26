/**
 * 数据访问对象模式 Data Access Object Pattern
 */

class Student {
    constructor(private name: string, private rollNo: string) { }
    getName(): string {
        return this.name;
    }
    setName(v: string): void {
        this.name = v;
    }
    getRollNo(): string {
        return this.rollNo;
    }
    setRollNo(v: string): void {
        this.rollNo = v;
    }
}

interface StudentDao {
    getAllStudents(): Student[];
    getStudent(rollNo: string): Student;
    updateStudent(student: Student): void;
    deleteStudent(student: Student): void;
}

class StudentDaoImpl implements StudentDao {
    private students: Student[];
    constructor() {
        const students = [];
        const student1 = new Student('天哥', '1');
        const student2 = new Student('彬哥', '2');
        const student3 = new Student('龙哥', '3');
        students.push(student1, student2, student3);
        this.students = students;
    }
    deleteStudent(student: Student): void {
        const index = this.students.findIndex(item => item.getRollNo() === student.getRollNo());
        if (index === -1) {
            return;
        }
        this.students.splice(index, 1);
    }
    getAllStudents(): Student[] {
        return this.students;
    }
    getStudent(rollNo: string): Student {
        const student = this.students.find(item => item.getRollNo() === rollNo);
        if (!student) {
            throw new Error('没找到学生');
        }
        return student;
    }
    updateStudent(student: Student): void {
        const index = this.students.findIndex(item => item.getName() === student.getName());
        if (index === -1) {
            return;
        }
        this.students.splice(index, 1, student);
    }
}

class Demo {
    static main(): void {
        const dao = new StudentDaoImpl();

        dao.getAllStudents().forEach(item => {
            console.log(`学生名： ${item.getName()}`);
        });

        const student1 = dao.getAllStudents()[0];
        student1.setName('JOJO');
        dao.updateStudent(student1);

        const s2 = dao.getStudent('1');
        console.log(`查询到学生: ${s2.getName()}, 啥也不是${s2.getRollNo()}`);
    }
}

Demo.main();

export {};
