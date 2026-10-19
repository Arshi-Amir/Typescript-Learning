// how many rows we want ? ===> as per current req 5
// how many stars per row ? ===> as per current req increment

//Outer loop - No of rows 5
for (let outer = 1; outer <= 5; outer++) {
    let pattern: string = ''

    //Inner loop for stars per row
    for (let inner = 1; inner <= outer; inner++) {
        pattern = pattern + '*'

    }
    console.log(pattern)
}

//*      outer = 1 , inner will execute 1 time
//**     outer = 2
//***



