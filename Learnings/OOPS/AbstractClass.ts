
//abstract class - cannot have obj of abstract class
// this class has both abstract and non-abstract method
//abstract class will be extended by child class

// Abstract class: A class that acts as a blueprint for child classes. It cannot be instantiated directly.

// Abstract method: A method declared in the abstract class without implementation. Child classes are required to implement it.

// Normal method: A method with implementation that can be inherited by child classes

//its not giving 100% abstraction as there can be nonabstract method that have implementation. 

abstract class Browser {
    openBrowser() {
        console.log("Opening browser");
    }
    abstract closeBrowser(): void;
    constructor(public browserName: string) { }
}

//let b1 = new Browser()  this will give error as we cant create instance

class Chrome extends Browser {
    closeBrowser(): void {
        console.log(`Closing ${this.browserName}`)
    }
}
let c = new Chrome('Chrome');
console.log(c)




// abstract parent
//       ↓
//       ↓ extends
//       ↓
// Normal child
//       ↓
// MUST implement all abstract methods