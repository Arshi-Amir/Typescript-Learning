let exp :string = 'abc 1'

function containSpecialChar(str:string) : boolean{ 
    
    let regularExpression = /[^a-zA-z0-9]/
    if(regularExpression.test(str)){
        console.log('Contains Special Chars')
          return true
    }
    return false
      
}

console.log(containSpecialChar(exp))