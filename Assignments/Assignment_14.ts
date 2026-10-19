//Q1. Identify Overloading
class Calculator {
add(a: number, b: number): number;
add(a: number, b: number, c: number): number;
add(a: number, b: number, c?: number): number {
if (c !== undefined) {
return a + b + c;
}
return a + b;
}
}


//Q2. Predict the Output (Overriding)
class Shape {
area(): number {
return 0;
}
}

class Circle extends Shape {
radius: number = 5;
override area(): number {
return 3.14 * this.radius * this.radius;
}
}
const s: Shape = new Circle();
console.log(s.area());


//Q3 Spot the Error
//Method overriding , params should be same here in child class its taking 2 params
// class Base {
// display(x: number): void {
// console.log("Base: " + x);
// }
// }
// class Derived extends Base {
// display(x: number, y: number): void {
// console.log("Derived: " + x + ", " + y);
// }
// }
// const obj: Base = new Derived();
// obj.display(5);


//A4.
// • Overloading (Compile-time):
// function greet(name: string): void;
// function greet(name: string, age: number): void;
// function greet(name: string, age?: number): void {
// console.log(age ? `${name}, ${age}` : name);
// }
// The TypeScript compiler checks each call site against the overload
// signatures to ensure the arguments match one of them. Once compiled
// to JavaScript, all overload signatures are erased — only the single
// implementation remains. This is a form of static/compile-time type
// checking, not true runtime dispatch.

// • Overriding (Runtime):
// class A { greet(): void { console.log("A"); } }
// class B extends A { override greet(): void { console.log("B"); } }
// const obj: A = new B();
// obj.greet(); // prints "B"
// Here, the compiler only knows the static type (A), but JavaScript's
// prototype chain determines the actual method to run based on the
// object's real constructor at runtime. This is called dynamic dispatch (or
// late binding), and it works the same way in TypeScript as in JavaScript,
// since TypeScript's class semantics compile down to standard JS
// prototypal inheritance.