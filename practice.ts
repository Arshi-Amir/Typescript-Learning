// Reverse a string
console.log('Q1 Reverse a string')
const input: string = 'character';
let reverseStr: string = '';

// Built-in methods 
console.log('Using built-in')
let arrStr = input.split('').reverse().join('')
console.log(arrStr)

//without built-in
console.log('Without built-in')
for (const char of input) {
    reverseStr = char + reverseStr
}
console.log(reverseStr)


// Reverse a number
console.log('Q2 Reverse a number')

console.log('Approach 1 : Convert to string and then reverse')
let input1: number = 1234567;
let arrNum = input1.toString();
console.log(typeof arrNum)

let reverseNum = ''

for (const char of arrNum) {
    reverseNum = char + reverseNum;
}
console.log(Number(reverseNum));
console.log(typeof Number(reverseNum))

console.log('Approach 2 : Using Math.floor')
function reverseNumber(n: number) {
    let reverseNumber: number = 0;
    while (n !== 0) {
        let remainder: number = n % 10;
        reverseNumber = reverseNumber * 10 + remainder
        n = Math.floor(n / 10)
    }
    console.log(reverseNumber)
}
reverseNumber(input1)

//     n=1234         r = n % 10;          reverseNumber = reverseNumber * 10 + remainder   n = Math.floor(n / 10)
// 0                        4                               0*10 +4 = 4                        123
// 1   123                  3                                4*10+3 =43                        12
// 2   12                   2                                43*10+ 2=432                      1
// 3   1                    1                                432*10 + 1 =4321                  0


// Check if a string is palindrome
console.log('Q3 Check if a string is palindrome')
const input3: string = 'level';
function palindrome(s: string) {
    let reverseStr: string = ''
    for (const char of s) {
        reverseStr = char + reverseStr
    }
    console.log(reverseStr)
    if (s === reverseStr) {
        console.log('String is palindrome')
    }
    else {
        console.log('String is not palindrome')

    }
}
palindrome(input3)


// Check if a number is palindrome
console.log('Q4 Check if a number is palindrome')
const input4: number = 16361;

function palindromeNumber(n: number) {
    let orignal: number = n;
    let reverseNum: number = 0;
    while (n !== 0) {
        let remainder: number = n % 10;
        reverseNum = reverseNum * 10 + remainder;
        n = Math.floor(n / 10);
    }
    console.log(`Orignal : ${orignal} , reverseNum : ${reverseNum}`)
    if (orignal === reverseNum) {
        console.log('Number is palindrome')
    }
    else {
        console.log('Number is not palindrome')

    }
}
palindromeNumber(input4)


// Find the maximum character in a string
console.log('Q5 Find the maximum character in a string')
const input5: string = 'maximum';
function maxChar(s: string) {
    let empObj: { [key: string]: number } = {};
    for (const char of s) {
        if (empObj[char] === undefined) {
            empObj[char] = 1;
        }
        else {
            empObj[char] = empObj[char] + 1;
        }
    }
    console.log(empObj)

    let maxchar = '';
    let maxCount = 0;
    for (const char in empObj) {
        if (empObj[char] > maxCount) {
            maxCount = empObj[char];
            maxchar = char
        }

    }
    console.log(`MaxCount : ${maxCount} for char : ${maxchar}`)

}
maxChar(input5)


// Find the minimum character in a string
console.log('Q6 Find the minimum character in a string')
const input6: string = 'implement';
function minChar(s: string) {
    let empObj: { [key: string]: number } = {};
    for (const char of s) {
        if (empObj[char] === undefined) {
            empObj[char] = 1;
        }
        else {
            empObj[char] = empObj[char] + 1;
        }
    }
    console.log(empObj)
    let minchar = '';
    let minCount = 1;
    for (const char in empObj) {
        if (empObj[char] = minCount) {
            minCount = empObj[char];
            minchar = char
        }

    }
    console.log(`MinCount : ${minCount} for char : ${minchar}`)
}
minChar(input6)


