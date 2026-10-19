// grp of properties (variables) and behviour (methods)
// Object is collection of key value pairs


//Different ways to create object 

// 1- using 'object' type - Define directly values for variables


// when using the keyword 'object' properties cant be accessed so need to remove (:object) for working
// let employee : object = {
//     name : 'abc',
//     age : 12,
//     grade(){
//         console.log('passed')
//     }
// }
let employee = {
    name: 'abc',
    age: 12,
    grade: () => {
        console.log('passed')
    }
}

//Accessing Objects

//dot notation
console.log(employee.age);

//bracket notation
console.log(employee['name'])
console.log(employee['grade']())  // since we are accessing keyvalue pairs so need to place quotations


//Modify value in obj
employee.name = 'updated'
console.log(employee['name'])

