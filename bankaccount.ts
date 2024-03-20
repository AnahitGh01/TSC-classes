class BankAccount {
    private accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited. New balance: ${this.balance}`);
        } else {
            console.log("Invalid amount for deposit.");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid amount for withdrawal.");
        }
    }
}


const account = new BankAccount("1234567890");
account.deposit(100);
account.withdraw(50);

//100 deposited. New balance: 100
//50 withdrawn. New balance: 50