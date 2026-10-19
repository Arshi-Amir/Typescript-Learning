
//Literals 
// presentation of instance of primitive types
let direction: 'north' | 'east' | 'west' | 'south';

let na: 1 | 2 | 3;


//enums
//they are treated as datatypes and use them to create set of constants for use with variables and properties

enum size {
    smallest = 1,     // value = integer
    medium,
    large
}

console.log(size.large)

//enum can be assigned to variable

let pizza: size = size.medium

enum directions {
    'N' = 'North',
    'W' = 'West',
    'S' = 0
}
let d: directions = directions.N

console.log(d)


// any ===> it will allow any datatype and there is not type safety and 
// we can perform any work related which can result in faliure as well
//  e.g if string is there and we are using number method on it.
let a: any = 1;
a.length

//unknown     ===> RECOMMENDED TO USE
//it will allow type safety and will ask to perform assertions

let b: unknown = ['hello'];

// b.length // now it will give error

if (typeof b == 'number') {
    console.log('Datatype is number : ', b + 1)
}
else if (typeof b == 'string') {
    console.log(b, ' is string')
}
else {
    console.log('Nothing is supported')
}

//type cast 
// if I know type so I can define by myself but at runtime code might crash and its not recommended to use
let c: unknown = 1;
let result = (c as number) + 1;
console.log(result)



// Optional chaining and Bang   (OPTIONAL CHINAING IS RECOMMENDED)

//Optional chaing : first check that value exist or not then move onto next
let name = [{ name: 'abc' }, { name: 'ab' }, {}];
let remove = name.pop()?.name;
console.log(remove)

//Bang
//! mark is forcing to move forward. 
let bang = name.pop()!.name;
console.log(bang)


// Optional and default parameters in Function

// Middle name can be optional but here in function it will give error if not provided
// function fullName (firstName : string , lastName : string , middleName : string) {
//     return firstName + " " + middleName + " "+ lastName;
// }
// let fullname = fullName ('Arshi', 'Amir' ,'s') // it is must to provide middle name
// console.log(fullname)


// added optional ? for checking 
// function fullName (firstName : string , lastName : string , middleName?: string) {
//     if(middleName === undefined){
//         return firstName +" "+ lastName;
//     }
//     return firstName + " " + middleName + " "+ lastName;
// }
// let fullname = fullName ('Arshi', 'Amir') // it is must to provide middle name
// console.log(fullname)


//default param
// middle name is optional now since default value is already provided and it will take that if not provided by user
function fullName(firstName: string, lastName: string, middleName: string = 'default') {
    return firstName + " " + middleName + " " + lastName;
}
let fullname = fullName('Arshi', 'Amir') // it is must to provide middle name
console.log(fullname)


// rest param
// '...' ===> collect as many values as mentioned
// since it will hold multiple values so they can stored in array that is why number[] is used
function add(...numbers : number[] ) {
    console.log(numbers);
}
add(1,2,3,4,5,6,7,8,9,10);
add()

function sum(...num : number[]){
    let sum = 0;
     for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]
        
     }
     console.log(`Sum : ${sum}`)
}
sum(1,2,3,4,5,6,7,8,9,10)

function totalElements(...elements : (number | string)[]):number{
return elements.length
}
console.log(totalElements(1,2,3,"a",7,'k','l','p'))


//overloaded functions (Not used much)
//Defining all the ways to call a variable and then create a general fucntion to handle all scenrios
function Name(name : string) : number ;
function Name(name : string[]) : number;
function Name (name  :unknown) : unknown {
    if(typeof name == 'string'){
          return name.length
    }
    else if (Array.isArray(name)){
         return   name.length
    }
    else {
        return 0;
    }
}

console.log(Name('abc'))
console.log(Name(['hello']))