class Animal {
    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `Hi, I'm ${this.name}, and I am ${this.age} years old.`;
    }
}


const myAnimal = new Animal("Leo", 5);
console.log(myAnimal.introduce()); // Output: Hi, I'm Leo, and I am 5 years old.