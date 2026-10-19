
//this refers to new instance of obj being created
//assign values to obj properties /class level vairables

// this keyword is used within constructor ( constructor --> special function defined inside class and not have return type)
//whenever obj is created constructor is called automatically


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

let user1 = new Person('Arshi', 'Amir', 20);
console.log(user1)


//Constructor Overloading
class Name {
    firstName: string;
    lastName: string;
    middleName: string;


    // 1- constructor with no param
    // 2- constructor with one param
    // 3- constructor with multiple param
    // constructor overloading (multiple constructor in one class)

    constructor();
    constructor(firstname: string, lastname: string)
    constructor(firstname: string, lastname: string, middlename: string)

    constructor(firstname?: string, lastname?: string, middlename?: string) {
        this.firstName = firstname ?? 'Jon',
            this.lastName = lastname ?? 'L',
            this.middleName = middlename ?? 'M'
    }

    getfullName() {
        return `${this.firstName} ${this.middleName} ${this.lastName} `
    }
}
let n1 = new Name();
let n2 = new Name('First', 'Last');
let n3 = new Name('First', 'Middle', 'Last');
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n1.getfullName())
console.log(n2.getfullName())
console.log(n3.getfullName())


//Important  short version
class User{
    //paramter properties : within constructor property is created and values are assigned.
    constructor(public name: string ,public age : number , public isActive : boolean){}
}
let u1 = new User ('a' ,12 , true)
console.log(u1)

// public tells TypeScript to:
// create a class property called name
// make it public
// assign the constructor parameter to that property
