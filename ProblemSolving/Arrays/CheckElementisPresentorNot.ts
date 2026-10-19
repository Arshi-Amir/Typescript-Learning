//using built-in method
let myfruits = ['apple' , 'banana','pineapple','kiwi','GRAPES']
function isElementPresent(arr : string[]) : boolean{
    if(arr.includes('kiwi')){
        return true
    }
    
    return false;
}
console.log(isElementPresent(myfruits));

//without built-in method
function isElementPresents(arr : string[] , target : string) : boolean{
     for (const index in arr) {
         if(arr[index] === target){
            return true
         }
     }
     return false;
}
console.log(isElementPresents(myfruits,'grapes'));