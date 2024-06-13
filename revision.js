class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let anju = new Person()
let anju1 = new Person()
let anju2 = new Person()
let anju3 = new Person()


class PersonB {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
}

let anju4 = new PersonB("anju", "pawase", 12, 44)
let anju5 = new PersonB("anju1", "dighe", 56, 7)


class PersonC {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.lastName = ln
    }
    setRollNo(rn) {
        this.rollNo = rn
    }
    setAge(ag) {
        this.age = ag
    }

}

let anju6 = new PersonC()
anju6.setFirstName("siya")
anju6.setLastName("dighe")
anju6.setRollNo(18)
console.log(anju6)


// using set and get keyword
let info = {
    firstName: "rahul",
    lastName: "dighe",
    firstName: "tushar"    //in object we can directly update the valu of key
}
console.log(info)
info.firstName = "suman"
console.log(info)


// class PersonCD {

//     set firstName(fn){
//         this.first_name =  fn
//     }
//     set lastName(ln){
//         this.last_name =  ln
//     }
//     set sage(ag){
//         this.age =  ag
//     }
//     set srollNo(rn){
//         this.roll =  rn
//     }

//     get firstName(){
//         return this.first_name 
//     }
//     get lastName(){
//         return this.last_name 
//     }
//     get sage(){
//         return this.age 
//     }
//     get srollNo(){
//        return  this.roll 
//     }

// }

// let siya = new PersonCD()
// siya.first_name = "tusha"
// siya.lastName = "pawase"
// siya.sage = 24
// siya.srollNo = 17
// console.log(siya)

// console.log(siya.firstName)
// console.log(siya.lastName)
// console.log(siya.sage)
// console.log(siya.srollNo)



class Bank {
    constructor(fn, bal) {
        this.fullname = fn
        this.balance = bal
        this.transaction = []

    }
    deposit(amt) {
        this.balance = this.balance + amt
        this.transaction.push(amt)
        return this.balance

    }

    withdrawl(amt) {
        amt < this.balance ? this.balance -= amt : "insufficient fund"
        this.transaction.push(-amt)
        return this.balance

    }

    totalDeposite() {
        let td = this.transaction.filter(function (el) {
            return el > 0
        }).reduce(function (acc, el) {
            return acc + el;
        }, 0)
        return td
    }

    totalwithdrawl() {
        let tw = this.transaction.filter(function (el) {
            return el < 0
        }).reduce(function (acc, el) {
            return acc + el
        }, 0)
        return tw
    }
    lastthreetransaction() {
        return this.transaction.slice(-3)
    }
}


let rahulD = new Bank("rahildighe", 56876623)
rahulD.deposit(10000)
rahulD.deposit(1000)
rahulD.deposit(100)
rahulD.deposit(99)
rahulD.deposit(1)



rahulD.withdrawl(8888)
rahulD.withdrawl(9837)
rahulD.withdrawl(763)
rahulD.withdrawl(11)



console.log(rahulD.totalDeposite())
console.log(rahulD.totalwithdrawl())
console.log(rahulD.lastthreetransaction())


















