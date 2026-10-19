// Questions on Do While

// 1. Reverse a number using do...while
// Input:
// let num = 54321;
// Expected Output:
// 12345
console.log("1. Reverse a number using do...while")
let num = 54321;
let reverse_num = 0;
do {
    let digit = num % 10 ;
    reverse_num = reverse_num * 10 + digit;
    num = Math.floor(num / 10);
    console.log(reverse_num)
} while (num > 0);


// 2. Count digits in a number using do...while
// Input:
// let num = 987654;
// Expected Output:
// Total Digits = 6
console.log("2. Count digits in a number using do...while");
let num2 = 987654;
let count = 0;
do {
    num2 = Math.floor(num2/10)
    count = count +1
} while (num2 !== 0);
console.log(`Total Digits = ${count}`)


// 3. Check whether number is Armstrong Number
// Definition:
// 153 = 13 + 53 + 33 = 153   1 cube + 5 cube + 3 cube = 27 +1 +125 = 153
// Input:
// let num = 153;
// Expected Output:
// Armstrong Number
console.log('3. Check whether number is Armstrong Number')
let num3 : number = 153;
let exponent : number= 3;
let result : number = 1
let sum : number = 0 
let orignalNum : number = num3;

// do {
//     let counter : number = 0
//     let digit : number = num3 % 10;

//     // it is for exponent 1 cube , 3 cube , 5 cube
//     while (counter < exponent){
//         result = result * digit
//         counter++;
//     }

//     sum = sum + result;
//     result = 1;    // resetting result to 1 so that each value cube is separately calculated 
//     num3 = Math.floor(num3 /10);
// } while (num3 !== 0);
// console.log(sum)

//second way
do {
let digit = num3 % 10;
sum += digit ** 3;
num3 = Math.floor(num3 / 10);
}
while(num3 !== 0);

if(sum === orignalNum){
      console.log(`${orignalNum} is Armstrong Number`)
}
else{
    console.log(`${orignalNum} is not Armstrong Number`)
}



// 4. ATM Withdrawal Simulation
// Rules:
//  Initial balance = 10000
//  Withdrawal = 2000 each attempt
//  Stop when balance becomes less than withdrawal amount
// Expected Output:
// Withdrawn: 2000 Remaining: 8000
// Withdrawn: 2000 Remaining: 6000
// Withdrawn: 2000 Remaining: 4000
// Withdrawn: 2000 Remaining: 2000
// Withdrawn: 2000 Remaining: 0
console.log('4. ATM Withdrawal Simulation')
let Initialbalance : number = 10000;
let Withdrawal : number = 2000;
do {
     Initialbalance = Initialbalance - Withdrawal
    console.log (`Withdrawn: ${Withdrawal} Remaining: ${Initialbalance}`)
   
} while (Initialbalance >= Withdrawal );
 

// 5. Retry Login Simulation
// Rules:
//  Max attempts = 5
//  Login success at attempt = 3
// Expected Output:
// Attempt 1 Failed
// Attempt 2 Failed
// Login Successful
console.log('5. Retry Login Simulation')
let Maxattempts = 5
let successAttemptCount = 3
let count_attempt = 1;
do {
    if(count_attempt === 3){
        console.log('Login Successful');
        break;
    }
    console.log(`Attempt ${count_attempt} Failed`)
    count_attempt++;
} while (count_attempt <=5);