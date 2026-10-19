// we need to ask 2 questions to ourself
// how many rows we want ? ===> as per current req 5
// how many stars per row ? ===> as per current req 5


// outer loop - No of rows
for (let outer = 0; outer < 5; outer++) {
    // keeping it empty since for each row it will reset
    let pattern = '';

    // Inner loop - No of stars per row
     for (let inner = 0; inner < 5; inner++) {
            pattern = pattern + '*'   
     }
     console.log(pattern)   
}