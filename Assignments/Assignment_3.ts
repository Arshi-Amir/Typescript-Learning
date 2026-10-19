//Questions (While Loop)

// 1. Reverse a Number using while
// Input:
// let num = 98765;
// Expected Output:
// 56789

let num : number = 98765;
let reverse_num : number = 0;
while (num > 0) {
   let digit = num % 10;
   reverse_num = reverse_num * 10 + digit
   num = Math.floor (num /10);     // it will remove last decimal part
   console.log(reverse_num)
}


// 2. Count frequency of digits in a number
// Input:
// let num = 11223344;
// Expected Output:
// 1 = 2
// 2 = 2
// 3 = 2
// 4 = 2

let num_2 :number = 11223344;
let frequency :{[key : number]:number}={};
while (num_2 !== 0) {
    let digit_2 = num_2 % 10 ;
    if(frequency[digit_2]){
        frequency[digit_2]++;      // if exist in obj then increment 
    }
    else{
        frequency[digit_2] = 1        // it will add to object
    }
     num_2 = Math.floor (num_2 /10);
}
console.log(frequency)



// 3. Check whether number is Palindrome using while
// Input:
// let num = 1221;
// Expected Output:
// Palindrome Number

let num_3 = 1221;
let orignal: number = num_3
let reverse_3 = 0 ;

while (num_3 !== 0) {
    let digit_3 = num_3 % 10;
    reverse_3 = reverse_3 * 10 + digit_3 ; 
    num_3 = Math.floor(num_3/10);
    console.log (reverse_3);
}
if(orignal === reverse_3 ){
    console.log(`${orignal} is Palindrome`)
}
else{
     console.log(`${orignal} is not a Palindrome`)
}


// 4. Find sum of digits until single digit remains
// Input:
// let num = 987;
// Calculation:
// 9+8+7 = 24
// 2+4 = 6
// Expected Output:
// Final Sum = 6

let num_4 = 987;
while (num_4 > 9) {
    let sum = 0;
     while (num_4 !== 0 ) {
        sum = sum + (num_4 % 10);
        num_4 = Math.floor(num_4 / 10)  
     }
     num_4 = sum ; 
     console.log(sum)
}


// 5. Retry API execution simulation
// Rules:
//  Maximum retry = 5
//  Success at attempt = 4
//  Stop execution after success
// Expected Output:
// Retry Attempt 1
// Retry Attempt 2
// Retry Attempt 3
// Retry Attempt 4
// API Success
let maximumRetry : number = 5;
let retryCount = 1;
while (retryCount <= maximumRetry) {
    console.log(`Retry Attempt  ${retryCount}`)
    if(retryCount === 4){
        console.log(`Success at attempt = ${retryCount}`)
        break;
    }
    retryCount ++ ;
} 