// Access Modifiers : define who can access properties or methods of a class.

// Default access specifier in TS - by defualt there is no specifier. 
// if nothing is defined then all members are treated as public

//1-public (publically available outside its class as well)
class Car {
    public name: string = 'Honda';
    getName() {
        console.log(this.name)
    }
}
let c = new Car();
console.log('Public Variable : ', c.name);

//2-private (only available in its class)
class CarParts {
    private name: string = 'Honda';
    getName() {
        console.log(this.name)
    }
    private lock: number = 123
    private keyLock() {
        console.log('Key Lock is: ', this.lock)
    }

}
let p = new CarParts();
p.getName();

//3-protected (available to its child but not ouside)
class Carkeys {
    protected color: string = 'Blue';
    getName() {
        console.log(this.color)
    }
}
class k extends Carkeys {
    getColor() {
        console.log('color is: ', this.color)
    }
}
let keys = new k();
keys.getColor();
