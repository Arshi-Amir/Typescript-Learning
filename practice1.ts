
// Reverse an array
console.log('Q49 Reverse an array');
let arr1: number[] = [1, 2, 3, 4, 5];

function reverseArr(a: number[]) {
    let reverArr: number[] = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reverArr.push(a[i])
    }
    console.log(reverArr)
}
reverseArr(arr1)


// Find maximum and minimum elements
console.log('Q50 Find maximum and minimum elements');
let arr2: number[] = [12, 5, 28, 3, 19];

function maxminElements(a: number[]) {
    //max Element
    let max: number = a[0];
    let min: number = Infinity;
    for (let value of a) {
        if (value > max) {
            max = value
        }
        if (value < min) {
            min = value
        }
    }
    console.log(`Max Element is: ${max}`)
    console.log(`Min Element is: ${min}`)
}
maxminElements(arr2)


// Find the second-largest element
console.log('Q51 Find the second-largest element');
let arr3: number[] = [10, 5, 20, 8, 15];
function secondLargestElement(a: number[]) {
    //max Element
    let max: number = a[0];
    let secondMax: number = a[0];

    for (let value of a) {
        if (value > max) {
            secondMax = max;
            max = value
        }
        else if (value > secondMax) {
            secondMax = value
        }
    }
    console.log(`Second Max Element is: ${secondMax}`)
}
secondLargestElement(arr3)

// Step	       value	CurrentMax	Current SecondMax	value > max?	     What happens
// Start	     —	     10	           10	                 —	            Initial values
// 1	         10	     10	           10	                ❌	               Nothing
// 2	         5	     10	           10	                ❌	               Nothing
// 3	         20	     10	           10	                ✅	               secondMax = 10, max = 20
// 4	         8	     20	           10	                ❌	                8 > 10 ❌ → Nothing
// 5	         15	     20	           10	                ❌	               15 > 10 ✅ → secondMax = 15


// Find the second-smallest element
console.log('Q52 Find the second-smallest element');
let arr4: number[] = [10, 5, 20, 8, 15];

function secondSmallestElement(a: number[]) {
    //min Element
    let min: number = Infinity;
    let secondMin: number = Infinity;

    for (let value of a) {
        if (value < min) {
            secondMin = min;
            min = value
        }
        else if (value < secondMin) {
            secondMin = value
        }
    }
    console.log(`Second smallest Element is: ${secondMin}`)
}
secondSmallestElement(arr4)

// Step	       value	CurrentMin	Current SecondMin	value < min?	     What happens
// Start	     —	     Infinity	    Infinity	         —	            Initial values
// 1	         10	     10	           10	                ❌	               Nothing
// 2	         5	     10	           10	                ✅	               min = 5 ,secondmin =10
// 3	         20	     5	           10	                ❌	              Nothing
// 4	         8	     5	           10	                ❌	                8 < 10  → secondmin = 8
// 5	         15	     5	           8	                ❌	               Nothing


// Find the sum of all elements
console.log('Q54 Find the sum of all elements');
let arr5: number[] = [2, 4, 6, 8]


function sumElements(a: number[]) {
    let sum: number = 0;
    a.forEach((value) => {
        sum = sum + value
    })
    console.log(`Sum of Elements is: ${sum}`)
}
sumElements(arr5)


// Find the product of all elements
console.log('Q55 Find the product of all elements');
let arr6: number[] = [2, 3, 4]


function productElements(a: number[]) {
    let product: number = 1;
    a.forEach((value) => {
        product = product * value
    })
    console.log(`Product of Elements is: ${product}`)
}
productElements(arr6)


// Count even and odd numbers
console.log('Q56 Count even and odd numbers');
let arr7: number[] = [1, 2, 3, 4, 6]
function countEvenOdd(a: number[]) {
    let evenNum: number = 0;
    let oddNum: number = 0
    a.forEach((value) => {
        if (value % 2 === 0) {
            evenNum++;
        }
        else {
            oddNum++
        }

    })
    console.log(`Even Elements are: ${evenNum} and odd Elements are ${oddNum}`)
}
countEvenOdd(arr7)


// Separate even and odd numbers

console.log('Q57 Separate even and odd numbers');
let arr8: number[] = [1, 2, 3, 4, 6]
function separateEvenOdd(a: number[]) {
    let evenNum: number[] = [];
    let oddNum: number[] = []
    a.forEach((value) => {
        if (value % 2 === 0) {
            evenNum.push(value)
        }
        else {
            oddNum.push(value)
        }

    })
    console.log(`Even Elements are: ${evenNum} and odd Elements are ${oddNum}`)
}
separateEvenOdd(arr8)


// Find the largest difference between two elements
console.log('Q58 Find the largest difference between two elements');

// Input:
// [3, 10, 2, 15, 6]

// Expected Output:
// 13


