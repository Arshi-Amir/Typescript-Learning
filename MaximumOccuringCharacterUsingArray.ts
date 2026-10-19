function maxChar(str : string) : string {

    //STEP 1 : Convert to array, then sorted and back to string
    let sortStr = str.split('').sort().join('');
    console.log(sortStr);

    //SETP 2: Initilized count variable with 1
    let count = 1;
    let mycharObj : {[key : string] : number} = {};

    //SETP 3 : Apply for loop
    for (let i = 0; i < sortStr.length  ; i++) {
         if(sortStr[i] == sortStr[i+1]){
                count++;
         }
         else {
               console.log(sortStr[i] , ": ", count);
               mycharObj[sortStr[i]] = count
               count = 1;
         }
        
    }
    console.log(mycharObj);

    let maxChar ='';
    let maxCount = 0;

    //SETP 4 :checking max char from object
    for (const val in mycharObj) {
         if(mycharObj[val] > maxCount){
               maxCount = mycharObj[val];
               maxChar = val
         } 
    }

    //SETP 5 :it will look into orignal string and then provide max char
    for (const val of str) {
         if(mycharObj[val] === maxCount){
                  return `Maximum Occurring character is : ${val} with frequency ${maxCount}`
         }
    }
   return '';
}
maxChar('programming');
console.log(maxChar('programming'));

//aggimmnoprr

// sortStr[i]    sortStr[i+1]     T/F       Execution       Result
//    a             g             F          else            a = 1
//    g             g             T           if             count = 2
//    g             i             F          else            g = 2
//    i             m             F          else            i = 1
//    m             m             T           if             count = 2
//    m             n             F          else            m = 2
//    n             o             F          else            n = 1
//    o             p             F          else            o = 1
//    p             r             F          else            p = 1
//    r             r             T          if              count = 2
//    r             -             F          else            r = 2