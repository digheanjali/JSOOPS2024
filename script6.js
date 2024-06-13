
// number as a parameter and number as return type
function addition(x, y) {
    return x + y
}
let q1 = addition(12, 4)
console.log(q1)

// string as parameter and string as return type 
function greetWorld(name) {
    return "welcome " + name
}
let q2 = greetWorld("anjali")
console.log(q2)

// boolean as parameter and boolean as a return type 

let haveVehicle = true
let ageD = 18
function canDrive(haveVehicle, age) {
    if (haveVehicle && age >= 18) {
        return true
    }
    else {
        return false
    }
}
let q3 = canDrive(haveVehicle, ageD)
console.log(q3)

// array as parameter and array as return type 
let city = ["pune", "mumbai", "banglore", "kolkata"]
function addCity(arr) {
    arr.push("nagpur")
    return arr
}
let q4 = addCity(city)
console.log(q4)

// program 5
// object as  parameter and oject as return type

let info = {
    firstName: "anjali",
    lastName: "pawase"
}
function addLangauge(obj) {
    obj.lanuage = "marathi"
    return obj
}
let q5 = addLangauge(info)
console.log(q5)

// user defined class object as parameter and as return type

class Person {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

}
let anju = new Person("anju", "dighe")
function addCity(uobj) {
    uobj.city = "pune"
    return uobj
}
let q6 = addCity(anju)
console.log(q6)

// set as parameter and set as return 
// map as parameter and map as a return 

// function as a paramter
// function as a return type
// function declaration


// function additionC(x,y){
//     return x + y
// }

// let a = additionC(12,3)
// console.log(a)


// let  additionD = function(x,y){
//     return x + y
// }
// let b = addition(23,4)
// console.log(b)


// arrow function
let additionE = (x, y) => {
    return x + y
}
let q11 = additionE(12, 4)
console.log(q11)

// program 1
let x = 10
console.log(x)
x = 200
console.log(x)

let add = function (x, y) {
    console.log(x + y)
}
add(12, 4) // call 
console.log(add)

// program 2
add = function (x, y) {
    return x + y
}
function additionA(fn, x, y) {

    //let x = 10
    // let y = 20
    // let fn = function(x,y){
    //     return x + y
    // }
    let q1 = fn(x, y)
    return q1
}
let q22 = additionA(add, 10, 20)
console.log(q22)


let sub = function (x, y) {
    return x - y
}

//console.log(sub)
function subtraction(fn, a, b) {
    // let fn = function(x,y){
    //     return x - y
    // }
    //let a = 12
    // let b = 3 


    let q2 = fn(a, b)
    return q2
}
let q32 = subtraction(sub, 12, 3)
console.log(q32)

// program 4 -------------------
// function ads a return type
function greet() {
    return function () {
        console.log("hello")
    }
}
let a = greet()
console.log(a)

// let a = function(){
//     console.log("hello")
// }
a()