// Find duplicate elements
console.log('Q59 Find duplicate elements');
let arr9: number[] = [1, 2, 3, 2, 4, 1]
function duplicateElements(a: number[]) {
    let duplicateElements: number[] = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                duplicateElements.push(a[i])
            }
        }

    }

    console.log(duplicateElements)
}
duplicateElements(arr9)


// Remove duplicate elements
console.log('Q60 Remove duplicate elements');
let arr10: number[] = [1, 2, 2, 3, 1, 4]
function removeduplicateElements(a: number[]) {
    let sortArray = a.sort();
    for (let i = 0; i < sortArray.length; i++) {
        for (let j = i + 1; j < sortArray.length; j++) {
            if (sortArray[i] == sortArray[j]) {
                sortArray.splice(sortArray[i], 1)
            }
        }

    }
    console.log(sortArray)
}
removeduplicateElements(arr10)


// Find the missing element
console.log('Q61 Find the missing element');
let arr11: number[] = [1, 2, 4, 5]
let totalLength = 5;
function missingElements(a: number[], n: number) {
    let expectedSum: number = (n * (n + 1)) / 2
    let actualSum = 0;
    a.forEach((v) => {
        actualSum = actualSum + v;
    }
    )
    console.log('Missing NUmber is: ', expectedSum - actualSum)
}
missingElements(arr11, totalLength)


// Find elements appearing only once
console.log('Q62 Find elements appearing only once');
let arr12: number[] = [1, 2, 2, 3, 4, 4, 5]

function frequencyElements(a: number[]) {
    let empObj: { [key: number]: number } = {};

    for (let value of a) {
        if (empObj[value] === undefined) {
            empObj[value] = 1
        }
        else {
            empObj[value] = empObj[value] + 1
        }
    }
    console.log(empObj)

    for (let char in empObj) {
        if (empObj[char] === 1) {
            console.log(char, empObj[char])
        }
    }
}
frequencyElements(arr12)


// Find frequency of each element

console.log('Q63 Find frequency of each element');
let arr13: number[] = [1, 2, 2, 3, 1, 1]
function frequencyofeachElements(a: number[]) {
    let empObj: { [key: number]: number } = {};

    for (let value of a) {
        if (empObj[value] === undefined) {
            empObj[value] = 1
        }
        else {
            empObj[value] = empObj[value] + 1
        }
    }
    console.log(empObj)

}
frequencyofeachElements(arr13)


// Find the most frequent element
console.log('Q64 Find the most frequent element');
let arr14: number[] = [1, 2, 2, 3, 2, 1]

function mostfrequentElements(a: number[]) {
    let empObj: { [key: number]: number } = {};

    for (let value of a) {
        if (empObj[value] === undefined) {
            empObj[value] = 1
        }
        else {
            empObj[value] = empObj[value] + 1
        }
    }
    console.log(empObj)

    let maxCount = 0
    let maxNum;

    for (let char in empObj) {
        if (empObj[char] > maxCount) {
            maxCount = empObj[char];
            maxNum = char
        }
    }
    console.log(`Most frequent Element is ${maxNum} with count: ${maxCount}`)
}
mostfrequentElements(arr14)


// Find common elements between two arrays
console.log('Q65 Find common elements between two arrays');

// Input:
// [1, 2, 3, 4]
// [3, 4, 5, 6]

// Expected Output:
// [3, 4]


// Find union of two arrays

console.log('Q66 Find union of two arrays');

// Input:
// [1, 2, 3]
// [3, 4, 5]

// Expected Output:
// [1, 2, 3, 4, 5]


// Find intersection of two arrays

console.log('Q67 Find intersection of two arrays');

// Input:
// [1, 2, 3, 4]
// [3, 4, 5]

// Expected Output:
// [3, 4]


// Merge two arrays

console.log('Q68 Merge two arrays');

// Input:
// [1, 2]
// [3, 4]

// Expected Output:
// [1, 2, 3, 4]


// Merge two sorted arrays

console.log('Q69 Merge two sorted arrays');

// Input:
// [1, 4, 7]
// [2, 3, 8]

// Expected Output:
// [1, 2, 3, 4, 7, 8]


// Find elements present in first array but not second

console.log('Q70 Find elements present in first array but not second');

// Input:
// [1, 2, 3, 4]
// [2, 4, 5]

// Expected Output:
// [1, 3]


// Find a pair whose sum equals target

console.log('Q71 Find a pair whose sum equals target');

// Input:
// Array = [2, 7, 11, 15]
// Target = 9

// Expected Output:
// [2, 7]


// Find all pairs whose sum equals target

console.log('Q72 Find all pairs whose sum equals target');

// Input:
// Array = [1, 2, 3, 4, 5]
// Target = 6

// Expected Output:
// [[1, 5], [2, 4]]


// Find pairs whose sum is zero

console.log('Q73 Find pairs whose sum is zero');

// Input:
// [-3, -1, 0, 1, 3, 4]

