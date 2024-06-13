
// object literal 
let anjali = {
    firstName: "anjali",
    lastName: "pawase",
    age: 43,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(anjali.firstName)
console.log(anjali.lastName)
console.log(anjali.age)
anjali.display()



let rahul = {
    firstName: "rahul",
    lastName: "dighe",
    age: 33,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
rahul.display()

// function constructor 
function PersonC(fn, ln, age) {
    this.firstName = fn
    this.lastName = ln
    this.age = age
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let rahulA = new PersonC("rahul", "dighe", 33)
rahulA.display()
console.log(rahulA)

function Vehicle(cl, type) {
    this.color = cl
    this.type = type
}
let audi = new Vehicle("blue", "sedane")

// Es6 class
class PersonD {
    constructor(fn, ln, age) {
        this.firstName = fn
        this.lastName = ln
        this.age = age

    }
    display() {
        console.log(this.firstName + this.lastName)
    }
}

let rahuld = new PersonD("rahul", "dighe", 33)
console.log(rahuld.firstName)
console.log(rahuld.lastName)
console.log(rahuld.age)
rahuld.display()


class Bank {
    constructor(fn, bal) {
        this.fullName = fn
        this.balance = bal
        this.transaction = []
    }

    deposit(amt) {
        this.balance = this.balance + amt
        this.transaction.push(amt)
        return this.balance
    }

    withdrawl(amt) {
        if (amt < this.balance) {
            this.balance = this.balance - amt
            this.transaction.push(-amt)
        }
        else {
            console.log("Insuffcient fund")
        }
        return this.balance
    }

    lastThreeTransactions() {
        return this.transaction.slice(-3)
    }
}

let anjaliD = new Bank("anjali pawase", 88888888)
console.log(anjaliD.withdrawl(6757))
anjaliD.withdrawl(6525)
anjaliD.withdrawl(333)
anjaliD.deposit(54)
console.log(anjaliD.lastThreeTransactions())