// Count frequency of each character
console.log('Q7 Count frequency of each character')
const input7: string = 'frequency';
function countFrequency(s: string) {
    let empObj: { [key: string]: number } = {};
    for (const char of s) {
        if (empObj[char] === undefined) {
            empObj[char] = 1;
        }
        else {
            empObj[char] = empObj[char] + 1;
        }
    }
    console.log(empObj)

}
countFrequency(input7)


// Count frequency of each number/digit
console.log('Q8 Count frequency of each number/digit')
const input8: number = 1231234455;
function digitFrequency(n: number) {
    let empObj: { [key: number]: number } = {};
    while (n !== 0) {
        let rem = n % 10;
        if (empObj[rem] === undefined) {
            empObj[rem] = 1;
        }
        else {
            empObj[rem] = empObj[rem] + 1;
        }
        n = Math.floor(n / 10)
    }
    console.log(empObj);
}
digitFrequency(input8);


// Find the first non-repeating character
console.log('Q9 Find the first non-repeating character')
const input9: string = 'maximum';

function firstNonrepeatingChar(str: string) {

    // Object creation and storing count in obj
    let empObj: { [key: string]: number } = {};
    for (const char of str) {
        if (empObj[char] === undefined) {
            empObj[char] = 1
        }
        else {
            empObj[char] = empObj[char] + 1
        }
    }
    console.log(empObj);

    // Need to traverse thorugh  original string to find count 
    let firstNonrepeatingChar = ''
    for (const char of str) {
        if (empObj[char] === 1) {
            firstNonrepeatingChar = char
            break;
        }

    }
    console.log(firstNonrepeatingChar)
}
firstNonrepeatingChar(input9)


// Find the first repeating character
console.log('Q10 Find the first repeating character')
const input10: string = 'maximum';

function firstrepeatingChar(str: string) {
    let empObj: { [key: string]: number } = {};
    for (const char of str) {
        if (empObj[char] === undefined) {
            empObj[char] = 1
        }
        else {
            empObj[char] = empObj[char] + 1
        }
    }
    console.log(empObj);

    let firstrepeatingChar = ''
    for (const char of str) {
        if (empObj[char] > 1) {
            firstrepeatingChar = char
            break;
        }

    }
    console.log(firstrepeatingChar)
}
firstrepeatingChar(input10)


// Remove duplicate characters from a string
console.log('Q11 Remove duplicate characters from a string');
const input11: string = 'maximum'

function removeduplicateChar(str: string) {
    let empObj: { [key: string]: number } = {};
    for (const char of str) {
        if (empObj[char] === undefined) {
            empObj[char] = 1
        }
        else {
            empObj[char] = empObj[char] + 1
        }
    }
    console.log(empObj);

    let removeduplicatecharString: string = ''
    for (const char of str) {
        if (empObj[char] == 1) {
            removeduplicatecharString = removeduplicatecharString + char
        }

    }
    console.log(removeduplicatecharString)
}
removeduplicateChar(input11)


// Remove duplicate elements from an array
console.log('Q12 Remove duplicate elements from an array');
const fruits1: string[] = ['apple', 'banana', 'grapes', 'apple', 'banana'];
function removeduplicateElement(a: Array<string>) {
    let removedElementArray: string[] = []
    let sortedArray = a.sort();
    console.log(sortedArray);
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i + 1]) {
            removedElementArray.push(sortedArray[i])
        }
    }
    console.log(removedElementArray)
}
removeduplicateElement(fruits1);


// Find duplicate elements in an array
console.log('Q13 Find duplicate elements in an array');
const fruits2: string[] = ['apple', 'banana', 'grapes', 'apple', 'banana'];
function findduplicateElement(a: Array<string>) {
    let sortedArray = a.sort();
    console.log(sortedArray);
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] == sortedArray[i + 1]) {
            console.log(sortedArray[i])
        }
    }
}
findduplicateElement(fruits2);


// Find the missing number in an array
console.log('Q14 Find the missing number in an array');
const num7: number[] = [1, 2, 3, 5, 6, 7];
let totalLength: number = 7
function missingNumber(arr: number[], n: number) {
    //[n*(n+1)]/2  actual and expected will give me diff
    let sum: number = 0
    for (const index in arr) {
        sum = sum + arr[index]
    }
    let expectedSum: number = (n * (n + 1)) / 2;
    console.log(sum, expectedSum)
    console.log('Missing Number is: ', expectedSum - sum)
}
missingNumber(num7, totalLength)


