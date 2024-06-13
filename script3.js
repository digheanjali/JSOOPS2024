
class Calculator {
    // same class , same method , different signature
    // addition(x, y) {
    //     console.log(x + y)
    // }
    // addition(x, y, z) {
    //     console.log(x + y + z)
    // }

    // addition(x, y, z, a) {
    //     console.log(x + y + z + a)
    // }

    // same class , same method name , different signature ,overloading

    addition(x, y, z, a) {

        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }
}

let a = new Calculator()
a.addition(12, 3)
a.addition(12, 3, 3)
a.addition(12, 3, 3, 4)

//2)======== override 
// different class , same method name and same signature

class WorldBank {
    save() {
        console.log("I am save from worldbank")
    }
    loan() {
        console.log("I am loan from worldbank")
    }
}
class SBI extends WorldBank {



    loan() {
        console.log('I am loan from SBI')
    }

    save() {
        console.log("I am save from SBI")
    }

}
let nagpur = new SBI()
nagpur.save()
nagpur.loan()