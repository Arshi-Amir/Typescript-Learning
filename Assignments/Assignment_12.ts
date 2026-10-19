//Q1. Abstract Class Basics
abstract class Shape {
abstract area(): number;
display(): void {
console.log("This is a shape");
}
}

//const s = new Shape();
//it will give error as we cannot create instance of abstract class. 
// we have abstract and non-abstract methods with or without implmentation
//it will be extended by non-abstract classes for use


//Q2. Implementing an Abstract Class
abstract class Employee {
abstract calculateSalary(): number;
}
class Manager extends Employee {
       calculateSalary(){
        return 75000;
       }
}
let m = new Manager();
console.log(m.calculateSalary())


//Q3. Interface vs Abstract Class
// 1. Multiple Inheritance: A class can implements multiple
// interfaces, but can extends only one abstract (or concrete)
// class.
// 2. Constructors: An abstract class can have a constructor (run via
// super() when a subclass is instantiated), while an interface
// cannot have a constructor at all, since it describes only a shape/
// contract.
// 3. Runtime Existence: Interfaces are a purely compile-time
// construct — they're completely erased when TypeScript compiles
// to JavaScript (no trace remains at runtime). Abstract classes,
// however, do exist at runtime as real JavaScript classes (minus
// the "abstract" restriction, which is only enforced by the TypeScript
// compiler), and can hold actual field values and method
// implementations.


//Q4. Multiple Interface Implementation
interface Flyable {
fly(): void;
}
interface Swimmable {
swim(): void;
}
class Duck implements Flyable, Swimmable {
fly(): void {
console.log("Duck flies");
}
swim(): void {

console.log("Duck swims");
}
}

// one class will not extend 2 classes - they cause diamond ambiguity problem
//one class can implement 2 interfaces - since methods only have name with no implementation/body causing no issue