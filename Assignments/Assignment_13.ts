//Q1  Types of Polymorphism

//Method overriding - same method name , different implementation
class Parent {
    Name() {
        console.log('Parent Name')
    }
}
class child extends Parent {
    Name(): void {
        console.log('child class')
    }
}

//Method Overloading - same method name ,different params and one implementation body
class calculate {
    Price(x: number): number;
    Price(x: number, y: number): number;
    Price(x: number, y?: number) {
        if (y === undefined) {
            return x
        }
        return x * y
    }
}
let c = new calculate();
console.log(c.Price(12));
console.log(c.Price(12, 2));


//Q2. Predict the Output
//What is printed, and which type of polymorphism does this demonstrate? : both parent and child methods and its method overriding
class Bird {
    fly(): void {
        console.log("Bird can fly");
    }
}
class Penguin extends Bird {
    override fly(): void {
        console.log("Penguins cannot fly");
    }
}
const birds: Bird[] = [new Bird(), new Penguin()];
for (const b of birds) {
    b.fly();
}


//Q3. Polymorphism with Union Types & Overload Signatures
//Which type of polymorphism is at play here : Method overloading
class Printer {
    print(value: string): void;
    print(value: number): void;
    print(value: string | number): void {
        if (typeof value === "string") {
            console.log("String: " + value);
        } else {
            console.log("Number: " + value);
        }
    }
}
const p = new Printer();
p.print(10);
p.print("Hello");