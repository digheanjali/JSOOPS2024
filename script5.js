// // object literal

// let rahul = {
//     firstname: "rahul",
//     lastname: "dighe",

//     // display: function () {
//     //     console.log(this.firstname + this.lastname)
//     // }
// }




// let tushar = {
//     firstname: "tushar",
//     lastname: "pawase",

//     // display: function () {
//     //     console.log(this.firstname + this.lastname)
//     //}
// }

// // function  constructor 

function Person(fn, ln) {
    this.firstName = fn
    this.lastName = ln
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let sakshi = new Person("sakshi", "pawase")
let trupti = new Person("trupti", "pawase")

// console.log(sakshi)
// console.log(trupti)

// // Everything in js is object 
// // Object__proto__ == Parent.Proptype

console.log(sakshi.__proto__ == Person.protype)
Person.protype.display = function () {
    console.log(this.firstName + this.lastName)
}
Person.protype.language = "marathi"
sakshi.display()
trupti.display()
console.log(trupti.language)


// console.log(trupti instanceof Person)
// console.log(trupti.hasOwnProperty('firstName'))
// console.log(trupti.hasOwnProperty('language'))

// let names = ["sakshi", "trupti"]
// console.log(Array.prototype == names.__proto__)
// console.log(names)

// Array.prototype.hello = function () {
//     console.log("hello sakshi")
// }















