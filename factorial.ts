// 6! = 6*5*4*3*2

function factorial(num : number) {
    let ressult = 1
    let counter = 1;
    if(num > 0){
    while (counter <= num) {
        ressult = ressult * counter
        console.log(`Counter ${counter} : ${ressult} *  ${counter} = ${ressult}`)
        counter ++;
    }
    console.log(`Factorial of given number ${num} : ${ressult}`)
}
   else {
    console.log("Number shouldnt be less than zero." , num)
   }
}
factorial(4);



function factorialForLoop(num : number) {
    let ressult = 1
    if(num >= 0){

        for (let i = 2; i <= num; i++) {
               ressult = ressult * i
        }
       return `Factorial of given number ${num} : ${ressult}`
}
   else {
    console.log("Number shouldnt be less than zero." , num)
   }
}
console.log(factorialForLoop(4));