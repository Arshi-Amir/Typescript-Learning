let input : string = 'B';

function checkAlphabeticChar(str : string) : boolean{
      let regExp = /[a-zA-Z]/;
      return regExp.test(str);
}
console.log(checkAlphabeticChar(input))


//without Regular Expression
let exp : string = 'SDET1239';
function containDigit(str : string){
for (const char of exp.toLowerCase()) {
    if(char >= 'a' && char <= 'z' ){
        console.log('String contains alphabet' , char)
    }
}
}
containDigit(exp);