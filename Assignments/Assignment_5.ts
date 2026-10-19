//USE FOR EACH LOOP FOR FOLLOWING QUESTIONS

// 1. Print all elements from an array
// Input:
// let numbers = [10,20,30,40,50];
// Expected Output:
// 10
// 20
// 30
// 40
// 50
console.log('1. Print all elements from an array')
console.log("Using for each loop")
let numbers = [10,20,30,40,50];
numbers.forEach((num)=>{console.log(num)})

console.log("Using for of loop")
for (const val of numbers) {
    console.log(val)
}


// 2. Find sum of array elements
// Input:
// let numbers = [5,10,15,20];
// Expected Output:
// Sum = 50
console.log('2. Find sum of array elements')
console.log("Using for each loop")
 let numbers_2 = [5,10,15,20];
 let sum_2 = 0;
 numbers_2.forEach((val)=>{
     sum_2 = sum_2 + val;
 })
console.log( sum_2)


console.log("Using for of loop")
let sum_3 = 0;
 for (const val of numbers_2) {
    sum_3 = sum_3 + val
 }
 console.log( sum_3)



// 3. Count vowels in a string
// Input:
// let word = "Playwright";
// Expected Output:
// Vowels = 2
console.log('3. Count vowels in a string');
console.log("Using for each loop")
let word = "Playwright";
let convert_word = word.split("")
//console.log(convert_word)
let count = 0
convert_word.forEach((val)=>{
if(val === 'a' || val ==='e' || val ==='i' || val === 'o' ||val === 'u'){
count++;

}
})
console.log('Vowel Count: ',count);

console.log("Using for of loop")
let count_one = 0;
for (const val of word) {
    if('aeiouAEIOU'.includes(val)){
         count_one++ ;
    }
}
console.log(count_one)


// 4. Print only even numbers
// Input:
// let nums = [11,22,33,44,55,66];
// Expected Output:
// 22
// 44
// 66
console.log('4. Print only even numbers')
console.log("Using for each loop")

let nums = [11,22,33,44,55,66];
nums.forEach((val)=>{
if(val % 2 === 0 ){
    console.log(val)
}
})

console.log("Using for of loop")
for (const val of nums) {
    if(val % 2 === 0 ){
    console.log(val)
}
}


// 5. Find largest number in array
// Input:
// let numbers = [25,67,12,89,45];
// Expected Output:
// Largest = 89
console.log('5. Find largest number in array')
console.log("Using for each loop")
let numbers_5 = [25,67,12,89,45];
let largest = numbers_5[0];
numbers_5.forEach((val)=>{
          if(val > largest){
            largest = val 
          }
})
console.log('Largest Num : ',largest)

console.log("Using for of loop")
let largest_5 = numbers_5[0]
for (const val of numbers_5) {
      if(val > largest_5){
        largest_5 = val
      }  
}
console.log('Largest Num : ',largest_5)


// 6. Reverse every word in array
// Input:
// let words = ["java","playwright"];
// Expected Output:
// avaj
// thgirwyalp
console.log('6. Reverse every word in array');
console.log("Using for each loop")

let words = ["java","playwright"];
words.forEach((val)=>{
    let count = val.length - 1
    let reverse ="";
        while (count >= 0) {
             reverse = reverse +  val[count]
             //console.log(reverse)
             count--; 
        }
        console.log(reverse)
        
})

console.log("Using for of loop")
for (const val of words) {
       let count = val.length -1;
       let reverse_str= ""
       while(count >= 0){
          reverse_str = reverse_str + val[count]
          count --;
       }
       console.log(reverse_str)
}


// 7. Count frequency of characters
// Input:
// let text = "automation";
// Expected Output:
// a = 2
// u = 1
// t = 2
console.log('7. Count frequency of characters');
console.log("Using for each loop")

let text = "automation";
let frequency: { [key: string]: number } = {};

for (let char of text) {

    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}
console.log(frequency);


// 8. Browser execution framework
// Input:
// let browsers = [
// "Chrome",
// "Firefox",
// "Edge"
// ];
// Rules:
// Chrome → Smoke
// Firefox → Regression
// Edge → API
console.log('8. Browser execution framework')
let browsers = ["Chrome", "Firefox", "Edge" ];
for (const val of browsers) {
    switch (val) {
        case 'Chrome':
            console.log(val ,'Smoke' )
            break;
            case 'Firefox':
            console.log(val ,'Regression' )
            break;
            case 'Edge':
            console.log(val ,'API' )
            break;
    
        default:
            break;
    }
}


// 9. Calculate total cart value
// Input:
// let cart = [
// 1000,
// 2000,
// 3000
// ];
// Add GST = 18%
// Expected Output:
// Final Total = 7080
console.log('9. Calculate total cart value')
 let cart = [1000,2000,3000];
 let sum = 0;
 for (const val of cart) {
      sum = sum + val
 }
 console.log('Final Total: ' , (sum * 18/100) + sum);


// 10. API Response Analyzer
// Input:
// let responses = [
// 200,
// 404,
// 500,
// 200
// ];
// Count successful responses.
// Expected Output:
// Success Count = 2

console.log('10. API Response Analyzer')
let responses = [200,404,500,200];
let success_count = 0 ;
for (const val of responses) {
    if(val === 200){
       success_count = success_count + 1;

    }

}
console.log(success_count)
