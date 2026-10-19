let string = 'cat';

console.log('Length of string : ', string.length)


function reverseString(str: string): string {
    console.log('Orignal string is : ',str);

    let reverseString: string = '';

    for (let i = string.length - 1; i >= 0; i--) {

        reverseString = reverseString + string[i]
    }

    return `The reverse of orignal string is: ${reverseString}`;
}
console.log(reverseString(string)) 
