// A class can reuse method and properties of another class
// Inheritance allows to reuse the functionality without rewriting
// child will inherit properties of parent class


//parent class
class subjects {
    subject1: string = "English";
    subject2: string = "Math";
    Total() {
        console.log(`Subjects in class are : ${this.subject1} , ${this.subject2}`)
    }
    gradeCalc() {
        console.log('good')
    }
}

//child class
class Math extends subjects {
    name: string = 'Maths'
    grade() {
        console.log('Extending inside child method')
        this.Total() // this is inherit from parent

    }

    //Method overriding 
    //Same method name, same general method signature, but a child class changes the implementation.
    gradeCalc(): void {
        console.log('super')

    }
}

let mysub = new Math();
mysub.Total();
mysub.grade();


//polymorphism = one thing having many forms/behaviors.
//The same method call can produce different behavior
// depending on which object is actually being used.

// Inheritance
//      ↓
// Parent + Child
//      ↓
// Method Overriding
//      ↓
// Different implementations
//      ↓
// Polymorphism

//method overriding cant happen without inheritance



// INHERITANCE
//      ↓
// Describes the relationship between classes

// POLYMORPHISM
//      ↓
// Describes different forms/behaviors
//      ↓
// Overloading  → Compile-time polymorphism
// Overriding   → Runtime polymorphism
