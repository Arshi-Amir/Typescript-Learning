// Logic :

// sort alphbetically ==>convert to array then apply method for sort

function charOccurrence(str : string){
    let sort_input = str.split("").sort().join('');
    console.log(sort_input)
      let count = 1;
       
   for (let i = 0; i < sort_input.length; i++) {
     
       if(sort_input[i] === sort_input[i+1]){
       count ++ ;
     }
     else {
        console.log(sort_input[i] , count)
        count=1
     }
    
}
}
charOccurrence("programming")
