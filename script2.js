

// =====================Inheritance===================
// usingn constructor
// // Two class two constructor 

// class student {
//     constructor(fn, ln, rollno) {
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo = rollno
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher {
//     constructor(fn, ln, rollno, salary) {
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo = rollno
//         this.salary = salary
//     }
//     displaysalary() {
//         console.log(this.salary)
//     }
//     displayTName() {
//         console.log(this.firstName + this.lastName)
//     }

// }

// let anjaliA = new Teacher("anjaliA", "pawase", 18, 8478)
// console.log(anjaliA.firstName)
// console.log(anjaliA.lastName)
// console.log(anjaliA.rollNo)
// console.log(anjaliA.salary)

// anjaliA.displayTName()
// anjaliA.displaysalary()


// let siya = new student("siya", "dighe", 2)
// console.log(siya.firstName)
// console.log(siya.lastName)
// console.log(siya.rollNo)




// // siya.displayName()

// // // two class and one constructor


// class student {
//     constructor(fn, ln, adharno) {
//         this.firstname = fn
//         this.lastname = ln
//         this.adharNo = adharno

//     }
//     displayName() {
//         console.log(this.firstname + this.lastname)
//     }
// }

// class Teacher extends student {
//     salary = 10000
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let tushar = new Teacher("tushar", "pawase", 7622)
// console.log(tushar.firstname)
// console.log(tushar.lastname)
// console.log(tushar.adharNo)
// console.log(tushar.salary)

// displayName()
// // displaySalary()



// two class two constructor (with super call)

// class studentB {
//     constructor(fn, ln, adharNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.adharno = adharNo

//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)

//     }
// }

// class TeacherB extends studentB {
//     constructor(fn, ln, adharNo, salary) {
//         super(fn, ln, adharNo)
//         this.salary = salary

//     }
//     displaySalary() {
//         console.log(this.salary)

//     }
// }


// let anjaliA = new TeacherB("anjaliA", "pawase", 8579, 857384)
// console.log(anjaliA.firstName)
// console.log(anjaliA.lastName)
// console.log(anjaliA.adharno)
// console.log(anjaliA.salary)

// anjaliA.displayName()
// // anjaliA.displaySalary()
// // 


// //  three class with 3 constructor


// class Grandfather {
//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastName = ln

//     }
//     displayGName() {
//         console.log(this.firstName + this.lastName)
//     }
// }


// class Father extends Grandfather {
//     constructor(fn, ln, ffn) {
//         super(fn, ln)
//         this.fName = ffn
//     }
//     displayFName() {
//         console.log(this.fName + this.lastName)
//     }
// }

// class Son extends Father {
//     constructor(fn, ln, ffn, ssn) {
//         super(fn, ln, ffn)
//         this.sName = ssn
//     }
//     displaySName() {
//         console.log(this.sName + this.lastName)
//     }
// }


// let tushar = new Son("ambadas", "pawase", "santosh", "tushar")

// console.log(tushar.firstName)
// console.log(tushar.lastName)
// console.log(tushar.fName)
// console.log(tushar.sName)

// tushar.displayGName()
// tushar.displayFName()
// tushar.displaySName()

// // 

class Mother {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayMName() {
        console.log(this.firstName + this.lastName)
    }
}

class Son extends Mother {
    constructor(fn, ln, sfn) {
        super(fn, ln)
        this.sName = sfn
    }
    displaySName() {
        console.log(this.sName + this.lastName)
    }
}

class Daughter extends Mother {
    constructor(fn, ln, dfn) {
        super(fn, ln)
        this.dName = dfn
    }
    displayDName() {
        console.log(this.dName + this.lastName)
    }
}

let sakshi = new Daughter("anita", "pawase", "sakshi")
console.log(sakshi.firstName)
console.log(sakshi.lastName)
console.log(sakshi.dName)

sakshi.displayMName()
sakshi.displayDName()


let Ayush = new Son("anita", "pawase", "ayush")
console.log(Ayush.firstName)
console.log(Ayush.lastName)
console.log(Ayush.sName)

Ayush.displayMName()
Ayush.displaySName()




















