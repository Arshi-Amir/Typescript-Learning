let scores = [12, 45, 99, 34, 67,1];

function findMinmumScore(s: number[]): number {
    if (s.length === 0) {
        return -1;
    }
    let minNum = s[0];
    for (const index in scores) {
        if (s[index] < minNum) {
            minNum = s[index]
        }
    }

    return minNum;

}
console.log(findMinmumScore(scores));

