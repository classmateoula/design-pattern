/**
 * 传输对象模式（Transfer Object Pattern）
 */

class StudentVO {
    constructor(private name: string, private rollNo: number) {}

    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getRollNo() {
        return this.rollNo;
    }
    setRollNo(v: number) {
        this.rollNo = v;
    }
}

class StudentBO {
    private student: StudentVO[] = [];

    constructor() {
        const student1 = new StudentVO('佳琪', 0);
        const student2 = new StudentVO('航鑫', 1);
        this.student.push(student1);
        this.student.push(student2);
    }
    deleteStudent(s: StudentVO) {
        const index = this.student.findIndex(item => item.getName() === s.getName());
        this.student.splice(index, 1);
        console.log(`已删除 ${index}`);
    }

    getAllStudent() {
        return this.student;
    }

    getStudent(rollNo: number) {
        return this.student.find(item => item.getRollNo() === rollNo);
    }

    updateStudent(student: StudentVO) {
        const index = this.student.findIndex(item => item.getRollNo() === student.getRollNo());
        if(index === -1) {
            return;
        }
        this.student.splice(index, 1, student);
    }
}

class Demo {
    static main(): void {
        const studentObj = new StudentBO();
        // 输出所有学生
        studentObj.getAllStudent().forEach(item => {
            console.log(`显示学生姓名: ${item.getName()}`);
        });

        // 更新学生
        const student1 = studentObj.getAllStudent()[0];
        student1.setName('JOJO');
        studentObj.updateStudent(student1);

        // 获取学生
        const stu = studentObj.getStudent(0);
        console.log(`获取到学生 ${stu?.getName()}`);
    }
}

Demo.main();
