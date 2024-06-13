// object literal

let anjali = {
    firstName: "anjali",
    lastName: "pawase",
    age: 25,
    rollNo: 34
}

let rahul = {
    firstName: "rahul",
    lastName: "dighe",
    age: 27,
    rollNo: 35
}

// 1 object ------> 4 lines 
// 100 object ------> 400 lines 
// template ------> object

// user defined data type ===> object (class)

// program 2
// comment
class Person {
    firstName
    lastName
    age
    rollNo

}

let anjaliA = new Person()
console.log(anjaliA)
anjaliA.firstName = "anjaliA"
anjaliA.lastName = "pawaseA"
anjaliA.age = 25
anjaliA.rollNo = 56
console.log(anjaliA)

// // retrive  // dot notation and bracket notation
// console.log(anjaliA.firstName)
// console.log(anjaliA['firstName'])
// // add   // dot notation and bracket notation
// anjaliA.language = "Marathi"
// anjaliA['city'] = "Pune"
// console.log(anjaliA)
// // // update  // dot notation and bracket notation
// anjaliA['city'] = "nagpur"
// anjaliA.language = "Hindi"
// //delete  // dot notation and bracket notation
// delete amolA.city
// delete amolA['city']

class PersonB {
    // properties 

    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }

    // method
    displayname() {
        console.log(this.firstName + this.lastName)

    }

}

let anjaliB = new PersonB("anjaliB", "pawaseB", 26, 44)
console.log(anjaliB)
// anjaliB.city = "nagpur"
// console.log(anjaliB)
// anjaliB.city = "pune"
// console.log(anjaliB)


// set and get method

class PersonC {
    // properties value - set
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.lastName = ln
    }
    setAge(ag) {
        this.age = ag
    }
    setRollNo(rn) {
        this.rollNo = rn
    }



    // properties values - get
    getFirstName() {
        console.log(this.firstName)
    }
    getLastName() {
        console.log(this.lastName)
    }
    getAge() {
        console.log(this.age)
    }

    getRollNo() {
        console.log(this.rollNo)
    }


}

let anjuC = new PersonC()
console.log(anjuC)

anjuC.setFirstName("anjali")
anjuC.setLastName("pawase")
anjuC.setAge(13)
anjuC.setRollNo(23)
console.log(anjuC)

anjuC.getAge()
anjuC.getFirstName()
anjuC.getLastName()
anjuC.getRollNo()

// program 4


let info = {
    fullName: 'anjali',
    lastName: 'pawase'
}
info.city = "nashik"


// set and get


class PersonD {

    set firstN(fn) {
        this.firstName = fn
    }
    get firstN() {
        return this.firstName
    }


    set lastN(ln) {
        this.lastName = ln
    }
    get lastN() {
        return this.lastName
    }

    set Age(ag) {
        this.age = ag
    }
    get Age() {
        return this.age
    }
    set RollN(rn) {
        this.rollNo = rn
    }
    get RollN() {
        return this.rollNo
    }

}

let anjaliD = new PersonD()

anjaliD.Age = 12
anjaliD.lastN = "dighe"
anjaliD.firstN = "anjali"
anjaliD.RollN = 34

console.log(anjaliD)

console.log(anjaliD.Age)
console.log(anjaliD.lastN)
console.log(anjaliD.firstN)
console.log(anjaliD.RollN)







