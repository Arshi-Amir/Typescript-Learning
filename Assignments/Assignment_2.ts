//If / Else Statements —Assignment

// Q1. (Simple if) You have a variable isElementVisible: boolean
// = true. Write an if statement (no else) that prints "Element is
// visible, proceeding to click" only when the element is visible.

let  isElementVisible: boolean = true;
if(isElementVisible){
    console.log("Element is visible, proceeding to click")
}


// Q2. (if...else) You have const statusCode: number = 404;.
// Write an if...else statement that prints "Request successful" if
// statusCode is 200, otherwise prints "Request failed".
const statusCode: number = 404;
if(statusCode == 200){
    console.log("Request successful")
}
else{
    console.log("Request failed");
}

// Q3. (if...else if...else) You have const httpStatus: number = 500;. Write a check that prints:
// • "Success" if status is 200
// • "Client Error" if status is between 400 and 499
// • "Server Error" if status is 500 or above
// • "Unknown Status" for anything else
const httpStatus: number = 500;
if(httpStatus === 200){
console.log("Success")
}else if(httpStatus >= 400 && httpStatus <=499 ){
console.log("Client Error")
}else if(httpStatus >= 500){
console.log("Server Error")
}else{
    console.log("Unknown Status")
}


// Q4. (Simple if with logical operator) You have const username:
// string = "admin"; and const password: string = "";. Write
// a single if statement (no else) that prints "Login blocked:
// missing credentials" only when either the username or password
// is an empty string.

const username: string = "admin";
const password: string = "";
if(username === "" || password === ""){
    console.log("Login blocked: missing credentials")
}

// Q5. (if...else with nested if) You have const isLoggedIn:
// boolean = true; and const userRole: string = "guest";.
// Write a check that:

// • If isLoggedIn is false, print "Redirect to login page".
// • If isLoggedIn is true, check userRole: print "Show admin
// dashboard" if role is "admin", otherwise print "Show limited
// dashboard".
const isLoggedIn:boolean = true; 
const userRole: string = "guest";
if(!(isLoggedIn)){
    console.log ("Redirect to login page")
}
else if(userRole === "admin"){
    console.log ("Show admin dashboard")
}
else{
    console.log ("Show limited dashboard")
}
