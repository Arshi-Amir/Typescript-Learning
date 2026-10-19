
// Functions : block of code that can be reused
// rest params , default params , optional params (IMP)
// 1-Named Function with no param and return type
function f1():void {
      console.log('Named Function with no param and return type')
}
f1();


// 2-Named Function with param and return type
function func1 (num1 : number , num2 : number):number {
      console.log('Named Function with  param and return type')
      return num1+ num2;
}
let result = func1 (10,30);
console.log(result)


// 3-Named Function with Rest parameters
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


//4- Named Function with Rest parameters - multiple types 
function totalElements(...elements : (number | string)[]):number{
return elements.length
}
console.log(totalElements(1,2,3,"a",7,'k','l','p'))


//5-Named Function with Optional paramters

// Middle name can be optional but here in function it will give error if not provided
function fullName (firstName : string , lastName : string , middleName : string) {
    return firstName + " " + middleName + " "+ lastName;
}
let fullname = fullName ('Arshi', 'Amir' ,'s') // it is must to provide middle name
console.log(fullname)

// added optional ? for checking 
function fullName5 (firstName : string , lastName : string , middleName?: string) {
    if(middleName === undefined){
        return firstName +" "+ lastName;
    }
    return firstName + " " + middleName + " "+ lastName;
}
let fullname5 = fullName5('Arshi', 'Amir') // it is must to provide middle name
console.log(fullname5)


//6- Named function with default paramters
// middle name is optional now since default value is already provided and it will take that if not provided by user
function fullNameDefault(firstName: string, lastName: string, middleName: string = 'default param') {
    return firstName + " " + middleName + " " + lastName;
}
let fullnamedefaultparam = fullNameDefault('Arshi', 'Amir') // it is must to provide middle name
console.log(fullnamedefaultparam)



// Anonymous /Nameless Functions
let name = function() {
      console.log('Nameless function')
}
name();


//Arrow Func
let addNumber = (num1 : number , num2 : number) : number =>{
      return num1+ num2;
}

console.log(addNumber(10,20))

//Arrow func 2
let addNumber2 = (num1 : number , num2 : number) : number => num1+ num2;

console.log(addNumber2(10,20))

let n = () : void =>{
      console.log('Arrow func with no param and return type')
}
n()

let adding = (n1 : number , n2:number) =>  n1+n2; // arrow func with implicit return
console.log(adding(1,2))