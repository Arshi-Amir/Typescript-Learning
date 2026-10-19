//multiple inheritance is not possible in type script
//class Device extends c1,c2  (Not possible)  this is solved by
//interface using implements keyword

//Interface - blueprint for object
// we only have method signature not implemention

interface Person {
       name : string;
       age: number;
       ID: number;
       isLoggedIn : boolean;
       isActive():void;
}

interface Working{
       task : string;
       status : string;
}

class user1 implements Person , Working {
       name : string = 'User A'
       age: number = 20
       ID: number = 12344321
       isLoggedIn : boolean = true
       task : string = 'Updating Code'
       status : string = 'Pending'
       isActive():void {
                if(this.isLoggedIn && this.status === 'Completed'){
                    console.log(`${this.name} is Active`)
                }
                console.log(`${this.name} is Inactive`)
       }
}
let u = new user1();
u.isActive();


//===================================
// Directly using interface in obj
interface User {
       name : string;
       age: number;
       gender? : string;
}
function userInfo(obj:User) {
       obj.age
       console.log(obj)
}
userInfo({name : 'Arshi' , age: 20 ,gender : 'Female'})


//Interfaces extending interface
//here admin will have properties of accesslevel along with its own properties
interface accessLevel{
        name : string;
       age: number;
}
interface admin extends accessLevel{
       isLoggedIn : boolean
}
