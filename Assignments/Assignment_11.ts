// 1. 1. Create an abstract class Payment with:
//  Abstract method pay(amount: number)
//  Concrete method generateReceipt()
// Create child classes:
//  CreditCard
//  UPI

abstract class Payment {
    abstract pay(amount: number): void;
    generateReceipt() {
        console.log('Recipt generated')
    }
}

class CreditCard extends Payment {
    pay(amount: number): void {
        console.log(`Pay via CreditCard : ${amount}`)
    }
}
class UPI extends Payment {
    pay(amount: number): void {
        console.log(`Pay via UPI: ${amount}`)
    }
}
let cd = new CreditCard();
cd.pay(1000);

let upi = new UPI();
upi.pay(500);



// Create abstract class Shape
//  Abstract method area()

//  Child: Create non abstract below classes which define
// method area() and calculate area of Rectangle & circle
// respectively.
abstract class Shape {
    abstract area(): void;
}

class Rectangle extends Shape {
    width: number = 7
    length: number = 8;
    area(): void {
        console.log(`Area of rectangle: ${this.width * this.length} `)
    }
}
class Circle extends Shape {
    radius: number = 7
    area(): void {
        console.log(`Area of circle: ${this.radius * this.radius * Math.PI} `)
    }
}

let c = new Rectangle();
c.area();

let cir = new Circle();
cir.area();


// Create abstract class Bank with following method
// a. abstract calculateInterest()
//  Implement:
// a. SBI
// b. HDFC

abstract class Bank {
    abstract calculateInterest(amount: number): void
}

class SBI extends Bank {
    calculateInterest(amount: number): number {
        return amount * 0.05
    }
}
class HDFC extends Bank {
    calculateInterest(amount: number): number {
        return amount * 0.07
    }
}
let s = new SBI();
console.log(s.calculateInterest(500));

let h = new HDFC();
console.log(h.calculateInterest(500))