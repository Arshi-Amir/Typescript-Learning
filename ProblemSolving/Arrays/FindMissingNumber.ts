// expected sum = [n * (n + 1)]/2
// we will calaculate current sum
// current - expect will give me missing number

let arrNum = [1,2,3,4,6,7,8,9];
let totalNumbers = 9;   // Need to tell actual length

function findMissingNumber(arr : number[] , n : number) : number{
    let expectedSum : number = (n * (n + 1))/2;
    let currentSum = 0;
    for (const index in arr) {
          currentSum = currentSum + arr[index]    
    }
   return expectedSum - currentSum;
}
console.log(findMissingNumber(arrNum , totalNumbers));