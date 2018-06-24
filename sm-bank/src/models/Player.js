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