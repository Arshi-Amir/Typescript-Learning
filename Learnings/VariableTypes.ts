//variable types Learning

//variable: container which will hold the data
// what type of data will be stored that datatypes will specify


//1- Scope
// let and const both have block scope {accessible within this only} , var is functional scope
const myname = "Arshi"
console.log(myname);

let myscore = 100;
console.log(myscore)


//2-Re-declaration
// let and const (They dont allow re-declaration)
//both will show error since variable names are already used.
/* let myscore = 200;
const myname = 'abc'
 */


//3- Declaration / Value Assignment 
// let - can be decalared
let x;
x = 9;

// const cannot be decalarared. We need to assign a value
//const y; it will throw error


//4-Re-initialization / Re-assignment
//Incase of let we can reinitialize
x = 10;

//Incase of const it will throw error
//myname = 'abc'


//5-Hoisting
// before assigning data to variable we are trying to access
// var - output undefined
//let and const - it will show error

//console.log(a)
let a = 9;
console.log(a) 

