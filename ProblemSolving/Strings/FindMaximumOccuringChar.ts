let str = 'programming';

function maxOccuringCharacter(str: string): string {
    //creating empty obj
    let emptyObj: { [key: string]: number } = {};

    //using for of loop it will go thorugh each value
    for (const element of str) {

        // instead of ifelse we can write like this as well  emptyObj[element] = (emptyObj[element] || 0 ) + 1
        if (emptyObj[element] === undefined || emptyObj[element] === 0) {
            emptyObj[element] = 1
        }
        else {
            emptyObj[element] = emptyObj[element] + 1
        }
    }
    console.log(emptyObj)

    //find max occuring char
    let maxChar = '';
    let count = 0;

    for (const element in emptyObj) {
        if (emptyObj[element] > count) {
            count = emptyObj[element];
            maxChar = element
        }
    }
    return `Maximun Occuring Character is ${maxChar} and count is ${count}`
}
console.log(maxOccuringCharacter(str));
