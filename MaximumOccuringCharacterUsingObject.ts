function maxChar(str : string) : string {
    let charFrequency :{[key : string] : number} = {};
    for (let i = 0; i < str.length; i++) {
        if(charFrequency[str[i]] === undefined || charFrequency[str[i]] === 0){
            charFrequency[str[i]] = 1;
        }
        else {
            charFrequency[str[i]] = charFrequency[str[i]] + 1
        }
    }
     console.log(charFrequency)

     let maxcount = 0;
     let maxchar = ''
     for (const val in charFrequency) {
           if(charFrequency[val] > maxcount){
                maxcount = charFrequency[val];
                maxchar = val
           }
        
     }
    
    return maxchar + maxcount
}
console.log(maxChar('programming'));
