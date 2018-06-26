export class Player {
    constructor(name) {
        this.name = Math.random().toString(36).substring(4, 10);
        this.balance = 1000;
        this.dname = name;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(netBalance) {
        this.balance = netBalance;
    }

    withdraw(requestedAmount) {
        console.log('withdraw');
        
        if (requestedAmount < this.balance) {
            this.balance = this.balance - requestedAmount;
            console.log(this.balance);
            
        } else {
            return new Error("This requested amount is cannot proceed");
        }
    }

    deposit(depositAmount) {
        this.balance = this.balance + depositAmount;
    }
}