class Student {
    private name: string;
    protected studentId: number;
  
    constructor(name: string, studentId: number) {
      this.name = name;
      this.studentId = studentId;
    }
  
    public displayInfo(): void {
      console.log(`Student Name: ${this.name}, Student ID: ${this.studentId}`);
    }
  }
  
  
  const student = new Student("Lucy", 1);
  student.displayInfo();    //Student Name: Lucy, Student ID: 1
  