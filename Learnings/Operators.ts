// Arithematic Operators : + , - , / , * , % , **
let j = 10
console.log (j**5);


// Assignment Operators /short-hand operators

// a+= 5      (a = a + 5)
// a -= 5
// a%= 5
// a*=5
// a/=5


// Comparison operators / Relational Operators
// < , > , == , <= , >= , === , != , !==
// == (check only value) , === (check value with datatype)

let a : any = 10;
let b: string = '10';
console.log(a == b);
console.log (a === b );


//Logical Operators
// && , || , !(value/condition)
console.log(!(a > b));



//Increment Decrement Operator Learning
let myage : number = 10;
console.log(myage++); //postfix increment operator
console.log(myage--); //postfix decrement operator

let math_num : number= 30;
console.log(++math_num);  //pre increment
console.log(--math_num);  //pre decrement


//Special Operators
// 1-Ternary operator / Conditional Operator
// let variable name = condition ? true : false
let gradeA : number = 52;
let gradeB : number = 50;

let result = (gradeA > gradeB && gradeA > 10) ? `Grade A is winner` : `Grade A is loser`;
console.log(result)


//2- Nullish Coaeliscing Operator (null / undefined)
// ?? ==> it will return values avioding null/undefined

let name : string | null = null;
let r = name ?? "guest";
console.log(r)


//3- Typeof
// it will tell datatype
console.log(typeof name)


//4- Optional Chaining
// ?. ==> Safely access a property/method
 let user: {  
    name: string;
      address?: {
        city: string;
    };
} = {
    name: "Ali"
};

console.log(user.address?.city); 
let username : {name : string , email : string , addresses?: {city : string}} = {
    name : "abc",
    email : "abc@gmail.com"
}

console.log(username.addresses?.city)


const mockApiResponse = {
data: {
user: {
id: 55,
profile: {email : undefined}, // email missing intentionally
},
},
retryCount: 0,
};


//Practice Exercise for Mentees
//1. Safely extracts user.profile.email, falling back to
//"unknown@example.com" if missing.
console.log(mockApiResponse ?.data?.user?.profile?.email ?? "unknown@example.com")

//2. Uses ?? (not ||) to default a retryCount of 0 correctly.
console.log(mockApiResponse?.retryCount ?? "No-value")