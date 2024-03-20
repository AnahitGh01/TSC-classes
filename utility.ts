class Utility {
    static formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString;
    }

    static capitalizeString(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Testing the utility class
const today = new Date();
console.log("Formatted Date:", Utility.formatDate(today)); // Output: Formatted Date: March 20, 2024

console.log("Random String:", Utility.generateRandomString(5)); // Output: Random String: 8b8ns
console.log("Capitalized String:", Utility.capitalizeString("hi")); // Output: Capitalized String: Hi