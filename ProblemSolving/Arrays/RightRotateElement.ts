
let num : number[] = [30 ,40 , 50 , 20]
function rightRotateElement(arr : number[]) : number[] {
     
    //saving the last element
     let lastElement = arr[arr.length -1];

    //will start loop from last index (right to left) and move values to right
     for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i-1];
     } 
     arr[0] = lastElement;
   return arr;

}
console.log(rightRotateElement(num));

//Explanation
//let num : number[] = [30 ,40 , 50 , 20]
//                      0 , 1  , 2  ,  3

//  for (let i = arr.length - 1; i > 0; i--) {
//             arr[i] = arr[i-1];
//      }    

// Iteration 1 : 
// for (i = 3) { arr[3] = arr[3-1] => arr[2]=> 50}
//   [30,40,50,50]

// Iteration 2 : 
// for (i = 2) { arr[2] = arr[2-1] => arr[1]=> 40}
//   [30,40,40,50]


// Iteration 3 : 
// for (i = 1) { arr[1] = arr[1-1] => arr[0]=> 30}
//   [30,30,40,50]
