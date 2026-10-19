//Outer loop - No of rows 5
for (let outer = 1; outer <= 5; outer++) {
    let pattern: string = ''

    //Inner loop for stars per row
    for (let inner = 5; inner >= outer; inner--) {
        pattern = pattern + '*'

    }
    console.log(pattern)
}