// Find the largest number in an array
console.log('Q15 Find the largest number in an array');
const num5: number[] = [50, 80, 40, 100, 20, 5];
function largestNumber(arr: number[]) {
    let largestnumber = arr[0];
    for (const index in arr) {
        if (arr[index] > largestnumber) {
            largestnumber = arr[index]
        }
    }
    console.log('Largest Number: ', largestnumber)
}
largestNumber(num5)


// Find the second-largest number
console.log('Q16 Find the second-largest number');
const num6: number[] = [50, 80, 40, 0, 100, 20, 5];
function secondlargestNumber(arr: number[]) {
    let largestnumber = arr[0];
    let secondLargest = -Infinity;
    for (const index in arr) {
        if (arr[index] > largestnumber) {
            largestnumber = arr[index]
        }
    }
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < largestnumber && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    console.log('Second Largest Number: ', secondLargest)
}
secondlargestNumber(num6)


// Find the smallest number in an array
console.log('Q17 Find the smallest number in an array');
const num3 = [50, 40, 30, 1, 20, 0.5];
function smallestNumber(arr: number[]) {
    let smallestNumber: number = num3[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }

    }
    console.log('Smallest Number: ', smallestNumber)
}
smallestNumber(num3)


// Find the second-smallest number
console.log('Q18 Find the second-smallest number');
const num4 = [50, 40, 30, 1, 20];
function secondsmallestNumber(arr: number[]) {
    let secondsmallestNumber: number = Infinity
    let smallestNumber: number = num3[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }

    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > smallestNumber && arr[i] < secondsmallestNumber) {
            secondsmallestNumber = arr[i]
        }

    }
    console.log('Second-smallest number: ', secondsmallestNumber)
}
secondsmallestNumber(num4)


// Find the sum of array elements
console.log('Q19 Find the sum of array elements');
const num2: number[] = [1, 2, 3, 4];
function sumElements(arr: number[]) {
    let sum = 0;
    for (const element of arr) {
        sum = sum + element
    }
    console.log('Sum of Elements: ', sum)
}
sumElements(num2)


// Find the average of array elements
console.log('Q20 Find the average of array elements');
const num1: number[] = [1, 2, 3, 4];
function averageElements(arr: number[]) {
    let sum = 0;
    for (const element of arr) {
        sum = sum + element
    }
    console.log('Average of Elements: ', sum / arr.length)
}
averageElements(num1)


// Check whether a number is even or odd
console.log('Q21 Check whether a number is even or odd')
const input12: number = 23;
function isEvenOdd(n: number) {
    if (n % 2 === 0) {
        console.log(`${n} is even number`)
    }
    else {
        console.log(`${n} is odd number`)
    }
}
isEvenOdd(input12)


// Check whether a number is positive, negative, or zero
console.log('Q22  Check whether a number is positive, negative, or zero')
const input13: number = -1.2
function isPositiveNegativeZero(n: number) {
    if (n === 0) {
        console.log(`${n} is Zero`)
    }
    else if (n > 0) {
        console.log(`${n} is Positive`)
    }
    else {
        console.log(`${n} is Negative`)
    }

}
isPositiveNegativeZero(input13)


