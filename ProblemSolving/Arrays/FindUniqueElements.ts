// Set - container which doesnt allow duplicate values

let messyList : string[] = [
    "TC001",
    "TC002",
    "TC003",
    "TC002",
    "TC004",
    "TC001"
];

let cleanList = new Set(messyList);  // returns without duplicate values in form of set
let cleanListArr = Array.from(cleanList) //converting back to array
console.log(cleanListArr)


// without inbuilt 
let resetarr :string[] = []
for (const val of messyList) {
    if(!(resetarr.includes(val))){
           resetarr.push(val)
    }
      
}
console.log(resetarr)