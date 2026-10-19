//Encapsulation means keeping a class's data and the methods
//  that operate on that data together, while controlling
//  which parts of the data can be accessed from outside the class.


// we mainly achieve this using:

// public
// private
// protected

//We created ID as a private property, so it cannot be accessed directly 
// from outside the class. We provide methods or getter/setter accessors 
// to control how the property is read or modified.
class User {
    constructor(public name: string, private ID: number) { }

    getID() {
        console.log(this.ID)
    }
    setID(value: number) {
        this.ID = value
    }
}
let u1 = new User('User1', 20)
console.log(u1)

// Using getName method for fetching value
u1.getID();

// Using setName method for updating value
u1.setID(989);
console.log(u1)


//using get and set keyword properties 
class UserInfo {
    constructor(public _task: string) { }

    get task() {
        return this._task;
    }

    set updateTask(value: string) {
        this._task = value
    }
}
let u = new UserInfo('Pending');

//fetching set propert
console.log(u.task)

//updating the value
u.updateTask = 'Completed'
console.log(u.task)