// Check whether a number is prime
console.log('Q23 Check whether a number is prime');
const input14: number = 2
function isPrime(n: number) {
    let isPrime: boolean = true
    if (n <= 1) {
        console.log(`${n} is not Prime`)
        return;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${n} is Prime`)
    }
    else {
        console.log(`${n} is not Prime`)
    }

}
isPrime(input14)


// Print prime numbers within a range
console.log('Q24 Print prime numbers within a range')
const input15: number = 12
function inrangePrimeNumbers(n: number): void {

    //storing prime numbers in array
    let numArr: number[] = []

    // Loop - 0-12 values will be printed
    for (let i = 0; i <= n; i++) {

        let isPrime: boolean = true
        console.log('checking for ', i)

        // if number less than 2 so its not prime
        if (i <= 1) {
            console.log(`${i} is not prime`)
            continue;
        }

        //number is greater than 2 then will execute
        for (let j = 2; j < i; j++) {

            if (i % j === 0) {
                isPrime = false
                break;
            }
        }

        if (isPrime) {
            numArr.push(i)
            console.log('Number is a prime : ', i)
        }
        else {
            console.log('Number is not prime : ', i)

        }

        console.log(numArr);
        console.log('Numbers that are prime are: ', numArr.join(', '))
    }
}
inrangePrimeNumbers(input15)


// Find factorial of a number
console.log('Q25 Find factorial of a number')
const input16: number = 3;
//4 * 3 * 2 * 1
function factorial(n: number): string {
    let numFactorial = 1;
    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }

    for (let i = 1; i <= n; i++) {

        numFactorial = numFactorial * i
    }
    return `Factorial is: ${numFactorial}`
}
console.log(factorial(input16))


// Generate Fibonacci series
console.log('Q26 Generate Fibonacci series')
const input17: number = 7
//0,1,1,2,3,5
function Fibonacci(n: number) {
    let arr: number[] = [0, 1]

    //n -2 ==> since 2 values are already present so need to subtract from total length
    for (let i = 0; i < n - 2; i++) {
        let newNum = arr[i] + arr[i + 1]
        arr.push(newNum);
    }
    console.log(arr)
}
Fibonacci(input17)


// Check Armstrong number
// length of digit  = power  1**4 + 6**4 + 3**4 + 4**4 = 1634 number itself
console.log('Q27 Check Armstrong number')
const input18: number = 1634;
function isArmstrong(n: number): boolean {
    const orig: number = n;
    let orignal = n;
    let countDigit = 0;
    if (n < 0) {
        return false
    }
    while (n !== 0) {
        n = Math.floor(n / 10);
        countDigit++;
    }
    console.log(countDigit)

    let result = 0;
    for (let i = 1; i <= countDigit; i++) {
        let remainder = orignal % 10
        result = result + (remainder ** countDigit)
        orignal = Math.floor(orignal / 10);
    }
    console.log(result)
    if (result === orig) {
        return true
    }
    else {
        return false
    }
}
console.log(isArmstrong(input18));


// Find sum of digits
console.log('Q28 Find sum of digits')
const input19: number = 16344;
function digitsSum(n: number) {
    let sum: number = 0;
    while (n !== 0) {
        let remainder: number = n % 10;
        sum = sum + remainder
        n = Math.floor(n / 10);
    }
    console.log(sum)
}
digitsSum(input19)


// Count digits in a number
console.log('Q29  Count digits in a number')
const input20: number = 123432
function digitsCount(n: number) {
    let count: number = 0;
    while (n !== 0) {
        n = Math.floor(n / 10);
        count = count + 1
    }
    console.log('Total Count of digits are: ', count)
}
digitsCount(input20)


// Reverse digits of a number
console.log('Q30 Reverse digits of a number')
const input21: number = 612
function reverseDigit(n: number): number {
    let reverse: number = 0;
    while (n !== 0) {
        let remainder = n % 10;
        reverse = reverse * 10 + remainder;
        n = Math.floor(n / 10);
    }
    return reverse
}
console.log(reverseDigit(input21))


// Check whether a number is divisible by 3 and 5
console.log('Q31 Check whether a number is divisible by 3 and 5')
const input22: number = 12
function isDivisibleBy3And5(n: number): boolean {
    if (n % 3 === 0 && n % 5 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isDivisibleBy3And5(input22))


// Count vowels and consonants 
//  (this is for unique occrrence else for total we dont need to do object creation it can be done directly)
console.log('Q32 Count vowels and consonants')
const input23: string = 'consonants';
function countVowelsConsonants(str: string) {
    let vowels = 'aeiouAEIOU';
    let empObj: { [key: string]: number } = {};

    for (const s of str) {
        if (empObj[s] === undefined) {
            empObj[s] = 1;
        }
        else {
            empObj[s] = empObj[s] + 1;
        }

    }
    console.log(empObj);

    let vowelsCount: number = 0;
    let consonantsCount: number = 0;
    for (const char in empObj) {
        if (vowels.includes(char)) {
            vowelsCount++;
            console.log(`Count of char ${char} is ${empObj[char]}`)
        }
        else {
            consonantsCount++;
            console.log(`Count of char ${char} is ${empObj[char]}`)
        }
    }
    console.log(`Total vowels in ${str} are ${vowelsCount} and consonants are ${consonantsCount}`)
}
countVowelsConsonants(input23);


// Count spaces in a string
console.log('Q33 Count spaces in a string')
const input24: string = 'Hello World From TypeScript'
function countSpaces(str: string) {
    let count: number = 0;
    for (const char of str) {
        if (char === ' ') {
            count++;
        }
    }
    console.log(count)
}
countSpaces(input24)


// Count uppercase and lowercase characters
console.log('Q34 Count uppercase and lowercase characters')
const input25: string = 'Hello World From TypeScript'
function countUpperAndLower(str: string) {
    let countLowerCase: number = 0;
    let countUpperCase: number = 0;
    for (const char of str) {

        if (char >= 'a' && char <= 'z') {
            countLowerCase++;
        }
        else if (char >= 'A' && char <= 'Z') {
            countUpperCase++;
        }
    }
    console.log(`Count of Upper case characters are ${countUpperCase} and Lower case is ${countLowerCase}`)
}
countUpperAndLower(input25)


// Count digits in a string
console.log('Q35 Count digits in a string')
const input26: string = 'abc123def45'
function countDigits(str: string) {
    // let regexPattern = /^[a-zA-Z]/;
    let regexPattern = /^[0-9]$/;
    let count: number = 0;
    for (const char of str) {
        if (regexPattern.test(char)) {
            count++;
        }
    }
    console.log(count)
}
countDigits(input26)


// Remove spaces from a string
console.log('Q36 Remove spaces from a string')
const input27: string = 'Hello World From TypeScript'
function removeSpaces(str: string) {
    let strArr = str.split(' ').join('');
    console.log(strArr)
}
removeSpaces(input27)


// Remove special characters
console.log('Q37 Remove special characters')
const input28: string = 'He@llo #Wor$ld! 123'
function removeSpecialCharacters(str: string) {
    let regexPattern = /^[a-zA-Z0-9 ]/;
    let remove: string = ''
    for (const char of str) {
        if (regexPattern.test(char)) {
            remove = remove + char
        }
    }
    console.log(remove)
}
removeSpecialCharacters(input28)


// Convert first letter of every word to uppercase
console.log('Q38 Convert first letter of every word to uppercase')
const input29: string = 'hello world from typescript'
function capitalizeEveryWord(str: string) {
    let capitalizeEveryWord: string = ''
    for (let i = 0; i < str.length; i++) {

        if (str[i - 1] === ' ' || i === 0) {
            let capital = str[i].toUpperCase()
            capitalizeEveryWord = capitalizeEveryWord + capital
        }
        else {
            capitalizeEveryWord = capitalizeEveryWord + str[i]

        }
    }
    console.log(capitalizeEveryWord)
}
capitalizeEveryWord(input29)


// Find the longest word in a string
console.log('Q39 Find the longest word in a string')
const input30: string = 'I love programming in TypeScript'
function findLongestWord(str: string) {
    let arr: string[] = str.split(' ');
    let emptobj: { [key: string]: number } = {}

    //using array we are counting the characters and adding to object 
    for (const val of arr) {
        let count = 0;
        for (const char of val) {
            count++;
        }
        emptobj[val] = count;
        console.log(`val: ${val} and count ${count}`)

    }
    console.log(emptobj);

    //finding longest word
    let maxCount = 0;
    let maxChar = ''
    for (const char in emptobj) {
        if (emptobj[char] > maxCount) {
            maxCount = emptobj[char]
            maxChar = char;
        }
    }
    console.log(`Longest word is ${maxChar} and count is  ${maxCount}`)
}
findLongestWord(input30)


// Find the shortest word in a string
console.log('Q40 Find the shortest word in a string')
const input31: string = 'I love programming in TypeScript'
// function findShortestWord(str: string) {
//     let arr: string[] = str.split(' ');
//     let empObj: { [key: string]: number } = {};
//     for (const value of arr) {
//         let count = 0;
//         for (const char of value) {
//             count++;
//         }
//         empObj[value] = count;
//     }
//     console.log(empObj);

//     let minWord = '';
//     let minCount = Infinity;
//     for (const char in empObj) {
//         if (empObj[char] < minCount) {
//             minCount = empObj[char]
//             minWord = char
//         }
//     }
//     console.log(minWord, ': ', minCount)
// }
// findShortestWord(input31)

function findShortestWord1(str: string) {
    let arr: string[] = str.split(' ');
    let minLength: number = arr[0].length
    let minWord: string = arr[0]

    for (const index in arr) {
        if (arr[index].length < minLength) {
            minLength = arr[index].length
            minWord = arr[index]
        }
    }

    console.log(minWord, minLength)

}
findShortestWord1(input31)

// Reverse each word in a sentence
console.log('Q41 Reverse each word in a sentence')
const input32: string = 'Hello World From TypeScript'
function reverseEachWord(str: string) {

    // splitting it into array to apply reverse for each word
    let arr: string[] = str.split(' ');
    let reverse_arr = []
    console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse_arr.push(arr[i])
    }
    console.log(reverse_arr.join(' '))

    //reverse whole sentence
    // let reverseStr: string = '';
    // for (let i = str.length - 1; i > 0; i--) {
    //     reverseStr = reverseStr + str[i]
    // }
    // console.log(reverseStr)
}
reverseEachWord(input32)

//Check whether two strings are anagrams
console.log('Q43 Check whether two strings are anagrams')
const input37d: string = 'listen'
const input37b: string = 'silent'
function checkAnagram(str1: string, str2: string) {
    //splitting the string
    let arr1: string[] = str1.split('')
    let arr2: string[] = str2.split('')

    //sorting and converting back to string
    let strNew: string = arr1.sort().join('')
    let strNew1: string = arr2.sort().join('')
    console.log(`New String 1: ${strNew} and New String 2: ${strNew1}`)
    if(strNew === strNew1){
        console.log('String is anagram')
    }
    else{
         console.log('String is not an anagram')
    }

}
checkAnagram(input37d, input37b)


// Find duplicate characters
console.log('Q44 Find duplicate characters')
const input35: string = 'programming'
function findDuplicateCharacters(str: string) {
    let empObj: { [key: string]: number } = {};
    for (const s of str) {
        if (empObj[s] === undefined) {
            empObj[s] = 1;
        }
        else {
            empObj[s] = empObj[s] + 1
        }
    }
    console.log(empObj);

    for (const char in empObj) {
        if (empObj[char] > 1) {
            console.log(`Duplicate char ${char} with count ${empObj[char]}`)
        }
    }
}
findDuplicateCharacters(input35)


// Find unique characters
console.log('Q45 Find unique characters')
const input36: string = 'programming'
function findUniqueCharacters(str: string) {
    let empObj: { [key: string]: number } = {};
    for (const s of str) {
        if (empObj[s] === undefined) {
            empObj[s] = 1;
        }
        else {
            empObj[s] = empObj[s] + 1
        }
    }
    console.log(empObj);

    for (const char in empObj) {
        if (empObj[char] == 1) {
            console.log(`unique char ${char} with count ${empObj[char]}`)
        }
    }
}
findUniqueCharacters(input36)


// Replace a particular character
console.log('Q46 Replace a particular character')
const input37a: string = 'hello world'
const input37c: string = '0' // replacement character
function replaceCharacter(str: string, newChar: string) {
    let newstr: string = str.replaceAll('o', newChar);
    console.log(newstr)

}
replaceCharacter(input37a, input37c)


// Find occurrence of a particular character
console.log('Q47 Find occurrence of a particular character')
const input38a: string = 'programming'
const input38b: string = 'g' // character to count
function countCharacterOccurrence(str: string, char: string) {
    let empObj: { [key: string]: number } = {};
    for (const s of str) {
        if (empObj[s] === undefined) {
            empObj[s] = 1;
        }
        else {
            empObj[s] = empObj[s] + 1
        }
    }
    console.log(empObj);

    for (const ch in empObj) {
        if (ch === char) {
            console.log(`char of ${ch} is ${empObj[ch]}`)
        }

    }
}
countCharacterOccurrence(input38a, input38b)

