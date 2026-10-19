
for (let outer = 1; outer <= 5; outer++) {
    let pattern = '';

     for (let index = 1; index <= outer ; index++) {
            pattern = pattern + '*'   
     }
     console.log(pattern)   
}
for (let outer = 1; outer <= 4; outer++) {  
    let pattern = '';

     for (let index = 4; index >= outer ; index--) {
            pattern = pattern + '*'   
     }
     console.log(pattern) 
}