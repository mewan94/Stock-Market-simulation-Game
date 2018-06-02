export class Player {
    constructor(name) {
        this.name = name;
        this.balance = 1000;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(netBalance) {
        netBalance = this.balance;
    }

    withdraw(requestedAmount) {
        if (requestedAmount < this.balance) {
            this.balance - requestedAmount;
        } else {
            return error = "This requested amount is not No Need";
        }
    }

    deposit(depositAmount) {
        this.balance = this.balance + depositAmount;
    }
}