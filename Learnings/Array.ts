// 1-defining array using datatypes
let env : string [] = ['QA' , 'Dev' , 'staging' , 'prod'];
for (let i = 0; i < env.length; i++) {
    console.log(`Environment at index ${i} : ${env[i]}`)
}

// 2- using generic Array<T> type

let envs : Array<string> = ['QA' , 'Dev' , 'staging']
console.log(envs)

let mul :  Array<string | number> = ['QA' , 'Dev' , 'staging' ,1,2,3]
console.log(mul)


// Array - traditional for loop (indexses)
console.log('Using for Loop-indexses')
let env1 : string [] = ['QA' , 'Dev' , 'staging' , 'prod'];
for (let i = 0; i < env1.length; i++) {
    console.log(`Environment at index ${i} : ${env1[i]}`)
}

//for-in loop (indexses)
console.log('Using for in Loop - indexses')
for (const i in env1) {
    console.log(env1[i])  
}

//for-of (values)
console.log('Using for of Loop - values')
for (const val of env1) {
    console.log(val)
}


//practice
function arr(lowerarr : string[]) : Array<string> {
    let upperarr : Array<string> = []
    for (const val of lowerarr) {
          upperarr.push(val.toUpperCase())  
    }
    return upperarr
}
let lowerarr : string[] = ['abc','xyz']
console.log(arr(lowerarr));

// touple fixed length and datatype while arrays are dynamic


//forEach Method
const roles : string[] = ["admin", "user", "guest"];
roles.forEach((values)=>{console.log(values)})

// callback function: A callback is a function passed into another function as an argument, to be executed later by that function.

//for each loop -forof   iterate thorugh all elements one by one
console.log('Using forof Loop')
for (const val of roles) {
    console.log(val)
}