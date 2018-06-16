export class Player {
    constructor(name) {
        this.name = name;
        this.balance = 1000;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(netBalance) {
        this.balance = netBalance;
    }

    withdraw(requestedAmount) {
        if (requestedAmount < this.balance) {
            this.balance - requestedAmount;
        } else {
            return error = "This requested amount is cannot proceed";
        }
    }

    deposit(depositAmount) {
        this.balance = this.balance + depositAmount;
    }
}