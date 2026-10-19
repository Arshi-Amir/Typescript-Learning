//You may use constructors, methods, static members, arithmetic/string operators, template
//literals, and built-in functions like Math.max, Math.min, Math.round, etc.

//Q1. Create a class Book with properties title and author, initialized via a constructor. Add a
//method getSummary() that returns a string like "Atomic Habits by James Clear".

class Book{
    title : string;
    author : string;
    constructor(title : string , author : string){
       this.title = title;
       this.author = author;
    }
    getSummary():string{
        return 'Atomic Habits by James Clear'
    }
}


//Q2. Create a class Rectangle without an explicit constructor — give width and height
// default values directly on the properties. Add a method getArea() that returns width *
// height.
class Rectangle {
    width : number = 9;
    height : number = 9;
    getArea():number{
        return this.width * this.height
    }
}
let r = new Rectangle();
console.log(r.getArea())


// Q3. Create a class Employee with a static variable companyName shared by all employees, and
// an instance property name set via the constructor. Add a method getDetails() that returns a
// string combining name and Employee.companyName.
class Employee{
    companyName : string = 'abc';
    constructor(public name:string){};
    getDetails(){
        return this.companyName + ' '+ this.name
    }
}
let e = new Employee('sara');
console.log(e.getDetails())


// Q4. Create a class IdGenerator that combines a constructor with a static counter, so every new
// instance automatically gets a unique, auto-incremented id property.
class IdGenerator{

}

// Q5. Create a class MathUtils containing only static methods — add(a, b) and
// multiply(a, b) — used without ever creating an instance of the class.
// Q6. Create a class Circle with a static readonly property PI = 3.14159, and a constructor
// that takes radius. Add instance methods getArea() and getCircumference().
// Q7. Create a class BankAccount with a private property balance, initialized via the
// constructor. Add methods deposit(amount) and withdraw(amount) that adjust the
// balance directly (no validation branching required — just arithmetic).
// Q8. Create a class Temperature with a static method celsiusToFahrenheit(celsius)
// that returns (celsius * 9/5) + 32, used without creating an instance.
// Q9. Create a class Counter where every new instance increments a static totalInstances
// counter, and each instance also stores its own unique instanceNumber (assigned from the static
// counter at creation time).
// Q10. Create a class Product with constructor parameter properties name and price. Add a
// static method higherPrice(p1, p2) that returns the larger of the two prices using
// Math.max() (no if/else).