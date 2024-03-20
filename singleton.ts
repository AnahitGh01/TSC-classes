class Singleton {
    private static instance: Singleton;

    private constructor() {} // Private constructor to prevent instantiation outside the class

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Testing the Singleton pattern
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true (Both instances are the same)