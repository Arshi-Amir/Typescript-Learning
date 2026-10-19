

// // Given a number n, print numbers from 1 to n with the following rules:

// // If a number is divisible by 3, print "Fizz".
// // If a number is divisible by 5, print "Buzz".
// // If a number is divisible by both 3 and 5, print "FizzBuzz".
// // Print the last number itself, regardless of whether it is divisible by 3, 5, or both.
// // Otherwise, print the number itself

// // let n = 10;
// // for (let i = 1; i <= 10; i++) {
// //     if(i%3 == 0){
// //         console.log("Fizz")
// //     }
// //     else if( i%5 == 0){
// //         console.log("Buzz")
// //     }
// //      else if( i%5 == 0 && i%3 == 0 ){
// //         console.log("FizzBuzz")
// //     }
// //     else{
// //         console.log(i)
// //     }
    
// // }



// // reverse a string
// // function strReverse(str : string){
// //     console.log(str.length)
// //     let reverse_str = '';
// // for (let i = str.length-1 ; i >= 0 ; i--) {       
// //        reverse_str = reverse_str + str[i]
// // }
// // console.log(reverse_str)
// // }

// // strReverse('programming')



// // using array for resering string
// // function strReverse(str : string) : string{
// //     console.log(str.length)
// //     let arr = str.split('')
// //     let reverse_arr = []
// //     let reverse_str = '';
// // for (let i = arr.length-1 ; i >= 0 ; i--) {
// //           reverse_arr.push(arr[i])
// // }
// //       reverse_str = reverse_arr.join('')
// //       return reverse_str
// // }

// // console.log(strReverse('programming'))


// // max occuring char 
// function maxChar(str : string ): string {
//          let charObj : {[key : string] : number} = {};  

//          for (const val of str) {
//                 if(charObj[val] == undefined){
//                         charObj[val] =  1;
//                 }
//                  else {
//                         charObj[val] = charObj[val]  + 1;
//                  }
//          } 
         
//     console.log(charObj);

//         let maxCount : number = 0 ;
//         let maxChar = '';
//         for (const val in charObj) {
//                if(charObj[val] > maxCount){
//                      maxCount = charObj[val];
//                      maxChar = val
//                }
            
            
//         }
//         return maxChar ; 
// }
// //maxChar('programming');
// console.log(maxChar('programming'))


// class Animal{
//        sound(){
//               console.log('this is animal')
//        }
// }

// class dog extends Animal{
//        name =  'abc'
//        sound(){
//            console.log('this is dog' ,this.name)

//        }
// }
// let obj = new dog();
// console.log(obj.sound())



//multi-level inheritance
//A-> B-> C all methods can be called in C
//grandparent - parent - child relation

//hierarchical inheritance - multiple child from single parent

//single level inheritance - single parent single child

//hybrid inheritance - combo of 2 or more inheritance

//multiple inheritance is not possible in type script
//class Device extends c1,c2  (Not possible)  this is solved by interface using implements keyword

// interface userA{
//        grades() : void;
// }

// interface  userB{
//       subjects() : void;
// }

// class A implements userA , userB {
//        grades(): void {
//              console.log('Got good grades')
//        };
//        subjects(): void {
//            console.log('English,Maths....')
//        }
// }

// let a = new A();
//a.grades();
//a.subjects();


//this refers to new instance of obj being created
//assign values to obj properties /class level vairables

// this keyword is used within constructor ( constructor --> special function defined inside class and not have return type)
//whenever obj is created constructor is called automatically

class Car{
       brand : string;
       constructor(b:string){
           this.brand = b
       }
}
let myCar = new Car('M');
//console.log(myCar.brand)

// 1- constructor with no param
// 2- constructor with one param
// 3- constructor with multiple param
// constructor overloading (multiple constructor in one class)

class Numb{
       private x:number;
       y:string;
       constructor();
       constructor(x:number);
       constructor(x:number , y:string);
       constructor (x?:number , y?:string){
              this.x =  x ?? 0
              this.y = y ?? 'z'
       }
}

// let n1 = new Numb()
// let n2 = new Numb(1)
// let n3 = new Numb(1,'s')
// console.log(n1)
// console.log(n2)
// console.log(n3)

//Access Modifiers
//private   --- access variable or method within same class  only
//public    --- can be called outside class
//protected -- accessible to parent and  child class only not outside of class

class M{
       protected name = 'Abc'
}
class m1 extends M{
       show(){
              console.log(this.name)
       }
}
class m2 extends M{
       go(){
               console.log(this.name)
       }
}
// let m11 = new m1();
// m11.show();

// let m12 = new m2();
// m12.go()

class Employee {
constructor(public name: string, public id: number) {}
}

const emp1 = new Employee("Neha", 102);
//console.log(emp1.name);

//Encapsulation
//public
//private
//get/set --- able to access private data

//abstract class - cannot have obj of abstract class
// this class has both abstract and non-abstract method
//abstract class will be extended by child class

abstract class Person{
       name:string;
       age:number;
       constructor(name:string , age:number){
              this.name = name
              this.age = age
       }
        abstract getName():void;
        getInfo(){
              console.log(this.name , this.age)
       }
}
class user extends Person{
       getName(): void {
           console.log(this.name)
           this.getInfo()
       }
}
let u = new user('Tom',20)
//u.getName();


//readonly - keyword used with variable/property
//  it is assigned value once and cannt be reassigned after initialization. nor modified

//readonly vs const
//readonly - before intization it can be reassigned. while const will not allow to declare
//const is used with variables while readonly with class level properties

//for each method in arrays
// let f = ['a','b'];
// f.forEach((v)=>{
// console.log(v)
// })

//for each loop -forof   iterate thorugh all elements one by one

let users : string[] = ['ahmed' , 'sam' , 'noor']
users.forEach((user)=>{
   console.log(user)
})

let statuses : string[] = ['pending' , 'completed' , 'rejected']
for (const status of statuses) {
       console.log(status)
}