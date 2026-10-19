let scores = [12, 45, 99, 34, 67];

function findHighestScore(s: number[]): number {

    //Incase array is empty
    if (s.length === 0) {
        return -1;
    }

    let maxNum = s[0];

    for (const s of scores) {
        if (s > maxNum) {
            maxNum = s;
        }
    }
    return maxNum
}

console.log(findHighestScore(scores));