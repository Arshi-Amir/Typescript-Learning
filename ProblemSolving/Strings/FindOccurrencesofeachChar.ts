let input: string = 'hello';

function findOccurrenceofEachChar(str: string) {

    //initialize empty obj
    let emptyObj: { [key: string]: number } = {};

    //using for of loop since it will deal with each char separately
    for (const char of str.toLowerCase()) {
        if (emptyObj[char] === undefined || emptyObj[char] === 0) {
            emptyObj[char] = 1
        }
        else {
            emptyObj[char] = emptyObj[char] + 1;
        }
    }
    return emptyObj
}

console.log(findOccurrenceofEachChar(input))