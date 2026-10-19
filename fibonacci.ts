// 13 = 0,1,1,2,3,5,8,13  (add prev and next num)


function fibonacci(numb : number) {
    let num : number[] = [0,1];
for (let i = 0; i < numb; i++) {
     let result = num[i] + num[i+1];
     num.push(result)
}
console.log(num)    
}
fibonacci(5)
