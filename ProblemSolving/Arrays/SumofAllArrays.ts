let coins: number[][] = [[1, 2], [3, 4], [5], [6, 7], [3]];

// using for loop
function sumArray(c: number[][]): number {
    if (c.length === 0) {
        return -1;
    }
    let sum: number = 0;
    for (let i = 0; i < c.length; i++) {

        for (let j = 0; j < c[i].length; j++) {
            sum = sum + c[i][j];
            // console.log(c[i] , c[i][j]  , sum)
        }

    }

    return sum;
}
console.log('Using for loop ', sumArray(coins));


// using for of loop

function sumArrayElements(c: number[][]): number {
    if (c.length === 0) {
        return -1;
    }
    let sum = 0;

    // Take one box at a time
    for (const val of c) {

        // Take one coin from single box 
        for (const v of val) {
            sum = sum + v
        }
    }

    return sum
}
console.log('Using for of Loop ', sumArrayElements(coins));
