
//Data types

//Type annotation / Explicit : we are telling the type itself e.g let name: string = "abc"
//Type Inference : TS will automatically assign datatype at runtime based on value if we dont assign any datatype.

// There are 2 datatype : 

// 1- Primitive Datatype: Single value can be stored. they can be copied means it will create a new instance and any change in that will not effect orignal version
// Number , String , Boolean , undefined , Null , Void , Any , Union Type

//1- number  : integrer and floating values can be stored
let score: number = 80;
console.log(score)

//2- string : store textual representation ('' , "" , ``)
let grade: string = "A"
console.log(grade)

//3- boolean  : store true or false only
let isUser: boolean = true;
console.log(isUser)

//4-undefined -- variable is declared but not initialized
let num;
console.log(num)

//5-null -- variable has been intentionally assigned empty /non-existent
// if we are finding sth that doesnt exist it will give null as a result

//6-Any -- it can store anything. This should be avioded as in most cases its recommended to provide datatype
let anything: any = "hello";
anything = 43
console.log(anything) //it will not look into typesafety

//7-Union Type ===>customized datatype / combine multiple datatypes
type status = "pending" | "rejected" | "approved"; // type alias we are defining values and can be used. Types merger

let currentStatus: status = "pending";
console.log(currentStatus)

let booking: "pending" | "rejected" | "approved" = "pending"; // made our own custom types
booking = "rejected";

let mysum: string | number = "80M" // this "|" is union symbol means both datatypes are acceptable

//8- Void Type - function is not returning anything
function sum(): void {
      console.log('hello')
}
sum();




// 2- Non-Primitive Datatype: More than one values can be stored. They cannot be copied they will refer to orignal version and any change in reference one will change orignal one as well.
// Object , Function , Arrays , Touples , Interface ...

//1-Object 

// variableType name :{property : type , property : type} = {assignment of keyvalue pairs}
let student: { name: string, marks: number, isLoggedIn: boolean, books: Array<string> } = {
      name: "Arshi",
      marks: 123,
      isLoggedIn: true,
      books: ["a", "b", "c"]
}
console.log(student)

let students = {
      name: "Arshi",
      marks: 123,
      isLoggedIn: true,
      books: ["a", "b", "c", 1, 2, 3]
}
console.log(students)



//2-arrays
let fruits: string[] = ["apple", "orange"];
console.log(fruits)

// 3-Tuples 
// it is fixed length array that has defined values for each position in array

let numb = [1, 2, 3, 4, 'h']
numb[0] // it is telling that at this position value can be string or number but not sure

let numbe: [number, number, string] = [1, 2, 'h']
numbe[0]  // now that we have used tuple and defined each positon so it will explicitly tell me that at this position value will be number

let com: [[number, number], string] = [[1, 2], 'h']
com[0][1]