// Expected Output:
// [[-3, 3], [-1, 1]]


// Perform linear search

console.log('Q74 Perform linear search');

// Input:
// Array = [10, 20, 30, 40]
// Target = 30

// Expected Output:
// Index = 2


// Perform binary search

console.log('Q75 Perform binary search');

// Input:
// Array = [10, 20, 30, 40, 50]
// Target = 40

// Expected Output:
// Index = 3


// Find index of a given element

console.log('Q76 Find index of a given element');

// Input:
// Array = [5, 10, 15, 20]
// Target = 15

// Expected Output:
// 2


// Find the first repeating element

console.log('Q77 Find the first repeating element');

// Input:
// [10, 5, 3, 4, 3, 5, 6]

// Expected Output:
// 5


// Find the first non-repeating element

console.log('Q78 Find the first non-repeating element');

// Input:
// [4, 5, 1, 2, 1, 4]

// Expected Output:
// 5


// Move all zeros to the end

console.log('Q79 Move all zeros to the end');

// Input:
// [0, 1, 0, 3, 12]

// Expected Output:
// [1, 3, 12, 0, 0]


// Move negative numbers to one side

console.log('Q80 Move negative numbers to one side');

// Input:
// [1, -2, 3, -4, 5, -6]

// Expected Output:
// [-2, -4, -6, 1, 3, 5]


// Rotate an array to the left

console.log('Q81 Rotate an array to the left');

// Input:
// [1, 2, 3, 4, 5]

// Expected Output:
// [2, 3, 4, 5, 1]


// Rotate an array to the right

console.log('Q82 Rotate an array to the right');

// Input:
// [1, 2, 3, 4, 5]

// Expected Output:
// [5, 1, 2, 3, 4]


// Reverse an array in place

console.log('Q83 Reverse an array in place');

// Input:
// [1, 2, 3, 4]

// Expected Output:
// [4, 3, 2, 1]


// Split an array into two halves

console.log('Q84 Split an array into two halves');

// Input:
// [1, 2, 3, 4, 5, 6]

// Expected Output:
// First half = [1, 2, 3]
// Second half = [4, 5, 6]


// Swap first and last elements

console.log('Q85 Swap first and last elements');

// Input:
// [10, 20, 30, 40]

// Expected Output:
// [40, 20, 30, 10]


// Move even numbers before odd numbers

console.log('Q86 Move even numbers before odd numbers');

// Input:
// [1, 2, 3, 4, 5, 6]

// Expected Output:
// [2, 4, 6, 1, 3, 5]


// Find the majority element
console.log('Q89 Find the majority element');
let arr18: number[] = [2, 2, 1, 2, 3, 2, 2]

function repeatedElement(a: number[]) {
    let empObj: { [key: number]: number } = {};

    for (let value of a) {
        if (empObj[value] === undefined) {
            empObj[value] = 1
        }
        else {
            empObj[value] = empObj[value] + 1
        }
    }
    console.log(empObj)

    let maxCount = 0
    let maxNum;

    for (let char in empObj) {
        if (empObj[char] > maxCount) {
            maxCount = empObj[char];
            maxNum = char
        }
    }
    console.log(`majority element is ${maxNum} with count: ${maxCount}`)
}
repeatedElement(arr18)


// Find elements greater than a target
console.log('Q90 Find elements greater than a target');
let arr17: number[] = [2, 8, 5, 12, 3]
let target: number = 5

function elementgreaterthanTarget(a: number[], t: number) {
    a.forEach((value) => {
        if (value > t) {
            console.log(`Element greater than target: ${value}`)

        }
    })
}
elementgreaterthanTarget(arr17, target)


// Find sum of positive and negative elements separately
console.log('Q91 Find sum of positive and negative elements separately');
let arr16: number[] = [2, -3, 4, -5, 6]
function sumpostivenegativeElements(a: number[]) {
    let positiveSum: number = 0;
    let negativeSum: number = 0;

    a.forEach((value) => {
        if (value > 0) {
            positiveSum = positiveSum + value
        }
        else {
            negativeSum = negativeSum + value
        }
    })
    console.log(`Positive Sum : ${positiveSum} and Negative Sum: ${negativeSum}`)
}
sumpostivenegativeElements(arr16)


// Find repeated elements and their counts
console.log('Q93 Find repeated elements and their counts');
let arr15: number[] = [1, 2, 2, 3, 1, 2]

function repeatedElements(a: number[]) {
    let empObj: { [key: number]: number } = {};

    for (let value of a) {
        if (empObj[value] === undefined) {
            empObj[value] = 1
        }
        else {
            empObj[value] = empObj[value] + 1
        }
    }
    console.log(empObj)

    for (let char in empObj) {
        if (empObj[char] > 1) {
            console.log(`${char} with count: ${empObj[char]}`)
        }
    }
}
repeatedElements(arr15)