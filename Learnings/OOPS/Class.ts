
//2- using class keyword we create object.
// class - blueprint that contains variables and methods
//method is defined within class and function is defined outside class


class Person {
    firstName: string;
    lastName: string;
    age: number;

    //constructor will only assign the values it doesnt return anything
    constructor(firstname: string, lastname: string, age: number) {
        this.firstName = firstname,
            this.lastName = lastname,
            this.age = age
    }

    getfullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person('Arshi', 'Amir', 20);  // using new keyword will create object
console.log(person.getfullName())


//directly assigning values inside class
class User {
    name: string = "Arshi";
    grade: number = 90;
    printName() {
        console.log(`This is user name : ${this.name}`)
    };

}
let nameobj = new User();
console.log(nameobj.grade)


//Method overloading
// same method name but different paramters this is also type of polymorphism
class PriceCalculation {
    calculatePrice(price: number): number;
    calculatePrice(price: number, quantity: number): number;
    calculatePrice(price: number, quantity?: number): number {
        if (quantity === undefined) {
            return price;
        }
        return quantity * price

    }

}
let price = new PriceCalculation();
console.log(price.calculatePrice(12))
console.log(price.calculatePrice(2, 2))


