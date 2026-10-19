// Regular expression - /^\d+$/
// / - beginning  and ending
// \d - digit rule - guards character between 0 and 9
// + (one or more rule) should not stop after checking one char , should continue
// $ - check till last character

function isDigit(str : string) : boolean{
const regularExp = /^\d+$/;
return regularExp.test(str)
}

console.log(isDigit('112d'))


//without Regular Expression
let exp : string = 'SDET1239';
function containDigit(str : string){
for (const char of exp) {
    if(char >= '0' && char <= '9' ){
        console.log('String contains numbers' , char)
    }
}
}
containDigit(exp);