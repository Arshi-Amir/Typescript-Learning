const arr: number[] = [1, 2, 3, 4, 5];
//                     0 1   2  3  4

function doublerotation(s: number[]) {
    for (let rotation = 1; rotation <= 2; rotation++) {
        // taking last element and storing it temporarily
        let lastElement = s[s.length - 1]
        console.log(lastElement)

        // start loop from end 

        for (let i = s.length - 1; i > 0; i--) {
            s[i] = s[i - 1]
        }
        s[0] = lastElement
        console.log(s)
    }



}
doublerotation(arr)

//[1, 2, 3, 4, 5];
// 0 1   2  3  4

// s[i] = s[i-1]    ===> i = s.length - 1 = 5-1 = 4

// s[4] = s[4-1]    ==> s[4] = s[3]  ==> postion 3 element is now assigned to position 4
// s[3] = s[3-1]    ==> s[3] = s[2]  ==> postion 2 element is now assigned to position 3
// s[2] = s[2-1]    ==> s[2] = s[1]  ==> postion 1 element is now assigned to position 2
// s[1] = s[1-1]    ==> s[1] = s[0]  ==> postion 0 element is now assigned to position 1

// loop exits

// s[0]  = last element is assigned