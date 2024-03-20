class Counter {
    static count: number = 0;

    static increment(): void {
        Counter.count++;
    }

    static getCount(): number {
        return Counter.count;
    }
}

// Testing the class
Counter.increment();
console.log(Counter.getCount()); // Output: 1

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 3