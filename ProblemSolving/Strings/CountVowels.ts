let string : string= 'programmIng';

function countVowelsConsonants(str: string): string {
    let vowels = 'aeiouAEIOU';
    let count : number = 0;
    let consonantCount: number = 0

    for (const element of str) {
        if (vowels.includes(element)) {
            count = count + 1
            console.log (element)
        }
        else {
            consonantCount += 1
        }
    }

    return `Count of vowels : ${count} and count of consonants : ${consonantCount}`

}
console.log(countVowelsConsonants(string));


function countVowels(str:string) : number{
    let vowels = new Set(['a','e','i','o','u']);
    let count = 0;
    for (const element of str.toLowerCase()) {
         if(vowels.has(element)){
            count+=1
         }
    }
    return count

}
console.log(countVowels(string))