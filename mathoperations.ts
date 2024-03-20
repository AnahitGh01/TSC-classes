class MathOperations {
    static add(num1: number, num2: number): number {
        return num1 + num2;
    }

    static subtract(num1: number, num2: number): number {
        return num1 - num2;
    }

    static multiply(num1: number, num2: number): number {
        return num1 * num2;
    }

    static divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }
}

// Testing the class
console.log("Addition:", MathOperations.add(5, 3));        // Output: 8
console.log("Subtraction:", MathOperations.subtract(10, 4)); // Output: 6
console.log("Multiplication:", MathOperations.multiply(6, 7)); // Output: 42
console.log("Division:", MathOperations.divide(20, 4));      // Output: 5