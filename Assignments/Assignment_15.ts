//Q1 - Predict output and why
//output will be dog barks because we are creating instance of Dog 
// and inside the class sound method has its implementation
//method overriding ,polymorphism

class Animal {
    sound(): void {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound(): void {
        console.log("Dog barks");
    }
}
const a: Animal = new Dog();
a.sound();


//Q2 - Multilevel Inheritance
// Create three classes: Vehicle (with a method start()), Car
// extending Vehicle (with a method drive()), and SportsCar
// extending Car (with a method turboBoost()). Write code so that an
// object of SportsCar can call all three methods. Show the output of
// calling all three methods.
class Vehicle {
    start(): void {
        console.log('Start vehicle')
    }
}
class Car extends Vehicle {
    drive() {
        console.log('Drive Car')
    }
}
class SportsCar extends Car {
    turboBoost() {
        console.log('sportscar turbo')
    }
}

let spcar = new SportsCar();
spcar.drive()
spcar.start()
spcar.turboBoost()


//Q3 - Predict output
// First print parent constructor then child one
//super() - it will invoke parent constrcutor
class Parent {
    constructor() {
        console.log("Parent constructor");
    }
}
class Child extends Parent {
    constructor() {
        super();
        console.log("Child constructor");
    }
}
const c = new Child();


//Q4
// A TypeScript class can extend only one other class, but can
// implement multiple interfaces. Why does TypeScript impose this
// restriction on classes, and how can similar "multiple inheritance-like"
// functionality still be achieved (hint: implements and mixins)?

//Ans
// TypeScript (like JavaScript) restricts classes to a single
// extends chain to avoid the "Diamond Problem" — ambiguity when
// two parent classes define a method with the same name and a subclass
// inherits from both. Instead, TypeScript classes can implements
// multiple interfaces, since interfaces only define a contract/shape, not
// conflicting implementation.